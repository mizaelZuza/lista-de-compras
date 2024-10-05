import { criarItemDaLista } from "./criarItemDaLista.js";
import { verificarListaVazia } from "./verificarListaVazia.js";

const item = document.getElementById("input-item");
const listaDeCompras = document.getElementById("lista-compras");

export function salvarItem(evento) {
    evento.preventDefault();
    if(item.value === "") {
        alert("Por favor insira um item!");
        return;
    };

    const listaItem = criarItemDaLista(item.value);

    listaDeCompras.appendChild(listaItem);
    verificarListaVazia(listaDeCompras);
    item.value = "";    

}
