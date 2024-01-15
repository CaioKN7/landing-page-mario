const formulario = document.querySelector(".fale-conosco");
const mascaraFormulario = document.querySelector(".mascara-formulario")




const clicouNoBotao=()=>{
   formulario.style.left= "700px";
   mascaraFormulario.style.visibility= "visible"
   
   
};

const sumirFormulario=()=>{
    formulario.style.left="-320px"
    mascaraFormulario.style.visibility= "hidden"
   

};