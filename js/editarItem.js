import { adicionarDataHora } from "./adicionarDataHora.js";

export const editarItem = (elemento) => {
    let novoItem = prompt("Digite o nome do novo item: ");

    if(novoItem !== null && novoItem.trim() !== "") {
        const itemTextoAtualizado = elemento.querySelector("#item-titulo");
        itemTextoAtualizado.textContent = novoItem;

        const estavaComprado = elemento.querySelector(".checkbox-input").checked;

        if(estavaComprado) {
            elemento.querySelector(".checkbox-input").checked = true;
            elemento.querySelector(".checkbox-customizado").classList.add("checked");
            itemTextoAtualizado.style.textDecoration = "line-trough";
        }
        const dataDeCriacao = elemento.querySelector(".texto-data");
        dataDeCriacao.textContent = adicionarDataHora();

    }
    
}