export function TaxaSodexoA(x: number, y: number): string {
  const result = x * 3.5;
  const resultB = result / 100;
  const formatado = resultB.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });
  return formatado;
}

export function TaxaSodexoM(x: number, y: number): string | number {
  if (y !== 0) {
    const result = x * y;
    const resultA = result / 100;
    const formatado = resultA.toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL",
    });
    return formatado;
  }
  return 0;
}

export function TotalSodexo(x: number, y: number): string | number {
  if (y !== 0) {
    const result = (x * y - x * 3.5) / 100;
    const formatado = result.toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL",
    });
    return formatado;
  }
  return 0;
}

export function TotalSodexoAnual(x: number, y: number): string | number {
  if (y !== 0) {
    const result = ((x * y - x * 3.5) * 12) / 100;
    const formatado = result.toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL",
    });
    return formatado;
  }
  return 0;
}
