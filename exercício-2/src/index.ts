/**
 * Define a interface `Person` com propriedades para representar uma pessoa.
 */
interface Person {
  id: number;
  name: string;
  bio: string;
}

/**
 * Lista de pessoas.
 */
let lista: Person[] = [
  {"id" : 1, "name": "Ada Lovelace", "bio" : "Ada Lovelace, foi uma matemática e escritora inglesa reconhecida por ter escrito o primeiro algoritmo para ser processado por uma máquina"},
  {"id" : 2, "name": "Alan Turing", "bio" : "Alan Turing foi um matemático, cientista da computação, lógico, criptoanalista, filósofo e biólogo teórico britânico, ele é amplamente considerado o pai da ciência da computação teórica e da inteligência artificial"},
  {"id" : 3, "name": "Nikola Tesla", "bio" : "Nikola Tesla foi um inventor, engenheiro eletrotécnico e engenheiro mecânico sérvio, mais conhecido por suas contribuições ao projeto do moderno sistema de fornecimento de eletricidade em corrente alternada."},
  {"id" : 4, "name": "Nicolau Copérnico", "bio": "Nicolau Copérnico foi um astrônomo e matemático polonês que desenvolveu a teoria heliocêntrica do Sistema Solar"}
];

/**
 * FUNCÕES NO PARADIGMA FUNCIONAL
 * */

/**
 * Obtém a biografia de uma pessoa com base no ID.
 * @param id - O ID da pessoa.
 * @param persons - A lista de pessoas.
 * @returns A biografia da pessoa ou `null` se não encontrada.
 */
function getBioByIdFuncional(id: number, persons: Person[]): string | null {
  const person = persons.find(item => item.id === id);
  return person ? person.bio : null;
}

/**
 * Obtém o nome de uma pessoa com base no ID.
 * @param id - O ID da pessoa.
 * @param persons - A lista de pessoas.
 * @returns O nome da pessoa ou `null` se não encontrada.
 */
function getNameByIdFuncional(id: number, persons: Person[]): string | null {
  const person = persons.find(item => item.id === id);
  return person ? person.name : null;
}

/**
 * Remove uma pessoa da lista com base no ID.
 * @param id - O ID da pessoa a ser removida.
 * @param persons - A lista de pessoas.
 * @returns A lista de pessoas atualizada.
 */
function deleteItemByIdFuncional(id: number, persons: Person[]): Person[] {
  return persons.filter(item => item.id !== id);
}

/**
 * Atualiza o nome e/ou a biografia de uma pessoa com base no ID.
 * @param id - O ID da pessoa a ser atualizada.
 * @param newName - O novo nome (pode ser `null` para manter o mesmo nome).
 * @param newBio - A nova biografia (pode ser `null` para manter a mesma biografia).
 * @param persons - A lista de pessoas.
 * @returns A lista de pessoas atualizada.
 */
function updateNameAndBioByIdFuncional(id: number, newName: string | null, newBio: string | null, persons: Person[]): Person[] {
  return persons.map(item => {
    if (item.id === id) {
      if (newName) {
        item.name = newName ?? item.name;
      }
      if (newBio) {
        item.bio = newBio ?? item.bio;
      }
    }
    return item;
  });
}

/**
 * Demonstrações das funções no paradigma funcional
 * */
console.log(lista);

const id = 2;

let biografia = getBioByIdFuncional(id, lista);

if (biografia !== null) {
  console.log(`Biografia: ${biografia}`);
} else {
  console.log("ID não encontrado.");
}

const nomeFunc = getNameByIdFuncional(id, lista);

if (nomeFunc !== null) {
  console.log(`Nome: ${nomeFunc}`);
} else {
  console.log("ID não encontrado.");
}

const idToDelete = 1;

lista = deleteItemByIdFuncional(idToDelete, lista);

console.log(lista);

const idToUpdate = 2;

const newName = "Gugu Liberato";

const newBio = "Antônio Augusto Moraes Liberato, mais conhecido como Gugu Liberato ou Gugu, foi um apresentador, radialista, jornalista, empresário, ator, cantor e produtor brasileiro. Filho de imigrantes portugueses, na adolescência Gugu escrevia cartas para Silvio Santos sugerindo programas, que terminou por contratá-lo.";

lista = updateNameAndBioByIdFuncional(idToUpdate, newName, newBio, lista);

console.log(lista);

/**
 * FUNCÕES NO PARADIGMA IMPERATIVO
 * */

/**
 * Obtém a biografia de uma pessoa com base no ID (abordagem imperativa).
 * @param id - O ID da pessoa.
 * @param persons - A lista de pessoas.
 * @returns A biografia da pessoa ou `null` se não encontrada.
 */
function getBioByIdImperativo(id: number, persons: Person[]): string | null {
  for (let i = 0; i < persons.length; i++) {
    if (persons[i].id === id) {
      return persons[i].bio;
    }
  }
  return null;
}

/**
 * Obtém o nome de uma pessoa com base no ID (abordagem imperativa).
 * @param id - O ID da pessoa.
 * @param persons - A lista de pessoas.
 * @returns O nome da pessoa ou `null` se não encontrada.
 */
function getNameByIdImperativo(id: number, persons: Person[]): string | null {
  for (let i = 0; i < persons.length; i++) {
    if (persons[i].id === id) {
      return persons[i].name;
    }
  }
  return null;
}

/**
 * Remove uma pessoa da lista com base no ID (abordagem imperativa).
 * @param id - O ID da pessoa a ser removida.
 * @param persons - A lista de pessoas.
 * @returns A lista de pessoas atualizada.
 */
function deleteItemByIdImperativo(id: number, persons: Person[]): Person[] {
  for (let i = 0; i < persons.length; i++) {
    if (persons[i].id === id) {
      persons.splice(i, 1);
      break;
    }
  }
  return persons;
}

/**
 * Atualiza o nome e/ou a biografia de uma pessoa com base no ID (abordagem imperativa).
 * @param id - O ID da pessoa a ser atualizada.
 * @param newName - O novo nome (pode ser `null` para manter o mesmo nome).
 * @param newBio - A nova biografia (pode ser `null` para manter a mesma biografia).
 * @param persons - A lista de pessoas.
 * @returns A lista de pessoas atualizada.
 */
function updateNameAndBioByIdImperativo(id: number, newName: string | null, newBio: string | null, persons: Person[]): Person[] {
  for (let i = 0; i < persons.length; i++) {
    if (persons[i].id === id) {
      if (newName !== null) {
        persons[i].name = newName;
      }
      if (newBio !== null) {
        persons[i].bio = newBio;
      }
      break;
    }
  }
  return persons;
}

/**
 * Demonstrações das funções no paradigma imperativo
 * */
console.log(lista);

const bio = getBioByIdImperativo(3, lista);
console.log(`Biografia: ${bio}`);

const nomeImp = getNameByIdImperativo(4, lista);
console.log(nomeImp);

deleteItemByIdImperativo(3, lista);
console.log(lista);

updateNameAndBioByIdImperativo(4, "Faustão", "Fausto Corrêa da Silva, popularmente conhecido como Faustão, é um apresentador, comediante e radialista brasileiro. O lokô bitcho!", lista);
console.log(lista);
