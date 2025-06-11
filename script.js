let contador = 0;
let limite = 0;
let intervalo;

const display = document.getElementById("display");
const startBtn = document.getElementById("start");
const stopBtn = document.getElementById("stop");
const inputLimite = document.getElementById("limite");

startBtn.addEventListener("click", () => {
  limite = parseInt(inputLimite.value, 10);

  if (isNaN(limite) || limite <= 0) {
    alert("Digite um valor limite válido!");
    return;
  }

  contador = 0;
  display.textContent = contador;

  clearInterval(intervalo); // Para evitar múltiplas execuções

  intervalo = setInterval(() => {
    contador++;
    display.textContent = contador;

    if (contador >= limite) {
      clearInterval(intervalo);
    }
  }, 1000);
});

stopBtn.addEventListener("click", () => {
  clearInterval(intervalo);
});