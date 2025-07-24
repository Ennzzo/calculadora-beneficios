


// FUNÇÕES DE TAXA

export function TotalResultMensal(
  a: number,
  b: number,
  c: number,
  d: number,
  e: number,
  f: number // ainda não utilizado
): string {
  function formatar(valor: number): string {
    return valor.toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL",
    });
  }

  // Cria uma lista dos valores (b a e)
  const valores: number[] = [b, c, d, e];

  // Cria uma lista de taxas correspondentes para cada valor ativo
  const taxas: number[] = [];

  if (b !== 0) taxas.push(3.5);
  if (c !== 0) taxas.push(3.5);
  if (d !== 0) taxas.push(3.5);
  if (e !== 0) taxas.push(3.9);

  // Se nenhum valor foi preenchido, retorno padrão
  if (valores.every((v) => v === 0)) {
    return "R$ 0,00";
  }

  // Soma os valores multiplicados por `a`
  const somaValores = valores.reduce((acc, val) => acc + a * val, 0);

  // Soma as taxas multiplicadas por `a`
  const somaTaxas = taxas.reduce((acc, taxa) => acc + a * taxa, 0);

  const resultado = (somaValores - somaTaxas) / 100;

  return formatar(resultado);
}

//TAXAS ANUAIS

export function TotalResultAnual(
  a: number,
  b: number,
  c: number,
  d: number,
  e: number,
  f: number // Ainda não utilizado
): string | number {
  const valores = [b, c, d, e];
  const taxas = [3.5, 3.5, 3.5, 3.9];

  // Verifica se todos os valores são zero
  if (valores.every((v) => v === 0)) {
    return 0;
  }

  // Multiplica os valores preenchidos por 'a'
  const somaGanhos = valores.reduce((acc, val) => acc + a * val, 0);

  // Define as taxas reais a subtrair (na mesma ordem que os valores), respeitando as condições especiais
  const taxasSubtrair = valores.map((val, index) => {
    if (val === 0) return 0;

    // Exceção: se todos os campos estão preenchidos, muda a terceira taxa
    if (valores.every((v) => v !== 0) && index === 2) {
      return 3.99;
    }

    return taxas[index];
  });

  const somaTaxas = taxasSubtrair.reduce((acc, taxa) => acc + a * taxa, 0);

  const resultado = ((somaGanhos - somaTaxas) * 12) / 100;

  return resultado.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });
}