import Form from "@/components/Form/form";
import Image from "next/image";
import Footer from "@/components/Footer/footer";  

export default function Home() {
  return (
    <>
      <header className="header-calc">
        <h1 className="title">CALCULADORA DE TAXAS</h1>
      </header>

      <main className="main-form">
        <Form />
        <div id="result" className="hidden">
          <div className="bandeira-result">
            <p id="ResultadoTotal" style={{ fontSize: "1.5rem" }}></p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
