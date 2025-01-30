let teste = document.getElementById("teste");
const botaoTraduzir = document.querySelector(".traduz");

botaoTraduzir.onclick = function () {
    teste.innerText = "Sacramentadora";
    botaoTraduzir.onclick = function () {
      teste.innerText = "Texto alterado novamente!";
    };
};
  
