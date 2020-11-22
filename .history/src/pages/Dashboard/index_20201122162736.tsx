/* eslint-disable no-undef */

import React, { useEffect, useState } from "react";
import { Container, ContainerProducts } from "./styles";
import lefticon from '../../assets/avatar 152 x 152px.png';
import productimage from '../../assets/image-product.png';
import arrownext from '../../assets/arrowNext.svg';
import iconheart from '../../assets/iconHeart.svg';
import api from '../../services/api';
import Header from '../../components/Header';
import { Link } from "react-router-dom";


//import { Container, CardContainer, Card, TableContainer } from './styles';

interface Issue {
    id: number;
    name: string;
    photo: string;
    price: string;


}

interface Product {
    id: number;
    name: string;
    photo: string;
    price: string;

}

const Dashboard: React.FC = () => {
    const [issues, setIssues] = useState<Issue[]>([]);
    const [products, setProducts] = useState<Product[]>([]);
    const [productIndexIssues, setProductIndexIssues] = useState(0);
    const [productIndexProducts, setProductIndexProducts] = useState(0);
    useEffect (() => {
        api.get('api-tests/showcases').then(response =>{
            setIssues(response.data.showcases[0].products);
             console.log(response.data.showcases[0]);
        });

    }, []);

    useEffect (() => {
        api.get('api-tests/showcases').then(response =>{
            setProducts(response.data.showcases[1].products);
            // console.log(response.data.showcases[0].products);
        });

    }, []);

    let firstFourProducts = issues.slice(productIndexIssues, productIndexIssues + 4);
    let secondFourProducts = products.slice(productIndexProducts, productIndexProducts + 4);

    const nextIssues = () => {
        const lastProductIndex = issues.length -4;
        const resetProductIndex = productIndexIssues === lastProductIndex;
        const index = resetProductIndex ? 0 : productIndexIssues + 1;
        setProductIndexIssues(index);

    }
    const nextProducts = () => {
        const lastProductIndex = products.length -4;
        const resetProductIndex = productIndexProducts === lastProductIndex;
        const index = resetProductIndex ? 0 : productIndexProducts + 1;
        setProductIndexProducts(index);

    }


    //console.log(issues);

  return (
    <>
    <Header/>
    <Container>
    <img src={lefticon} alt="Hamburguer" />
    <h3>Madame Ristow</h3>
    </Container>
    <ContainerProducts>

               {firstFourProducts.map(issue => (
                 <div className="containerBox">
                 <div className="heart">
                     <img src={iconheart} alt="iconheart" />
                 </div>
                 <div className="productBox">
                     <div className="productImage">
                     <img src={issue.photo} alt={issue.photo} />
                     </div>
                     <div className="productinformation">
                     <p>{issue.name}<br/></p>
                         <p className ="bold">{issue.price} <br/></p>
                         <div className="buttonBuy">
                         <Link key={issue.id} to={`/product/${1}/${issue.id}`}>
                            <button>Comprar</button>
                        </Link>

                         </div>
                     </div>
                 </div>
             </div>
               ))}
        <div className="arrowNext">
            <img src={arrownext} alt="arrownext" onClick={nextIssues} />
        </div>


    </ContainerProducts>

    <Container>
    <img src={lefticon} alt="Hamburguer" />
    <h3>Madame Ristow</h3>
    </Container>
    <ContainerProducts>
    {secondFourProducts.map(product => (
                 <div className="containerBox">
                 <div className="heart">
                     <img src={iconheart} alt="iconheart" />
                 </div>
                 <div className="productBox">
                     <div className="productImage">
                     <img src={product.photo} alt={product.photo} />
                     </div>
                     <div className="productinformation">
                     <p>{product.name}<br/></p>
                         <p className ="bold">{product.price} <br/></p>
                         <div className="buttonBuy">
                             <button>Comprar</button>
                         </div>
                     </div>
                 </div>
             </div>
               ))}
        <div className="arrowNext">
            <img src={arrownext} alt="arrownext" onClick={nextProducts} />
        </div>
    </ContainerProducts>
    </>
  );
};

export default Dashboard;
