import styled from 'styled-components';
/*
interface CardProps {
  total?: boolean;
}*/

export const Container = styled.div`
  width: 100%;
  max-width: 1600px;
  margin: 0 auto;
  padding: 40px 20px;
  display: flex;
  align-items: center;


    img {
        justify-content: flex-start;
    }

    h3 {
        color: black;
        margin-left: 10px;
        font-family: 'Poppins', sans-serif;
        font-size: 24px;
        font-weight: 300;
    }
`;
export const ContainerProducts = styled.div`
width: 100%;
max-width: 1600px;
margin: 0 auto;
padding: 40px 20px;
display: flex;
align-items: center;

    .heart {
        width: 30px;
        height: 30px;
        background-color: white;
        border-radius: 15px;
        float: right;
        align-items: center;

    }
    .heart img {
        align-items: center;
        width: 20px;
        height: 20px;
        margin: 0 auto;

    }
    .productBox {
        width: 236px;
        height: 550px;
        margin-left: 40px;
        background: #E9E9E9;
    }
    .productinformation {
        max-width: 250px;
        max-height: 150px;
    }
    .productImage{
        max-width: 236px;
        max-height: 416px;
    }
    .productImage img {
        width: 100%;
        height: 416px;
        margin-top: -13px;
    }

    .arrowNext {
        margin-left: 80px;
    }
    .productinformation{
        width: 200px;
        size: 20px;
        justify-content: center;
        margin: 0 auto;
        margin-top: 10px;
    }
    .productinformation p{
        text-align: center;
        line-height: 25px;
    }
    .buttonBuy {
        width: 100%;
        margin: 0 auto;
        text-align: center;
    }
    .productinformation button{
        background: black;
        color: white;
        width: 90px;
        height: 30px;
        border-radius: 5px;
        cursor: pointer;
    }

    .bold{
        color: #707070;
        font-weight: bold;
    }


`;
