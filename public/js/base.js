const nome = "Gustavo Rauber";
let nome2 = "";
let pessoaDefault = {
  nome: "Gustavo Rauber",
  idade: "21",
  trabalho: "Programador",
};
let nomes = ["Gustavo Rauber", "Maria Silva", "Pedro Silva"];
let pessoas = [
  {
    nome: "Maria Silva",
    idade: "25",
    trabalho: "UX/UI Designer",
  },
  { nome: "Maria Silva", idade: "25", trabalho: "UX/UI Designer" },
];
function alterarNome() {
  nome2 = "Maria Silva";
  console.log("Valor alterado");
  console.log(nome2);
}

function recebeEalteraNome(novoNome) {
  nome2 = novoNome;
  console.log("Valor alterado recebendo um nome");
  console.log(nome2);
}
function imprimirPessoa(pessoa) {
  console.log(pessoa);

  console.log("nome");
  console.log(pessoa.nome);

  console.log("idade");
  console.log(pessoa.idade);

  console.log("trabalho");
  console.log(pessoa.trabalho);
}

function adicionarPessoa(pessoa) {
  pessoas.push(pessoa);
}

function imprimirPessoas() {
  console.log("--------IMPRIMIR PESSOAS---------");
  pessoas.forEach((item) => {
    console.log("nome:");
    console.log(item.nome);

    console.log("idade");
    console.log(item.idade);

    console.log("trabalho");
    console.log(item.trabalho);
    console.log(item);
  });
}

imprimirPessoas();

console.log(pessoas);

adicionarPessoa({
  nome: "Pedro Silva",
  idade: "28",
  trabalho: "Porteiro",
});

console.log(pessoas);

// imprimirPessoa(pessoaDefault);

// imprimirPessoa({
//     nome: "Maria Silva",
//     idade: "25",
//     trabalho: "UX/UI Designer"
// });

//recebeEalteraNome("João Silva Pereira");
//RecebeEalteraNome("Maria Silva");

//alterarNome//();
