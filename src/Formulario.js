import React, { useState } from 'react';

const Formulario = ({ onCalcular }) => {
  const [altura, setAltura] = useState('');
  const [peso, setPeso] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onCalcular({ altura, peso });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Altura (metros):
        <input
          type="text"
          value={altura}
          onChange={(e) => setAltura(e.target.value)}
        />
      </label>
      <label>
        Peso (kg):
        <input
          type="text"
          value={peso}
          onChange={(e) => setPeso(e.target.value)}
        />
      </label>
      <button type="submit">Calcular IMC</button>
    </form>
  );
};

export default Formulario;
