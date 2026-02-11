const listaDeLivros = document.getElementById("livros");

function exibirLivros(lista) {
  let listaDeLivrosHTML = "";
  listaDeLivros.innerHTML = "";

  lista.forEach((livro) => {
    const livroPrecoFormatado = livro.preco.toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL",
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    });
    const livroDisponibilidade =
      livro.quantidade > 0 ? "livro__imagens" : "livro__imagens indisponivel";
    listaDeLivrosHTML += `
    <div class="livro">
      <img class="${livroDisponibilidade}" src="${livro.imagem}" alt="${livro.alt}" />
      <h2 class="livro__titulo">
        ${livro.titulo}
      </h2>
      <p class="livro__descricao">${livro.autor}</p>
      <p class="livro__preco">${livroPrecoFormatado}</p>
      <div class="tags">
        <span class="tag">${livro.categoria}</span>
      </div>
    </div>`;
  });

  listaDeLivros.innerHTML = listaDeLivrosHTML;
}

export default exibirLivros;