import React from "react";
import Header from "../../components/Header";
import { Container } from "../Product/styles";
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
              <div className="productName">
                <span>Vestido curto</span>
              </div>
              <div className="productInformation">
                <p> Produzido e entregue por Madame Ristow</p>
                <p> Vendido por: Parthenon</p>
              </div>
              <div className="price">
                <span>R$ 46,13</span>
              </div>
              <div className="installment">
                <p>ou até 5x de R$ 9,03 | Atacado mínimo: 6 peças</p>
              </div>
              <div className="sizeContainer">
                <span>Tamanho:</span>
                <div className="size">
                    <div className="chooseSize">
                        <p>P</p>
                        <p>M</p>
                        <p>G</p>
                        <p>GG</p>
                    </div>
                </div>
              </div>
              <div className="quantity">
                <p>Quantidade</p>
                <div className="listQuantity">
                    <select name="cars">
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                    </select>
                </div>
              </div>

          </div>

      </ContainerRight>
      </Container>
    </>
  );
};

export default Product;
