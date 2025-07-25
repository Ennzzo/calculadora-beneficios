// SCRIPT.TS


function formatar(valor: number): string {
  return valor.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });
}


export function TotalResultMensal(
  taxaAlelo: number,
  taxaBen: number,
  taxaTicket: number,
  taxaSodexo: number,
  valorAlelo: number,
  valorBen: number,
  valorTicket: number,
  valorSodexo: number
): string {
  if (
    valorAlelo === 0 &&
    valorBen === 0 &&
    valorTicket === 0 &&
    valorSodexo === 0
  ) {
    return "R$ 0,00";
  }

  const economiaAlelo = ((valorAlelo * taxaAlelo) - (valorAlelo * 3.5)) / 100;
  const economiaBen = ((valorBen * taxaBen) - (valorBen * 3.5)) / 100;
  const economiaTicket = ((valorTicket * taxaTicket) - (valorTicket * 3.5)) / 100;
  const economiaSodexo = ((valorSodexo * taxaSodexo) - (valorSodexo * 3.9)) / 100;

  const totalMensal =
    economiaAlelo + economiaBen + economiaTicket + economiaSodexo;

  return formatar(totalMensal);
}



export function TotalResultAnual(
  taxaAlelo: number,
  taxaBen: number,
  taxaTicket: number,
  taxaSodexo: number,
  valorAlelo: number,
  valorBen: number,
  valorTicket: number,
  valorSodexo: number
): string {
  const economiaAlelo = ((valorAlelo * (taxaAlelo - 3.5)) / 100);
  const economiaBen = ((valorBen * (taxaBen - 3.5)) / 100);
  const economiaTicket = ((valorTicket * (taxaTicket - 3.5)) / 100);
  const economiaSodexo = ((valorSodexo * (taxaSodexo - 3.9)) / 100);

  const totalAnual = (economiaAlelo + economiaBen + economiaTicket + economiaSodexo) * 12;

  return formatar(totalAnual);
}
