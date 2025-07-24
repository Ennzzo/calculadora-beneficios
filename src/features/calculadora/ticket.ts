// ticket.ts
export function TaxaTicketA(x: number): string {
  const result = x * 3.5 / 100;
  return result.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });
}

export function TaxaTicketM(x: number, y: number): string {
  if (y !== 0) {
    const result = x * (y / 100);
    return result.toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL",
    });
  }
  return "R$ 0,00";
}

export function TaxaTFBTicket(): string {
  return (8.37).toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });
}

export function AnuidadeTicket(): string {
  return "Isento";
}

export function AdesaoTicket(): string {
  return (403.0).toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });
}

export function TotalTicket(x: number, y: number): string {
  if (y !== 0) {
    const result = x * (y / 100);
    return result.toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL",
    });
  }
  return "R$ 0,00";
}

export function TotalTicketAnual(x: number, y: number): string {
  if (y !== 0) {
    const result = x * (y / 100) * 12;
    return result.toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL",
    });
  }
  return "R$ 0,00";
}