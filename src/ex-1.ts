/**
 * Função que conta a quantidade de vogais em uma palavra.
 * @param palavra - A palavra da qual você deseja contar as vogais.
 * @returns O número de vogais na palavra.
 * @example
 * const palavra = "Araraquara";
 * const resultado = contagem(palavra);
 * console.log(`O número de vogais de ${palavra} é ${resultado}!`);
 */

function contagem(palavra: string): number {

  const vogais = "aeiouáàéíóúãõâêôäëïöü";

  let contar = 0;

  for (let i = 0; i < palavra.length; i++) {
    if (vogais.includes(palavra[i].toLowerCase())) {
      contar++;
    }
  }

  return contar;

}

let palavra = "Araraquara"

console.log(`O número de vogais de ${palavra} é ${contagem(palavra)}!`)

/**
 * Manipula o envio do formulário para contar as vogais da palavra inserida e exibir o resultado.
 */

const formulario = document.getElementById("formulario") as HTMLFormElement;

formulario.addEventListener("submit", function (event) {

  event.preventDefault();

  const inputPalavra = document.getElementById("palavra") as HTMLInputElement;

  const palavra = inputPalavra.value;

  const resultadoElemento = document.querySelector("p");

  if (resultadoElemento) {
    resultadoElemento.innerHTML = `O número de vogais de "${palavra.toUpperCase()}" é ${contagem(palavra)}!`;
  }

});
