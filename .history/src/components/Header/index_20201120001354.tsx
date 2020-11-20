import React from 'react';

//import { Link } from 'react-router-dom';
import hamburguerBars from '../../assets/hamburguer.svg';
import searchicon from '../../assets/searchIcon.svg';
import favoriteicon from '../../assets/favoriteIcon.svg'
import { Container, ContainerHeader, ContentLeft, ContentRight } from '../Header/styles';




const Header: React.FC = () => (
  <Container>
    <ContainerHeader>
    <header>
      <ContentLeft>
        <div className="menuTotal">
          <img src={hamburguerBars} alt="Hamburguer" />
          <span className="menu">Menu</span>
        </div>
      </ContentLeft>
      <ContentRight>
        <div className="searchTotal">
          <img src={searchicon} alt="Hamburguer" />
          <input placeholder=" Buscar" type="text"/>
        </div>
        <div className="favoritesTotal">
          <img src={favoriteicon} alt="Favorite" />
          <span>Meus favoritos</span>
        </div>
        <div className="MycarTotal">
          <span>Meu carrinho | R$0,00</span>
        </div>
      </ContentRight>
    </header>
    </ContainerHeader>
  </Container>
);

export default Header;
