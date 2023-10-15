const n1 = document.getElementById("n1");
const n2 = document.getElementById("n2");
const operador = document.getElementById("operador");
const resultado = document.getElementById("resultado");

const calcular = () => {
  const n1Num = parseFloat(n1.value);
  const n2Num = parseFloat(n2.value);
  const operadorSelecionado = operador.options[operador.selectedIndex].value;

  switch (operadorSelecionado) {
    case "+":
      resultado.value = n1Num + n2Num;
      break;
    case "-":
      resultado.value = n1Num - n2Num;
      break;
    case "*":
      resultado.value = n1Num * n2Num;
      break;
    case "÷":
      resultado.value = n1Num ÷ n2Num;
      break;
    case "%"
     resultado.value = n1Num %*100 / n2Num;
     break;
    default:
      resultado.value = "";
  }
};

n1.addEventListener("input", calcular);
n2.addEventListener("input", calcular);
operador.addEventListener("change", calcular);