# 📚 Casa do Código — Catálogo de Livros
Aplicação web desenvolvida em **JavaScript moderno (ES6+)** que consome uma API de livros, aplica regras de negócio e permite visualizar, filtrar e ordenar os dados dinamicamente utilizando métodos funcionais de arrays.

O projeto tem como principal objetivo praticar e demonstrar o uso dos métodos:

- `forEach`
- `map`
- `filter`
- `sort`
- `reduce`

Além disso, trabalha conceitos importantes como **modularização**, **programação assíncrona**, **manipulação do DOM** e **boas práticas de organização de código**.

---

## 🚀 Funcionalidades
- ✅ Consumo de API externa
- ✅ Aplicação automática de desconto nos livros
- ✅ Filtragem por categoria
- ✅ Filtragem por disponibilidade
- ✅ Ordenação por preço
- ✅ Cálculo do valor total dos livros disponíveis
- ✅ Cálculo do valor total dos livros disponíveis

---

## 🧠 Conceitos Aplicados
### **1. Programação Assíncrona**
Uso de `async/await` e `fetch` para consumir dados de uma API REST.

###  **2. Metódos funcionais de array**  
O projeto utiliza os principais métodos funcionais do JavaScript:

- ``map()`` -> Transformação de dados
- ``filter()`` → Filtragem de listas
- ``reduce()`` → Agregação de valores
- ``sort()`` → Ordenação de dados
- ``forEach()`` → Iteração para renderização

### 3. Modularização com ES Modules
Separação do código em arquivos com responsabilidades específicas, utilizando: ``import...export...``

### 4. Manipulação do DOM
Criação dinâmica de elementos e atualização da interface com base nos dados retornados da API.

### 5. Imutabilidade de Dados
Uso de ``map``, ``sort`` e òperador spread (``...``) para evitar alteração direta dos objetos originais.

---

## 🛠 Tecnologias Utilizadas

- HTML5
- CSS3
- JavaScript ES6+
- Fetch API
- JSON (API REST)

---

## 📂 Estrutura do Projeto

```text
📁 app
 ┣  resgatarListaDeLivros.js
 ┣  aplicarDescontoLivro.js
 ┣  filtrarLivro.js
 ┣  ordenarLivroPorPreco.js
 ┣  exibirValorTotalLivrosDisponiveis.js
 ┣  exibirLivros.js
 ┗  main.js
```

---

## 📌 Descrição dos Módulos

- **resgatarListaDeLivros.js**  
Responsável por:
    - Consumir API de Livros
    - Tratar erros de requisição
    - Aplicar desconto nos livros retornados

- **aplicarDescontoLivro.js**  
Aplica desconto percentual em todos os livros utilizando ``map``.

- **filtrarLivro.js**  
Filtra livros por:
    - Categoria
    - Disponibilidade

- **ordenarLivroPorPreco.js**  
Ordena os livros pelo valor utilizando ``sort``.

- **exibirValorTotalLivrosDisponiveis.js**  
Calcula o valor total dos livros disponíveis utilizando ``reduce``.

- **exibirLivros.js**  
Responsável pela renderização dos livros no DOM.

- **main.js**  
Arquivo principal responsável por:
    - Iniciar a aplicação
    - Resgatar eventos de interface
    - Orquestrar funcionalidades

---

## ▶️ Como Executar o Projeto

### 1. Clonar o repositório
```bash
git clone https://github.com/mguilhermegomes/alura-books-js.git
```

### 2. Acessar a pasta do projeto
```bash
cd alura-books-js
```

### 3. Abrir no navegador
Abra o arquivo ``index.html`` ou utilize uma extensão como Live Server no VS Code.

---

## 🌐 API Utilizada
```bash
https://guilhermeonrails.github.io/casadocodigo/livros.json
```

---

## 📈 Aprendizados Obtidos
Durante o desenvolvimento foram praticados:
- Organização modular de código
- Consumo de APIs REST
- Manipulação funcional de arrays
- Programação assíncrona
- Boas práticas de separação de responsabilidades
- Renderização dinâmica de interfaces

## 👨‍💻 Autor
Desenvolvido por Guilherme Gomes.
