// ben.ts
export function TaxaBenA(x: number): string {
  const result = x * 3.9 / 100;
  return result.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });
}

export function TaxaBenM(x: number, y: number): string {
  if (y !== 0) {
    const result = x * (y / 100);
    return result.toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL",
    });
  }
  return "R$ 0,00";
}

export function BenTFB(): string {
  return (1.1).toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });
}

export function BenAnuidade(): string {
  return (120.0).toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });
}

export function BenAdesao(): string {
  return "Isento a Adesão";
}

export function TotalBen(x: number, y: number): string {
  if (y !== 0) {
    const result = x * (y / 100);
    return result.toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL",
    });
  }
  return "R$ 0,00";
}

export function TotalBenAnual(x: number, y: number): string {
  if (y !== 0) {
    const result = x * (y / 100) * 12;
    return result.toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL",
    });
  }
  return "R$ 0,00";
}