"use client";

import { useState } from "react";
import styles from "./form.module.css";
import { TotalResultAnual } from "../../features/calculadora/script";
import { TotalResultMensal } from "../../features/calculadora/script";
import {
  formatarMoeda,
  formatarTaxa,
  extrairNumero,
} from "../../features/calculadora/formatters";

export default function Form() {
  const [alelo, setAlelo] = useState("");
  const [pluxee, setPluxee] = useState("");
  const [ticket, setTicket] = useState("");
  const [ben, setBen] = useState("");

  const [taxa1, setTaxa1] = useState("");
  const [taxa2, setTaxa2] = useState("");
  const [taxa3, setTaxa3] = useState("");
  const [taxa4, setTaxa4] = useState("");

  const [resultadoTotal, setResultadoTotal] = useState<string | null>(null);
  const [resultadoMensal, setResultadoMensal] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const a = extrairNumero(alelo);   // Alelo
    const b = extrairNumero(pluxee);  // Pluxee
    const c = extrairNumero(ticket);  // Ticket
    const d = extrairNumero(ben);     // Ben

    const t1 = extrairNumero(taxa1);  // Pluxee
    const t2 = extrairNumero(taxa2);  // Alelo
    const t3 = extrairNumero(taxa3);  // Ticket
    const t4 = extrairNumero(taxa4);  // Ben

    console.log({
      mercado: t1,
      alelo: a,
      ben: d,
      ticket: c,
      sodexo: b,
    });

    const resultadoTotalFinal = TotalResultAnual(
      t2, // taxa Alelo
      t4, // taxa Ben
      t3, // taxa Ticket
      t1, // taxa Pluxee
      a,  // valor Alelo
      d,  // valor Ben
      c,  // valor Ticket
      b   // valor Pluxee
    );

    const resultadoMensalFinal = TotalResultMensal(t2, t4, t3, t1, a, d, c, b);

    setResultadoTotal(resultadoTotalFinal);
    setResultadoMensal(resultadoMensalFinal);
  };

  return (
    <form className={styles.container} onSubmit={handleSubmit}>
      <div className={styles.group}>
        <h4>Insira o faturamento exclusivo de cada bandeira:</h4>
        <div className={styles.grid}>
          <div className={styles.field}>
            <label htmlFor="pluxee">Faturamento Pluxee</label>
            <input
              id="pluxee"
              type="text"
              placeholder="R$"
              value={pluxee}
              onChange={(e) => setPluxee(formatarMoeda(e.target.value))}
            />
          </div>
          <div className={styles.field}>
            <label htmlFor="alelo">Faturamento Alelo</label>
            <input
              id="alelo"
              type="text"
              placeholder="R$"
              value={alelo}
              onChange={(e) => setAlelo(formatarMoeda(e.target.value))}
            />
          </div>
          <div className={styles.field}>
            <label htmlFor="ticket">Faturamento Ticket</label>
            <input
              id="ticket"
              type="text"
              placeholder="R$"
              value={ticket}
              onChange={(e) => setTicket(formatarMoeda(e.target.value))}
            />
          </div>
          <div className={styles.field}>
            <label htmlFor="ben">Faturamento Ben</label>
            <input
              id="ben"
              type="text"
              placeholder="R$"
              value={ben}
              onChange={(e) => setBen(formatarMoeda(e.target.value))}
            />
          </div>
        </div>
      </div>

      <div className={styles.group}>
        <h4>Insira o valor das taxas de cada bandeira:</h4>
        <div className={styles.grid}>
          <div className={styles.field}>
            <label htmlFor="tx1">Pluxee:</label>
            <input
              id="tx1"
              type="text"
              placeholder="0%"
              value={taxa1}
              onChange={(e) => setTaxa1(formatarTaxa(e.target.value))}
            />
          </div>
          <div className={styles.field}>
            <label htmlFor="tx2">Alelo:</label>
            <input
              id="tx2"
              type="text"
              placeholder="0%"
              value={taxa2}
              onChange={(e) => setTaxa2(formatarTaxa(e.target.value))}
            />
          </div>
          <div className={styles.field}>
            <label htmlFor="tx3">Ticket:</label>
            <input
              id="tx3"
              type="text"
              placeholder="0%"
              value={taxa3}
              onChange={(e) => setTaxa3(formatarTaxa(e.target.value))}
            />
          </div>
          <div className={styles.field}>
            <label htmlFor="tx4">Ben:</label>
            <input
              id="tx4"
              type="text"
              placeholder="0%"
              value={taxa4}
              onChange={(e) => setTaxa4(formatarTaxa(e.target.value))}
            />
          </div>
        </div>
      </div>

      <button type="submit" className={styles.button}>CALCULAR</button>

      {(resultadoMensal || resultadoTotal) && (
        <div className={styles.resultados}>
          <p><strong>Economia Aproximada Mensal:</strong></p>
          <p>{resultadoMensal}</p>
          <p><strong>Economia Aproximada Anual:</strong></p>
          <p>{resultadoTotal}</p>
        </div>
      )}
    </form>
  );
}
