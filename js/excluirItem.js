import { verificarListaComprados } from "./verificarListaComprados.js";
import { verificarListaVazia } from "./verificarListaVazia.js";

const listaDeCompras = document.getElementById("lista-compras");
const listaDeComprados = document.getElementById("lista-comprados");

const excluirItem = (elemento) => {
    let confirmacao = confirm("Tem certeza que deseja excluir esse item")

    if (confirmacao) {
        elemento.remove();

        verificarListaVazia(listaDeCompras);
        verificarListaComprados(listaDeComprados);   
    }

}

export {excluirItem};