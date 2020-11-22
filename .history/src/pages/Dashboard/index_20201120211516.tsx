/* eslint-disable no-undef */

import React from "react";
import { Container, ContainerProducts } from "./styles";
import lefticon from '../../assets/image-product';
import productimage from '../../assets/image-product.png';
import arrownext from '../../assets/arrownext.svg';

import Header from '../../components/Header';

//import { Container, CardContainer, Card, TableContainer } from './styles';

const Dashboard: React.FC = () => {

  return (
    <>
    <Header/>
    <Container>
    <img src={lefticon} alt="Hamburguer" />
    <h3>Madame Ristow</h3>
    </Container>
    <ContainerProducts>
        <div className="productBox">
            <div className="productImage">
            <img src={productimage} alt="Product" />
            </div>
            <div className="productinformation"></div>
        </div>
        <div className="productBox">
            <div className="productImage">
            <img src={productimage} alt="Product" />
            </div>
            <div className="productinformation"></div>
        </div>
        <div className="productBox">
            <div className="productImage">
            <img src={productimage} alt="Product" />
            </div>
            <div className="productinformation"></div>
        </div>
        <div className="productBox">
            <div className="productImage">
            <img src={productimage} alt="Product" />
            </div>
            <div className="productinformation">
                <p>Blusa Feminina Básica Manga Curta Marisa<br/></p>
                <p className ="bold">R$550 <br/></p>
                <button>Comprar</button>
            </div>
        </div>
        <div className="arrowNext">
            <img src={arrownext} alt="arrownext" />
        </div>
    </ContainerProducts>
    </>
  );
};

export default Dashboard;
