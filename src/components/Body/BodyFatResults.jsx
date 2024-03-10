import React from 'react';

const BodyFatResults = () => {
  return (
    <section>
      <h2>Resultados do Percentual de Gordura Corporal</h2>
      <table className="table table-dark table-striped">
        <thead>
          <tr>
            <th>Descrição</th>
            <th>Mulheres</th>
            <th>Homens</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Gordura essencial</td>
            <td>De 10 a 13%</td>
            <td>De 2 a 5%</td>
          </tr>
          <tr>
            <td>Atletas</td>
            <td>De 14 a 20%</td>
            <td>De 6 a 13%</td>
          </tr>
          <tr>
            <td>Praticantes de atividades físicas</td>
            <td>De 21 a 24%</td>
            <td>De 14 a 17%</td>
          </tr>
          <tr>
            <td>Aceitável</td>
            <td>De 25 a 31%</td>
            <td>De 18 a 24%</td>
          </tr>
          <tr>
            <td>Obesidade</td>
            <td>Acima de 32%</td>
            <td>Acima de 25%</td>
          </tr>
        </tbody>
      </table>
    </section>
  );
};

export default BodyFatResults;

