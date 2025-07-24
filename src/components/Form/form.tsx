"use client";

import { useState } from "react";
import styles from "./form.module.css";
import { TotalAlelo } from "../../features/calculadora/alelo";
import { TotalBen } from "../../features/calculadora/ben";
import { TotalSodexo } from "../../features/calculadora/sodexo";
import { TotalTicket } from "../../features/calculadora/ticket";
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


  const [resultadoAlelo, setResultadoAlelo] = useState<string | null>(null);
  const [resultadoBen, setResultadoBen] = useState<string | null>(null);
  const [resultadoSodexo, setResultadoSodexo] = useState<string | null>(null);
  const [resultadoTicket, setResultadoTicket] = useState<string | null>(null);

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

    const resultadoA = TotalAlelo(a, t2); // taxa2 = Alelo
    const resultadoB = TotalBen(d, t4);   // taxa4 = Ben
    const resultadoS = TotalSodexo(b, t1); // taxa1 = Pluxee
    const resultadoT = TotalTicket(c, t3); // taxa3 = Ticket

    setResultadoAlelo(resultadoA); 
    setResultadoBen(resultadoB);   
    setResultadoSodexo(formatarMoeda(resultadoS)); 
    setResultadoTicket(formatarMoeda(resultadoT));
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

      {/* RESULTADOS */}
      <div className={styles.resultados}>
        <p><strong>Economia Aproximada Total:</strong></p>
        {resultadoAlelo && (
          <p><strong>Alelo:</strong> {resultadoAlelo}</p>
        )}
        {resultadoBen && (
          <p><strong>Ben:</strong> {resultadoBen}</p>
        )}
        {resultadoSodexo && (
          <p><strong>Pluxee:</strong> {resultadoSodexo}</p>
        )}
        {resultadoTicket && (
          <p><strong>Ticket:</strong> {resultadoTicket}</p>
        )}
      </div>
    </form>
  );
}
