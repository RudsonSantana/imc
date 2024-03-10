import React, { useState } from 'react';

const BMI = () => {
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [result, setResult] = useState(null);

  const calculateBMI = () => {
    const bmi = weight / (height * height);
    setResult(bmi);
  };

  return (
    <section>
      <h2>Calculadora de Índice de Massa Corporal</h2>

      <div class="input-group mb-3">
        <span class="input-group-text" htmlFor="weight">Peso (kg):</span>
        <input className="form-control" type="number" id="weight" value={weight} onChange={(e) => setWeight(e.target.value)} />
      </div>

      <div class="input-group mb-3">
        <span class="input-group-text" htmlFor="height">Altura (m):</span>
        <input className="form-control" type="number" id="height" value={height} onChange={(e) => setHeight(e.target.value)} />
      </div>

      <button class="btn btn-primary" onClick={calculateBMI}>Calcular</button>
      <br /><br />
      
      {result &&
        <div className="input-group mb-3">
          <input
            className="form-control font-weight-bold"
            type="text"
            readOnly
            value={`Seu IMC é: ${result.toFixed(2)}`}
          />
        </div>
      }


    </section>
  );
};

export default BMI;
