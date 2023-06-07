function animar() {
    const btnMenu = document.querySelector("#btn-menu")
    const menuDiv = document.querySelector("#menu-mobile")
    btnMenu.classList.toggle("ativar")
    menuDiv.classList.toggle("abrir")
}

document.addEventListener("DOMContentLoaded", function() {
    const btn = document.getElementById('btn-tema');
    const body = document.body;
    const imagemTema = document.getElementById('imagem-tema');
    const logoApagado = document.querySelector('#logo-apagado')
    let modoEscuro = false;
  
    btn.addEventListener("click", () => {
      if (!modoEscuro) {
        modoEscuro = true;
        body.classList.add("dark");
        imagemTema.src = 'img/sol-icon-removebg-preview.png';
        imagemTema.alt = 'sol(light-mode)';
        logoApagado.src = 'img/Logo(SemFundo)padrao.png'
      } else {
        modoEscuro = false;
        body.classList.remove("dark");
        imagemTema.src = 'img/lua-icon-removebg-preview.png';
        imagemTema.alt = 'lua(dark-mode)';
        logoApagado.src = 'img/Logo(SemFundo)preto.png'
      }
    });
  });

// =============================== SUGESTÕES =============================== 

const form = document.querySelector("#form") 
const nameInput = document.querySelector("#nome-form") 
const telInput = document.querySelector("#tel-form") 
const emailInput = document.querySelector("#email-form") 
const messageInput = document.querySelector("#msg-form") 
const spans = document.querySelectorAll(".span-form") 

form.addEventListener("submit", (event)=> { 
    event.preventDefault() 

    // Verifica se o nome está preenchido e se é válido 

    if (nameInput.value === "" || nameInput.value.length <3 || !isNameValid(nameInput.value)) { 

        spans[0].style.visibility = "visible" 

        nameInput.style.border = "2px solid red" 

    } 

    else{ 

        spans[0].style.visibility = "hidden" 

        nameInput.style.border = "2px solid green" 

     } 


    //verifica se o número está preenchido e se é válido 

    if (telInput.value === "" || telInput.value.length < 15 || !isTelValid(telInput.value)) { 

        spans[1].style.visibility = "visible" 

        telInput.style.border = "2px solid red" 

    } 

    else{ 

        spans[1].style.visibility = "hidden" 

        telInput.style.border = "2px solid green" 

    } 