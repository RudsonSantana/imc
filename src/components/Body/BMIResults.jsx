import React from 'react';

const BMIResults = () => {
  return (
    <section>
      <h2>Resultados do Índice de Massa Corporal</h2>
      <table className="table table-dark table-striped">
        <thead>
          <tr>
            <th>IMC</th>
            <th>Categoria</th>
            <th>Classificação</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Entre 18,5 e 24,9</td>
            <td>Normal</td>
            <td>0</td>
          </tr>
          <tr>
            <td>Entre 25,0 e 29,9</td>
            <td>Sobrepeso</td>
            <td>I</td>
          </tr>
          <tr>
            <td>Entre 30,0 e 39,9</td>
            <td>Obesidade</td>
            <td>II</td>
          </tr>
          <tr>
            <td>Maior que 40,0</td>
            <td>Obesidade Grave</td>
            <td>III</td>
          </tr>
        </tbody>
      </table>
    </section>
  );
};

export default BMIResults;
