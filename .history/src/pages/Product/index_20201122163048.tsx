import React from "react";
import Header from "../../components/Header";
import { Container } from "../Product/styles";
import { ContainerLeft, ContainerRight } from "./styles";
import imageproduct from '../../assets/product-top.png';
import iconheart from '../../assets/iconHeart.svg';
import instagram from '../../assets/instagram.svg';
import linkedin from '../../assets/linkedin.svg';
import pinterest from '../../assets/pinterest.svg';
import whatsapp from '../../assets/whatsapp.svg';
import facebook from '../../assets/facebook.svg';
import { Link, useRouteMatch } from "react-router-dom";

//import Header from '../../components/Header';

//import { Container, CardContainer, Card, TableContainer } from './styles';

const Product: React.FC = () => {
   const {params} = useRouteMatch();
   console.log(params.product);

  return (
    <>
    <Header/>
    <Container>
      <ContainerLeft>
        <div className="pageWay">
        <Link to="/">
            <p>Voltar</p>
        </Link>

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
                    <select name="quantity">
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                    </select>
                    <p> Avise-me quando chegar</p>
                </div>
              </div>

              <div className="buyButtom">
                  <p>Comprar</p>
              </div>

              <div className="addCar">
                  <p>Adicionar ao carrinho</p>
              </div>

              <div className="freight">
                <p className="higher">Frete</p>
                <p className="lower">Calcule o frete estimado para sua região</p>
                <div className="putFreight">
                    <input placeholder="CEP" type="text"/>
                    <button type="submit">Calcular</button>
                </div>
                <p className="last"> Não sei meu CEP </p>
              </div>

              <div className="share">
                  <p>Compartilhar</p>
                  <div className="social">
                    <div className="socialMedias">
                    <a href="www.instagram.com" target="_blank"><img src={instagram} alt="Instagram" /></a>
                    <a href="www.pinterest.com" target="_blank"><img src={pinterest} alt="Pinterest" /></a>
                    <a href="www.linkedin.com" target="_blank"><img src={linkedin} alt="Linkedin" /></a>
                    <a href="www.facebook.com" target="_blank"><img src={facebook} alt="Facebook" /></a>
                    <a href="www.whatsapp.com" target="_blank"><img src={whatsapp} alt="Whatsapp" /></a>
                    </div>
                  </div>
              </div>

          </div>

      </ContainerRight>
      </Container>
    </>
  );
};

export default Product;
