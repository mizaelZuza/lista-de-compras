import { criarItemDaLista } from "./criarItemDaLista.js";

const item = document.getElementById("input-item");
const listaDeCompras = document.getElementById("lista-compras");

export function salvarItem(evento) {
    evento.preventDefault();
    const listaItem = criarItemDaLista(item.value);
    
    listaDeCompras.appendChild(listaItem);
}
