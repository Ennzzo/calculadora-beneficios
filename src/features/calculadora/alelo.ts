// alelo.ts
export function TaxaAleloA(x: number, y: number): string {
  const result = x * 3.5 / 100;
  return result.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });
}

export function TaxaAleloM(x: number, y: number): string {
  if (y !== 0) {
    const result = x * (y / 100);
    return result.toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL",
    });
  }
  return "R$ 0,00";
}

export function AleloTFB(): string {
  return (0.9).toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });
}

export function AleloAnuidade(): string {
  return (190.0).toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });
}

export function AleloAdesao(): string {
  return (120.0).toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });
}

export function TotalAlelo(x: number, y: number): string {
  if (y !== 0) {
    const result = x * (y / 100);
    return result.toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL",
    });
  }
  return "R$ 0,00";
}

export function TotalAleloAnual(x: number, y: number): string {
  if (y !== 0) {
    const result = x * (y / 100) * 12;
    return result.toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL",
    });
  }
  return "R$ 0,00";
}