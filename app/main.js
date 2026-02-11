import { buscarLivros } from "./resgatarListaDeLivros.js";
import { filtrarLivro } from "./filtrarLivros.js";
import ordenarLivrosPorPreco from "./ordenarLivroPorPreco.js";
import exibirLivros from "./exibirLivros.js";

let livros = [];
const btnCategoriaFiltro = document.querySelectorAll(".btn");
const btnOrdenarPorPoreco = document.getElementById("btnOrdenarPorPreco");

livros = await buscarLivros();
exibirLivros(livros);

btnCategoriaFiltro.forEach((btn) => {
  btn.addEventListener("click", () => {
    exibirLivros(filtrarLivro(livros, btn.value));
  });
});

btnOrdenarPorPoreco.addEventListener("click", () => {
  exibirLivros(ordenarLivrosPorPreco(livros));
});
