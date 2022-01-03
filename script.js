function calcular() {
  let txtAdultos = document.getElementById("txtAdultos").value;
  let txtCriancas = document.getElementById("txtCriancas").value;
  let txtDuracao = document.getElementById("txtDuracao").value;
  let resultado = document.getElementById("resultado");
  
  if ((txtDuracao, txtAdultos, txtCriancas !== "" && txtDuracao <= 6)) {
    var quantCarneKg = txtAdultos * 0.4 + txtCriancas * 0.5 * 0.4;
    var quantBebidasL = txtAdultos * 1 + txtCriancas * 0.5 * 1;
    
    resultados();
  } else if ((txtDuracao, txtAdultos, txtCriancas !== "" && txtDuracao > 6)) {
    var quantCarneKg = txtAdultos * 0.6 + txtCriancas * 0.5 * 0.6;
    var quantBebidasL = txtAdultos * 1.5 + txtCriancas * 0.5 * 1.5;
    resultados();
  } else {
    resultado.innerHTML =
      "Atenção preencha todos os campos para obter o resultado!";
    resultado.style.color = "red"
  }

  function resultados() {
    resultado.innerHTML =
      "Quantidade de carnes: " +
      quantCarneKg.toFixed(2) +
      " Kg" +
      "<br>" +
      "Quantidade de bebidas: " +
      quantBebidasL.toFixed(2) +
      " L";
      resultado.style.color = ""
  }
}

function limparCampos(){
  document.getElementById("txtAdultos").value = "";
  document.getElementById("txtCriancas").value = "";
  document.getElementById("txtDuracao").value = "";
  document.getElementById("resultado").innerHTML = "Preencha os campos acima para calcular a quantidade de carnes e bebidas é necessária para o seu churrasco!"
  resultado.style.color = ""
}