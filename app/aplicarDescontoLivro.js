function aplicarDescontoLivro(livros) {
  const desconto = 0.3;
  const livrosComDesconto = livros.map((livro) => {
    return {
      ...livro,
      preco: livro.preco - Number(livro.preco * desconto),
    };
  });

  return livrosComDesconto;
}

export default aplicarDescontoLivro;