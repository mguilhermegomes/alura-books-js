function ordenarLivrosPorPreco(listaLivros) {
  let livrosOrdenados = [...listaLivros].sort((a, b) => {
    return a.preco - b.preco;
  });

  return livrosOrdenados;
}

export default ordenarLivrosPorPreco;