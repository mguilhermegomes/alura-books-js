import aplicarDescontoLivro from "./aplicarDescontoLivro.js";

const endPointAPI =
  "https://guilhermeonrails.github.io/casadocodigo/livros.json";

async function getResultadoAPI() {
  const resultado = await fetch(endPointAPI);

  if (!resultado.ok) {
    throw new Error("Erro ao acessar a API dos livros.");
  }

  return resultado.json();
}

export async function buscarLivros() {
  try {
    const livrosOriginais = await getResultadoAPI();
    let livrosComDesconto = aplicarDescontoLivro(livrosOriginais);

    return livrosComDesconto;
  } catch (erro) {
    alert("Erro: " + erro.message);
    console.log(erro.message);
  }
}