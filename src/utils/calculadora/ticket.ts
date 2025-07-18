export function TaxaTicketA(x: number): string {
  const result = x * 3.5;
  const resultB = result / 100;
  return resultB.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });
}

export function TaxaTicketM(x: number, y: number): string | number {
  if (y !== 0) {
    const result = x * y;
    const resultA = result / 100;
    return resultA.toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL",
    });
  }
  return 0;
}

export function TaxaTFBTicket(): string {
  const resultA = 8.37;
  return resultA.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });
}

export function AnuidadeTicket(): string {
  return "Isento";
}

export function AdesaoTicket(): string {
  const resultA = 403.0;
  const formatado = resultA.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });
  return formatado;
}

export function TotalTicket(x: number, y: number): string | number {
  if (y !== 0) {
    const result = (x * y - x * 3.5) / 100;
    return result.toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL",
    });
  }
  return 0;
}

export function TotalTicketAnual(x: number, y: number): string | number {
  if (y !== 0) {
    const result = ((x * y - x * 3.5) * 12) / 100;
    return result.toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL",
    });
  }
  return 0;
}
