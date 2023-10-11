// 1 - Criar uma função que retorne a quantidade de vogais da palavra passada.
// a) Dar um exemplo de uso com uma palavra recebida via parâmetro da função.
// b) Dar um exemplo de uso com uma palavra recebida via input no formulário.

// Exemplo via função:

function contarVogais(palavra: string): number {
  const vogais = "aeiouAEIOUáàéíóúãõâêôäëïöü";
  let contar = 0;

  for (let i = 0; i < palavra.length; i++) {
    if (vogais.includes(palavra[i])) {
      contar++;
    }
  }

  return contar;
}

console.log(contarVogais('Felipe'))

// Exemplo de uso com uma palavra recebida via input no formulário

const formulario = document.getElementById("formulario") as HTMLFormElement;

formulario.addEventListener("submit", function (event) {

  event.preventDefault();
  const inputPalavra = document.getElementById("palavra") as HTMLInputElement;
  const palavra = inputPalavra.value;
  const resultadoElement = document.querySelector("p");
  if (resultadoElement) {
    resultadoElement.innerHTML = `O número de vogais de "${palavra.toUpperCase()}" é ${contarVogais(palavra)}!`;
  }

});
