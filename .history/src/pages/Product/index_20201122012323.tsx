import React from "react";
import Header from "../../components/Header";
import { Container } from "../Dashboard/styles";
import { ContainerLeft, ContainerRight } from "./styles";
import imageproduct from '../../assets/product-top.png';
import iconheart from '../../assets/iconHeart.svg';

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
            <span>
                - Camiseta masculina <br/>
                - Manga curta<br/>
                - Gola redonda<br/>
                - Estampa super herói escudo capitão<br/>
                - Marca: Marvel<br/>
                - Tecido: meia malha<br/>
                - Composição: 100% algodão<br/>
                - Modelo veste tamanho: M
            </span>

        </div>
      </ContainerLeft>
      <ContainerRight>
          <div className="containerFirst">
            <div className="categoryName">
                <span>Vestidos</span>
            </div>
            <div className="heart">
                <img src={iconheart} alt="Product" />
            </div>
          </div>
          <div className="sectionProduct">
              <span>Vestido curto</span>
              <p> Produzido e entregue por Madame Ristow</p>
              <p> Vendido por: Parthenon</p>

              <span>R$ 46,13</span>
              <p>ou até 5x de R$ 9,03 | Atacado mínimo: 6 peças</p>
          </div>

      </ContainerRight>
      </Container>
    </>
  );
};

export default Product;
