import exibirValorTotalLivrosDisponiveis from "./exibirValorTotalLivrosDisponiveis.js";

function filtrarPorCategoria(livro, categoria) {
    return livro.categoria === categoria;
}

function filtrarPorDisponibilidade(livro) {
    return livro.quantidade > 0;
}

export function filtrarLivro(listaLivros, categoria) {
  const livrosFiltrados =
    categoria === "disponivel"
      ? listaLivros.filter((livro) => filtrarPorDisponibilidade(livro))
      : listaLivros.filter((livro) => filtrarPorCategoria(livro, categoria));

  if (categoria === "disponivel") {
    exibirValorTotalLivrosDisponiveis(livrosFiltrados);
  }

  return livrosFiltrados;
}
