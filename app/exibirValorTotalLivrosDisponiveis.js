const elementoValorTotalLivros = document.getElementById(
  "valor_total_livros_disponiveis",
);
const valorTotalLivros = document.getElementById("valor");

function exibirValorTotalLivrosDisponiveis(livrosDisponiveis) {
  const livrosDisponiveisValorTotal = livrosDisponiveis.reduce(
    (acc, livro) => acc + livro.preco,
    0,
  );
  valorTotalLivros.textContent = livrosDisponiveisValorTotal.toLocaleString(
    "pt-BR",
    {
      style: "currency",
      currency: "BRL",
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    },
  );
  elementoValorTotalLivros.style.display = "block";
}

export default exibirValorTotalLivrosDisponiveis;