import { adicionarDataHora } from "./adicionarDataHora.js";
import { editarItem } from "./editarItem.js";
import { excluirItem } from "./excluirItem.js";
import { verificarListaComprados } from "./verificarListaComprados.js";

const listaDeCompras = document.getElementById("lista-compras");
const listaComprados = document.getElementById("lista-comprados");


let contador = 0;

export function criarItemDaLista(item){
    const listaItem = document.createElement("li");
    const containerListaItem = document.createElement("div");
    containerListaItem.classList.add("container-lista-item");
    
    const containerNomeItem = document.createElement("div");
    
    const containerCheckbox = document.createElement("div");
    containerCheckbox.classList.add("checkbox-container");
    
    const checkboxInput = document.createElement("input");
    checkboxInput.type = "checkbox";
    checkboxInput.classList.add("checkbox-input");
    checkboxInput.id = "checkbox-" + contador++;
    
    const checkboxLabel = document.createElement("label");
    checkboxLabel.setAttribute("for", checkboxInput.id);
    
    checkboxLabel.addEventListener("click", function(evento){
        const checkboxInput = evento.currentTarget.querySelector(".checkbox-input");
        const checkboxCustomizado = evento.currentTarget.querySelector(".checkbox-customizado");
        const itemTitulo = evento.currentTarget.closest("li").querySelector("#item-titulo");
        
        if (checkboxInput.checked){
            checkboxCustomizado.classList.add("checked");
            itemTitulo.style.textDecoration = "line-through";
            listaComprados.appendChild(listaItem);
            

        } else{
            checkboxCustomizado.classList.remove("checked");
            itemTitulo.style.textDecoration= "none";
            listaDeCompras.appendChild(listaItem);
        }
        verificarListaComprados(listaComprados);
    });
    
    const checkboxCustomizado = document.createElement("div");
    checkboxCustomizado.classList.add("checkbox-customizado");
    
    containerNomeItem.appendChild(containerCheckbox);
    containerCheckbox.appendChild(checkboxLabel);
    checkboxLabel.appendChild(checkboxInput);
    checkboxLabel.appendChild(checkboxCustomizado);
    
    containerNomeItem.classList.add("container-nome-item");
    const nomeItem = document.createElement("p");
    nomeItem.id = "item-titulo";
    nomeItem.innerHTML = item;
    
    const containerBotoes = document.createElement("div");
    containerBotoes.classList.add("container-botoes");
    
    const botaoRemover = document.createElement("button");
    botaoRemover.classList.add("botao-acao");
    const imagemRemover = document.createElement("img");
    imagemRemover.src = "./img/delete.svg";
    imagemRemover.alt = "Deletar";

    botaoRemover.addEventListener("click", function(){
        excluirItem(listaItem);
    }) 

    botaoRemover.appendChild(imagemRemover);
    
    const botaoAlterar = document.createElement("button");
    botaoAlterar.classList.add("botao-acao");
    const imagemAlterar = document.createElement("img");
    imagemAlterar.src = "./img/edit.svg";
    imagemAlterar.alt = "Editar";
    
    botaoAlterar.addEventListener("click", function(){
        editarItem(listaItem);
    });

    botaoAlterar.appendChild(imagemAlterar);
        
    listaItem.appendChild(containerListaItem);
    containerListaItem.appendChild(containerNomeItem);
    containerListaItem.appendChild(containerBotoes);

    const itemData = document.createElement("p"); 
    itemData.innerText = adicionarDataHora();
    itemData.classList.add("texto-data"); 
    listaItem.appendChild(itemData);
    
    containerNomeItem.appendChild(nomeItem);
    containerBotoes.appendChild(botaoRemover);
    containerBotoes.appendChild(botaoAlterar);
    return listaItem;
};