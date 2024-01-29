import React, { useState } from 'react';
import Formulario from './Formulario';
import Resultado from './Resultado';
import './App.css'

alert ('Altura: Digite um valor numérico representando a altura em metros (por exemplo, 1.75 para 1 metro e 75 centímetros) Peso: Digite um valor numérico representando o peso em quilogramas.')



function App() {
  const [resultado, setResultado] = useState(null);

  const calcularIMC = ({ altura, peso }) => {
      altura = parseFloat(altura);
      peso = parseFloat(peso);

      if (isNaN(altura) || isNaN(peso) || altura <= 0 || peso <= 0) {
        alert('Por favor, insira valores válidos para altura e peso.');
        return; }

      const imc = peso / (altura * altura);
      let classificacao = '';

      if (imc < 18.5) {
        classificacao = 'Abaixo do peso';
      } else if (imc < 24.9) {
        classificacao = 'Peso normal';
      } else if (imc < 29.9) {
        classificacao = 'Sobrepeso';
      } else if (imc < 34.9) {
        classificacao = 'Obesidade Grau 1';
      } else if (imc < 39.9) {
        classificacao = 'Obesidade Grau 2';
      } else {
        classificacao = 'Obesidade Grau 3';
      }

      setResultado({ imc, classificacao });
  };

  return (
    <div className="container">
      <h1>Calculadora de IMC</h1>
      <Formulario onCalcular={calcularIMC} />
      {resultado && <Resultado imc={resultado.imc} classificacao={resultado.classificacao} />}
    </div>
  );
}

export default App;



