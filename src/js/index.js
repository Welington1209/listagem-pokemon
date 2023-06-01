const botaoAlterarTema = document.getElementById("botao-alterar-tema");
const body = document.querySelector("body");
const header = document.querySelector("header");
const footer = document.querySelector("footer");
const imgagemBotaoTrocaDeTema = document.querySelector(".imagem-botao");

botaoAlterarTema.addEventListener("click", ()=> {
  const modoEscuroEstaAtivo = body.classList.contains("modo-escuro");
  
   body.classList.toggle("modo-escuro");
   
   header.classList.toggle("modo-escuro");
   
   footer.classList.toggle("modo-escuro");
   
   if(modoEscuroEstaAtivo){
    
     imgagemBotaoTrocaDeTema.setAttribute("src", "/src/imagens/sun.png");
   }
   else{
    
    imgagemBotaoTrocaDeTema.setAttribute("src", "/src/imagens/moon.png");
   }
  
});