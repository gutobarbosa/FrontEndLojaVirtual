import React from "react";
import Header from "../../components/Header";
import { Container } from "../Dashboard/styles";
import { ContainerLeft, ContainerRight } from "./styles";


//import Header from '../../components/Header';

//import { Container, CardContainer, Card, TableContainer } from './styles';

const Product: React.FC = () => {

  return (
    <>
    <Header/>
    <Container>
      <ContainerLeft>
        <div className="pageWay">
            <span>Voltar </span>
            <span>Home {">"} Madame Ristow {">"} Vestidos</span>
        </div>
      </ContainerLeft>
      <ContainerRight>

      </ContainerRight>
      </Container>
    </>
  );
};

export default Product;
