// sodexo.ts
export function TaxaSodexoA(x: number): string {
  const result = x * 3.5 / 100;
  return result.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });
}

export function TaxaSodexoM(x: number, y: number): string {
  if (y !== 0) {
    const result = x * (y / 100);
    return result.toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL",
    });
  }
  return "R$ 0,00";
}

export function TotalSodexo(x: number, y: number): string {
  if (y !== 0) {
    const result = x * (y / 100);
    return result.toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL",
    });
  }
  return "R$ 0,00";
}

export function TotalSodexoAnual(x: number, y: number): string {
  if (y !== 0) {
    const result = x * (y / 100) * 12;
    return result.toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL",
    });
  }
  return "R$ 0,00";
}