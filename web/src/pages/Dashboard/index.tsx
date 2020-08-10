import React from 'react';
import { MdRestaurantMenu, MdAnnouncement } from 'react-icons/md';
import { Link } from 'react-router-dom';

import logoImg from '../../assets/logo.png';

import { Container, Content, Background, AnimationContainer } from './styles';


const Dashboard: React.FC = () => {
  return (
    <Container>
      <Background />
      <Content>
        <AnimationContainer>
          <img src={logoImg} alt="GoBarber" />
          <h1>Seu cardápio online,</h1>
          <h2>direto da sua casa.</h2>

          <Link to="/menu">
            <MdRestaurantMenu />
            Estou aqui para fazer pedidos
          </Link>

          <Link to="/add">
            <MdAnnouncement />
            Estou aqui para anunciar
          </Link>
        </AnimationContainer>
      </Content>
    </Container>
  );
};

export default Dashboard;
