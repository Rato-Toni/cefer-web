import React from "react";

import "./Regras.css";

function Regras() {
    // Teste
    return (
    <div className="centro-esportivo">
      <h1>Regras de Funcionamento do Centro Esportivo</h1>
      <ul>
        <li>Horário de funcionamento: das 8h às 22h;</li>
        <li>Todos os frequentadores devem realizar um cadastro prévio;</li>
        <li>Uso de roupas e calçados adequados é obrigatório;</li>
        <li>É proibido fumar nas dependências do centro esportivo;</li>
        <li>
          É necessário respeitar as regras de boa conduta e etiqueta esportiva;
        </li>
        <li>
          Os equipamentos esportivos devem ser utilizados de acordo com as
          instruções e orientações dos instrutores;
        </li>
        <li>
          É proibido o consumo de alimentos e bebidas nos locais de prática
          esportiva;
        </li>
        <li>
          O centro esportivo não se responsabiliza por objetos pessoais perdidos
          ou danificados;
        </li>
        <li>Menores de idade devem estar acompanhados por um responsável;</li>
        <li>
          O descumprimento das regras pode resultar na suspensão ou cancelamento
          do acesso ao centro esportivo.
        </li>
      </ul>
    </div>
  );
}

export default Regras;
