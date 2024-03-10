import React, { useState } from 'react';

const BodyFat = () => {
  const [bmi, setBMI] = useState('');
  const [age, setAge] = useState('');
  const [sex, setSex] = useState('');
  const [result, setResult] = useState(null);

  const calculateBodyFat = () => {
    const bodyFat = (1.20 * bmi) + (0.23 * age) - (10.8 * sex) - 5.4;
    setResult(bodyFat);
  };

  return (
    <section>
      <h2>Cálculo do Percentual de Gordura Corporal</h2>

      <div class="input-group mb-3">
        <span class="input-group-text" htmlFor="bmi">IMC:</span>
        <input className="form-control" type="number" id="bmi" value={bmi} onChange={(e) => setBMI(e.target.value)} />
      </div>

      <div class="input-group mb-3">
        <span class="input-group-text" htmlFor="age">Idade:</span>
        <input className="form-control" type="number" id="age" value={age} onChange={(e) => setAge(e.target.value)} />
      </div>

      <div class="input-group mb-3">
        <span class="input-group-text" htmlFor="sex">Sexo (0 para mulher, 1 para homem):</span>
        <input className="form-control" type="number" id="sex" value={sex} onChange={(e) => setSex(e.target.value)} />
      </div>

      <button class="btn btn-primary" onClick={calculateBodyFat}>Calcular</button>
      <br /><br />

      {result &&
        <div className="input-group mb-3">
          <input
            className="form-control font-weight-bold"
            type="text"
            readOnly
            value={`Seu percentual de gordura corporal é: ${result.toFixed(2)}%`}
          />
        </div>
      }
      
    </section>
  );
};

export default BodyFat;
