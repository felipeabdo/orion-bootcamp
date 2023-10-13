"use strict";
let lista = [
    { "id": 1, "name": "Ada Lovelace", "bio": "Ada Lovelace, foi uma matemática e escritora inglesa reconhecida por ter escrito o primeiro algoritmo para ser processado por uma máquina" },
    { "id": 2, "name": "Alan Turing", "bio": "Alan Turing foi um matemático, cientista da computação, lógico, criptoanalista, filósofo e biólogo teórico britânico, ele é amplamente considerado o pai da ciência da computação teórica e da inteligência artificial" },
    { "id": 3, "name": "Nikola Tesla", "bio": "Nikola Tesla foi um inventor, engenheiro eletrotécnico e engenheiro mecânico sérvio, mais conhecido por suas contribuições ao projeto do moderno sistema de fornecimento de eletricidade em corrente alternada." },
    { "id": 4, "name": "Nicolau Copérnico", "bio": "Nicolau Copérnico foi um astrônomo e matemático polonês que desenvolveu a teoria heliocêntrica do Sistema Solar" }
];
// FUNÇÕES NO PARADIGMA FUNCIONAL
// Crie uma função que retorne a bio do id passado
function getBioByIdFuncional(id) {
    const person = lista.find(item => item.id === id);
    return person ? person.bio : null;
}
// Crie uma função que retorne a name do id passado
function getNameByIdFuncional(id) {
    const person = lista.find(item => item.id === id);
    return person ? person.name : null;
}
// Crie uma função que apague um item da lista a partir de um id passado
function deleteItemByIdFuncional(id) {
    lista = lista.filter(item => item.id !== id);
}
// Crie uma função que altere a bio ou o name a partir de um id passado
function updateNameAndBioByIdFuncional(id, newName, newBio) {
    lista = lista.map(item => {
        if (item.id === id) {
            if (newName !== null) {
                item.name = newName;
            }
            if (newBio !== null) {
                item.bio = newBio;
            }
        }
        return item;
    });
}
// Demonstrações
console.log(lista);
const id = 2;
let biografia = getBioByIdFuncional(id);
if (biografia !== null) {
    console.log(`Biografia: ${biografia}`);
}
else {
    console.log("ID não encontrado.");
}
// ---------------------------------------
const nomeFunc = getNameByIdFuncional(id);
if (nomeFunc !== null) {
    console.log(`Nome: ${nomeFunc}`);
}
else {
    console.log("ID não encontrado.");
}
// ---------------------------------------
const idToDelete = 1;
deleteItemByIdFuncional(idToDelete);
console.log(lista);
// ---------------------------------------
const idToUpdate = 2;
const newName = "Gugu Liberato";
const newBio = "Antônio Augusto Moraes Liberato, mais conhecido como Gugu Liberato ou Gugu, foi um apresentador, radialista, jornalista, empresário, ator, cantor e produtor brasileiro. Filho de imigrantes portugueses, na adolescência Gugu escrevia cartas para Silvio Santos sugerindo programas, que terminou por contratá-lo.";
updateNameAndBioByIdFuncional(idToUpdate, newName, newBio);
console.log(lista);
// FUNÇÕES NO PARADIGMA IMPERATIVO
// Crie uma função que retorne a bio do id passado
function getBioByIdImperativo(id) {
    for (let i = 0; i < lista.length; i++) {
        if (lista[i].id === id) {
            return lista[i].bio;
        }
    }
    return null;
}
// Crie uma função que retorne a name do id passado
function getNameByIdImperativo(id) {
    for (let i = 0; i < lista.length; i++) {
        if (lista[i].id === id) {
            return lista[i].name;
        }
    }
    return null;
}
// Crie uma função que apague um item da lista a partir de um id passado
function deleteItemByIdImperativo(id) {
    for (let i = 0; i < lista.length; i++) {
        if (lista[i].id === id) {
            lista.splice(i, 1);
            break;
        }
    }
}
// Crie uma função que altere a bio ou o name a partir de um id passado
function updateNameAndBioByIdImperativo(id, newName, newBio) {
    for (let i = 0; i < lista.length; i++) {
        if (lista[i].id === id) {
            if (newName !== null) {
                lista[i].name = newName;
            }
            if (newBio !== null) {
                lista[i].bio = newBio;
            }
            break;
        }
    }
}
// Demonstrações
console.log(lista);
const bio = getBioByIdImperativo(3);
console.log(`Biografia: ${bio}`);
// ---------------------------------------
const nomeImp = getNameByIdImperativo(4);
console.log(nomeImp);
// ---------------------------------------
deleteItemByIdImperativo(3);
console.log(lista);
// ---------------------------------------
updateNameAndBioByIdImperativo(4, "Faustão", "Fausto Corrêa da Silva, popularmente conhecido como Faustão, é um apresentador, comediante e radialista brasileiro. O lokô bitcho!");
console.log(lista);
//# sourceMappingURL=index.js.map