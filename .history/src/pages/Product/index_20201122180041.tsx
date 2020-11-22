import React, { useEffect, useState } from "react";
import Header from "../../components/Header";
import { Container } from "../Product/styles";
import { ContainerLeft, ContainerRight } from "./styles";
import iconheart from '../../assets/iconHeart.svg';
import instagram from '../../assets/instagram.svg';
import linkedin from '../../assets/linkedin.svg';
import pinterest from '../../assets/pinterest.svg';
import whatsapp from '../../assets/whatsapp.svg';
import facebook from '../../assets/facebook.svg';
import { Link, useRouteMatch } from "react-router-dom";
import api from '../../services/api';

interface ProductParams {
    product: string;
}
interface productReceive {
    id: string;
    photo: string;
    price: string;
    name: string;
    description:string;
    store: string;
}

const Product: React.FC = () => {
    var descontValue = 0;
    const descount = (value: any) => {
        const number = 5;
        var descontreceive = value.replace("R$ ", "");
        descontreceive = descontreceive.replace(",00","");
        descontValue = descontreceive / number;
        console.log(descontValue);
    }
   const {params} = useRouteMatch<ProductParams>();
   //console.log(params);
   const [information, setInformation] = useState<productReceive| null>(null);

   useEffect (() => {
    api.get(`api-tests/product/${params.product}`).then(response =>{
        setInformation(response.data.product);

    });

}, [params.product]);
console.log(information);

  return (
    <>
    <Header/>
    <Container>
        {information && (
            <ContainerLeft>
        <div className="pageWay">
        <Link to="/">
            <p>Voltar</p>
        </Link>

            <span>Home {">"} Madame Ristow {">"} Vestidos</span>
        </div>
        <div className="imageProduct">
        <img src={information.photo} alt={information.id} />
        </div>
        <div className="ContainerDescription">
            <span>
              {information.description}
            </span>

        </div>
      </ContainerLeft>

        )}

    {information && (
      <ContainerRight>
          <div className="containerFirst">
            <div className="categoryName">
                <span>{information.name}</span>
            </div>
            <div className="heart">
                <img src={iconheart} alt="Product" />
            </div>
          </div>
          <div className="sectionProduct">
              <div className="productName">
                <span>{information.name}</span>
              </div>
              <div className="productInformation">
                <p> Produzido e entregue por {information.store}</p>
                <p> Vendido por: {information.store}</p>
              </div>
              <div className="price">
                <span>{information.price}</span>
              </div>
              {descount(information.price)}
              <div className="installment">
                <p>ou até 5x de R$ {descontValue} | Atacado mínimo: 6 peças</p>
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
      )}

      </Container>
    </>
  );
};

export default Product;
