export function TaxaAleloA(x: number, y: number): string {
  const result = x * 3.5 / 100;
  return result.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });
}

export function TaxaAleloM(x: number, y: number): string {
  if (y !== 0) {
    const result = x * y;
    const resultA = result / 100;
    const formatado = resultA.toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL",
    });
    return formatado;
  }
  return "R$ 0,00";
}

export function AleloTFB(): string {
  const resultA = 0.9;
  return resultA.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });
}

export function AleloAnuidade(): string {
  const resultA = 190.0;
  return resultA.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });
}

export function AleloAdesao(): string {
  const resultA = 120.0;
  return resultA.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });
}

export function TotalAlelo(x: number, y: number): string {
  if (y !== 0) {
    const result = (x * y - x * 3.5) / 100;
    return result.toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL",
    });
  }
  return "R$ 0,00";
}

export function TotalAleloAnual(x: number, y: number): string {
  if (y !== 0) {
    const result = ((x * y - x * 3.5) * 12) / 100;
    return result.toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL",
    });
  }
  return "R$ 0,00";
}