"use client";

import { useState } from "react";
import Button from "../utils/button";
import { TaxaAleloA } from "./calculadora/alelo";
import { TaxaBenM } from "./calculadora/ben";
import { TotalSodexoAnual } from "./calculadora/sodexo";
import { AdesaoTicket } from "./calculadora/ticket";
import {
  formatarMoeda,
  formatarTaxa,
  extrairNumero,
} from "../utils/formatters";

export default function Form(): React.ReactNode {
  const [alelo, setAlelo] = useState("");
  const [pluxee, setPluxee] = useState("");
  const [ticket, setTicket] = useState("");
  const [ben, setBen] = useState("");

  const [taxa1, setTaxa1] = useState("");
  const [taxa2, setTaxa2] = useState("");
  const [taxa3, setTaxa3] = useState("");
  const [taxa4, setTaxa4] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const a = extrairNumero(alelo);
    const b = extrairNumero(pluxee);
    const c = extrairNumero(ticket);
    const d = extrairNumero(ben);

    const t1 = extrairNumero(taxa1);
    const t2 = extrairNumero(taxa2);
    const t3 = extrairNumero(taxa3);
    const t4 = extrairNumero(taxa4);

    let resultadoAlelo = TaxaAleloA(a);
    let resultadoBen = TaxaBenM(d, t4);
    let resultadoSodexo = TotalSodexoAnual(b, t2);
    let resultadoTicketAdesao = AdesaoTicket();

    console.log("Alelo:", resultadoAlelo);
    console.log("Ben:", resultadoBen);
    console.log("Sodexo:", resultadoSodexo);
    console.log("Ticket Adesão:", resultadoTicketAdesao);
    console.log("Taxas:", t1, t2, t3, t4);
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* Faturamentos */}
      <input
        type="text"
        placeholder="Faturamento Alelo"
        value={alelo}
        onChange={(e) => setAlelo(formatarMoeda(e.target.value))}
      />
      <input
        type="text"
        placeholder="Faturamento Pluxee"
        value={pluxee}
        onChange={(e) => setPluxee(formatarMoeda(e.target.value))}
      />
      <input
        type="text"
        placeholder="Faturamento Ticket"
        value={ticket}
        onChange={(e) => setTicket(formatarMoeda(e.target.value))}
      />
      <input
        type="text"
        placeholder="Faturamento Ben"
        value={ben}
        onChange={(e) => setBen(formatarMoeda(e.target.value))}
      />

      {/* Taxas */}
      <input
        type="text"
        placeholder="Taxa Alelo (%)"
        value={taxa1}
        onChange={(e) => setTaxa1(formatarTaxa(e.target.value))}
      />
      <input
        type="text"
        placeholder="Taxa Pluxee (%)"
        value={taxa2}
        onChange={(e) => setTaxa2(formatarTaxa(e.target.value))}
      />
      <input
        type="text"
        placeholder="Taxa Ticket (%)"
        value={taxa3}
        onChange={(e) => setTaxa3(formatarTaxa(e.target.value))}
      />
      <input
        type="text"
        placeholder="Taxa Ben (%)"
        value={taxa4}
        onChange={(e) => setTaxa4(formatarTaxa(e.target.value))}
      />

      <Button />
    </form>
  );
}
