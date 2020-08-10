import React from 'react';


import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

import './styles.css';

export interface Prato {
  avatar: string;
  bio: string;
  cost: number;
  id: number;
  name: string;
  category: string;
  whatsapp: string;
}

interface PratoItemProps {
  prato: Prato;
}

 const TeacherItem: React.FC<PratoItemProps> = ({ prato }) => {


  return(
    <article className="teacher-item">
      <header>
        <img src={prato.avatar} alt={prato.name}/>
        <div>
          <strong>{prato.name}</strong>
          <span>{prato.category}</span>
        </div>
      </header>

      <p>
        {prato.bio}
      </p>

      <footer>
        <p>Preço/hora
        <strong>R$ {prato.cost}</strong>
        </p>
        <a target="_blank" href={`https://wa.me/${prato.whatsapp}?text=Olá! Gostaria de agendar o seguinte item ${prato.name}!`}>
          <img src={whatsappIcon} alt="WhatsApp"/>
          Entrar em contato
        </a>
      </footer>
  </article>
  );
}

export default TeacherItem;