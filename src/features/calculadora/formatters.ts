// src/utils/form.ts

export function formatarMoeda(valor: string): string {
  const apenasNumeros = valor.replace(/\D/g, "");
  const numero = Number(apenasNumeros) / 100;

  return numero.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });
}

export function formatarTaxa(valor: string): string {
  const apenasNumeros = valor.replace(/\D/g, "");
  const numero = Number(apenasNumeros) / 10;

  return numero.toLocaleString("pt-BR", {
    minimumFractionDigits: 1,
    maximumFractionDigits: 1,
  }) + "%";
}

export function extrairNumero(valor: string): number {
  return Number(
    valor.replace("R$", "").replace("%", "").replace(/\./g, "").replace(",", ".").trim()
  );
}
