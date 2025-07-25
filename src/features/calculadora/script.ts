// SCRIPT.TS

// Função auxiliar de formatação
function formatar(valor: number): string {
  return valor.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });
}

// Cálculo de Economia Mensal
export function TotalResultMensal(
  taxaMercado: number,
  valorAlelo: number,
  valorBen: number,
  valorTicket: number,
  valorSodexo: number,
  _f: number // reservado para uso futuro
): string {
  if (
    valorAlelo === 0 &&
    valorBen === 0 &&
    valorTicket === 0 &&
    valorSodexo === 0
  ) {
    return "R$ 0,00";
  }

  const economiaAlelo =
    ((valorAlelo * taxaMercado) - (valorAlelo * 3.5)) / 100;
  const economiaBen =
    ((valorBen * taxaMercado) - (valorBen * 3.5)) / 100;
  const economiaTicket =
    ((valorTicket * taxaMercado) - (valorTicket * 3.5)) / 100;
  const economiaSodexo =
    ((valorSodexo * taxaMercado) - (valorSodexo * 3.9)) / 100;

  const totalMensal =
    economiaAlelo + economiaBen + economiaTicket + economiaSodexo;

  return formatar(totalMensal);
}

// Cálculo de Economia Anual
export function TotalResultAnual(
  taxaMercado: number,
  valorAlelo: number,
  valorBen: number,
  valorTicket: number,
  valorSodexo: number,
  _f: number // reservado para uso futuro
): string {
  const economiaAlelo =
    ((valorAlelo * taxaMercado) - (valorAlelo * 3.5)) / 100;
  const economiaBen =
    ((valorBen * taxaMercado) - (valorBen * 3.5)) / 100;
  const economiaTicket =
    ((valorTicket * taxaMercado) - (valorTicket * 3.5)) / 100;
  const economiaSodexo =
    ((valorSodexo * taxaMercado) - (valorSodexo * 3.9)) / 100;

  const totalAnual =
    (economiaAlelo + economiaBen + economiaTicket + economiaSodexo) * 12;

  return formatar(totalAnual);
}
