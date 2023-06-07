// =============================== MENU MOBILE ===============================
function animar() {
  const btnMenu = document.querySelector("#btn-menu")
  const menuDiv = document.querySelector("#menu-mobile")
  btnMenu.classList.toggle("ativar")
  menuDiv.classList.toggle("abrir")
}



// =============================== DARK MODE ===============================
const btn = document.querySelector('#btn-tema');
const body = document.body;
const imagemTema = document.getElementById('imagem-tema');
const logoApagado = document.querySelector('#logo-apagado');
let modoEscuro = false;
btn.addEventListener("click", () => {
if (!modoEscuro) {
  modoEscuro = true;
  body.classList.add("dark");
  dataHora.classList.add('dark');
  imagemTema.src = '../img/sol-icon-removebg-preview.png';
  imagemTema.alt = 'sol(light-mode)';
  logoApagado.src = '../img/Logo(SemFundo)padrao.png';
} else {
  modoEscuro = false;
  body.classList.remove("dark");
  dataHora.classList.remove('dark');
  imagemTema.src = '../img/lua-icon-removebg-preview.png';
  imagemTema.alt = 'lua(dark-mode)';
  logoApagado.src = '../img/Logo(SemFundo)preto.png';
}
});



// =============================== DATA E HORA ===============================
const dataHora = document.querySelector('#data-hora');
// Obtém a referência para o elemento HTML onde a data e hora serão exibidas
var dataHoraElemento = document.getElementById('data-hora');

// Função que atualiza a data e hora a cada segundo
function atualizarDataHora() {
var dataHora = new Date(); // Cria um novo objeto Date
// Obtém a data, horas e minutos
var data = dataHora.toLocaleDateString();
var horas = dataHora.getHours();
var minutos = dataHora.getMinutes();

// Formata a data, hora e minutos no formato desejado
var dataHoraFormatada = data + ' ' + horas.toString().padStart(2, '0') + ':' + minutos.toString().padStart(2, '0');
// Atualiza o conteúdo do elemento HTML com a data e hora atualizadas
dataHoraElemento.textContent = dataHoraFormatada;
}
// Chama a função inicialmente para exibir a data e hora imediatamente
atualizarDataHora();
// Atualiza a data e hora a cada segundo
setInterval(atualizarDataHora, 1000);


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
  // Verifica se o e-mail está preenchido e se é válido
  if (emailInput.value === "" || !isEmailValid(emailInput.value)) {
      spans[2].style.visibility = "visible"
      emailInput.style.border = "2px solid red"
  }
  else{
      spans[2].style.visibility = "hidden"
      emailInput.style.border = "2px solid green"
  }
  // Verifica se a mensagem está preenchida e se é válida
  if (messageInput.value === "" || messageInput.value.length <20) {
      spans[3].style.visibility = "visible"
      messageInput.style.border = "2px solid red"
  }
  else{
      spans[3].style.visibility = "hidden"
      messageInput.style.border = "2px solid green"
  }

  // Verifica se todos os campos estão vazios
  if (messageInput.value === "" && emailInput.value === "" && telInput.value === "" && nameInput.value === "") {
      alert("Preencha todos os campos")
  }
  // Verifica se todos os campos estão válidos e envia o formulário
  if ( nameInput.value !== "" && nameInput.value.length >= 3 && isNameValid(nameInput.value) && telInput.value !== "" && telInput.value.length >= 15 && isTelValid(telInput.value) && emailInput.value !== "" && isEmailValid(emailInput.value) && messageInput.value !== "" && messageInput.value.length >= 20) {
      form.submit();
  }
})
