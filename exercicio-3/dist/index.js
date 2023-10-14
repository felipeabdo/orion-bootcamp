"use strict";
/**
 * Lista de pessoas.
 */
let lista = [
    { "id": 1, "name": "Ada Lovelace", "bio": "Ada Lovelace, foi uma matemática e escritora inglesa reconhecida por ter escrito o primeiro algoritmo para ser processado por uma máquina" },
    { "id": 2, "name": "Alan Turing", "bio": "Alan Turing foi um matemático, cientista da computação, lógico, criptoanalista, filósofo e biólogo teórico britânico, ele é amplamente considerado o pai da ciência da computação teórica e da inteligência artificial" },
    { "id": 3, "name": "Nikola Tesla", "bio": "Nikola Tesla foi um inventor, engenheiro eletrotécnico e engenheiro mecânico sérvio, mais conhecido por suas contribuições ao projeto do moderno sistema de fornecimento de eletricidade em corrente alternada." },
    { "id": 4, "name": "Nicolau Copérnico", "bio": "Nicolau Copérnico foi um astrônomo e matemático polonês que desenvolveu a teoria heliocêntrica do Sistema Solar" }
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
function getBioByIdFuncional(id, persons) {
    const person = persons.find(item => item.id === id);
    return person ? person.bio : null;
}
/**
 * Obtém o nome de uma pessoa com base no ID.
 * @param id - O ID da pessoa.
 * @param persons - A lista de pessoas.
 * @returns O nome da pessoa ou `null` se não encontrada.
 */
function getNameByIdFuncional(id, persons) {
    const person = persons.find(item => item.id === id);
    return person ? person.name : null;
}
/**
 * Remove uma pessoa da lista com base no ID.
 * @param id - O ID da pessoa a ser removida.
 * @param persons - A lista de pessoas.
 * @returns A lista de pessoas atualizada.
 */
function deleteItemByIdFuncional(id, persons) {
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
function updateNameAndBioByIdFuncional(id, newName, newBio, persons) {
    return persons.map(item => {
        if (item.id === id) {
            if (newName) {
                item.name = newName !== null && newName !== void 0 ? newName : item.name;
            }
            if (newBio) {
                item.bio = newBio !== null && newBio !== void 0 ? newBio : item.bio;
            }
        }
        return item;
    });
}
/**
 * Atualiza a tabela de pessoas na página HTML.
 * @param persons - A lista de pessoas.
 */
function updatePersonsTable(persons) {
    const tableContainer = document.getElementById("persons-table");
    if (tableContainer) {
        const table = document.createElement("table");
        const headerRow = document.createElement("tr");
        const idHeader = document.createElement("th");
        idHeader.textContent = "ID";
        const nameHeader = document.createElement("th");
        nameHeader.textContent = "Nome";
        const bioHeader = document.createElement("th");
        bioHeader.textContent = "Biografia";
        headerRow.appendChild(idHeader);
        headerRow.appendChild(nameHeader);
        headerRow.appendChild(bioHeader);
        table.appendChild(headerRow);
        persons.forEach(person => {
            const row = document.createElement("tr");
            const idCell = document.createElement("td");
            idCell.textContent = person.id.toString();
            const nameCell = document.createElement("td");
            nameCell.textContent = person.name;
            const bioCell = document.createElement("td");
            bioCell.textContent = person.bio;
            row.appendChild(idCell);
            row.appendChild(nameCell);
            row.appendChild(bioCell);
            table.appendChild(row);
        });
        tableContainer.innerHTML = "";
        tableContainer.appendChild(table);
    }
}
updatePersonsTable(lista);
const changeForm = document.getElementById("person-change-form");
if (changeForm) {
    changeForm.addEventListener("submit", function (e) {
        e.preventDefault();
        const idInput = document.getElementById("id");
        const newNameInput = document.getElementById("newName");
        const newBioInput = document.getElementById("newBio");
        if (idInput && newNameInput && newBioInput) {
            const id = parseInt(idInput.value, 10);
            const newName = newNameInput.value;
            const newBio = newBioInput.value;
            lista = updateNameAndBioByIdFuncional(id, newName, newBio, lista);
            updatePersonsTable(lista);
            idInput.value = "";
            newNameInput.value = "";
            newBioInput.value = "";
        }
    });
}
const deleteForm = document.getElementById("person-delete-form");
if (deleteForm) {
    deleteForm.addEventListener("submit", function (e) {
        e.preventDefault();
        const deleteIdInput = document.getElementById("deleteId");
        if (deleteIdInput) {
            const deleteId = parseInt(deleteIdInput.value, 10);
            lista = deleteItemByIdFuncional(deleteId, lista);
            updatePersonsTable(lista);
            deleteIdInput.value = "";
        }
    });
}
const bioForm = document.getElementById("person-bio-form");
const bioResult = document.getElementById("bio-result");
const bioText = document.getElementById("bio-text");
if (bioForm && bioResult && bioText) {
    bioForm.addEventListener("submit", function (e) {
        e.preventDefault();
        const searchIdInput = document.getElementById("searchId");
        if (searchIdInput) {
            const searchId = parseInt(searchIdInput.value, 10);
            const bio = getBioByIdFuncional(searchId, lista);
            if (bio !== null) {
                bioText.textContent = bio;
            }
            else {
                bioText.textContent = "Biografia não encontrada.";
            }
        }
    });
}
const nameForm = document.getElementById("person-name-form");
const nameResult = document.getElementById("name-result");
const nameText = document.getElementById("name-text");
if (nameForm && nameResult && nameText) {
    nameForm.addEventListener("submit", function (e) {
        e.preventDefault();
        const searchNameIdInput = document.getElementById("searchNameId");
        if (searchNameIdInput) {
            const searchNameId = parseInt(searchNameIdInput.value, 10);
            const name = getNameByIdFuncional(searchNameId, lista);
            if (name !== null) {
                nameText.textContent = name;
            }
            else {
                nameText.textContent = "Nome não encontrado.";
            }
        }
    });
}
//# sourceMappingURL=index.js.map