const mensagemListaVazia = document.getElementById("msg-lista-vazia");

export function verificarListaVazia(lista){
    if(lista.children.length === 0){
       mensagemListaVazia.style.display = "block";
       
    }else{
       mensagemListaVazia.style.display = "none";
       
    }
}