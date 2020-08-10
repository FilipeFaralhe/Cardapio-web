import React from 'react';
import { Link } from 'react-router-dom';

import { FiArrowLeft } from "react-icons/fi";

import logoImg from '../../assets/logo.png'

import './styles.css';

import '../../styles/global'

const PageHeader: React.FC = (props) => {

  return(
    <header className="page-header">

    <div className="top-bar-container">
      <Link to="/">
        <FiArrowLeft size={20}/>
      </Link>
      <img src={logoImg} alt="Proffy"/>
    </div>

    <div className="header-content">
      {props.children}
    </div>

  </header>
  );
}

export default PageHeader;