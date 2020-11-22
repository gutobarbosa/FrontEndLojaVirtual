import React from "react";
import Header from "../../components/Header";
import { Container } from "../Dashboard/styles";
import { ContainerLeft, ContainerRight } from "./styles";
import imageproduct from '../../assets/product-top.png';

//import Header from '../../components/Header';

//import { Container, CardContainer, Card, TableContainer } from './styles';

const Product: React.FC = () => {

  return (
    <>
    <Header/>
    <Container>
      <ContainerLeft>
        <div className="pageWay">
            <p>Voltar</p>
            <span>Home {">"} Madame Ristow {">"} Vestidos</span>
        </div>
        <div className="imageProduct">
        <img src={imageproduct} alt="Product" />
        </div>
        <div className="ContainerDescription">
            <span>   - Camiseta masculina </span>
            <span>   - Manga curta</span>
            <span>    - Gola redonda</span>
            <span>   - Estampa super herói escudo capitão</span>
            <span>   - Marca: Marvel</span>
            <span>   - Tecido: meia malha</span>
            <span>   - Composição: 100% algodão</span>
            <span>   - Modelo veste tamanho: M</span>
        </div>
      </ContainerLeft>
      <ContainerRight>

      </ContainerRight>
      </Container>
    </>
  );
};

export default Product;
