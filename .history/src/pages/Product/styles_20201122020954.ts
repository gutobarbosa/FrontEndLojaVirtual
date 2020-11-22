import styled from 'styled-components';
/*
interface CardProps {
  total?: boolean;
}*/

export const Container = styled.div`
  width: 100%;
  max-width: 1600px;
  height: 100%;
  min-height: 1000px;
  margin: 0 auto;
  padding: 40px 20px;
  display: flex;
`;

export const ContainerLeft = styled.div`
  width: 100%;
  height: 100%;
  height: 50px;
   .pageWay{
       width: 100%;
       display: flex;
       height: 50px;
   }
   .pageWay span {
       font-size: 12px;
       margin-left: 30px;
       color: #979797;
       cursor: pointer;
   }
   .pageWay span:hover {
    text-decoration: underline;
    opacity: 0.8;
   }
   .pageWay p {
       font-size: 12px;
       margin-left: 5px;
       cursor: pointer;
   }
   .pageWay p:hover {
    text-decoration: underline;
    opacity: 0.8;
   }
   .ContainerDescription{
       font-size: 12px;
       margin-top: 15px;
       color: #222222;

   }
`;

export const ContainerRight = styled.div`
  width: 70%;
  height: 50px;
  margin-top: 50px;


  .containerFirst{
    display: flex;

  }
   .categoryName{
       margin-top: 10px;
       width: 70%;
   }
   .heart{
    margin-top: 10px;
    cursor: pointer;
   }

   .sectionProduct{
       width: 100%;
       height: 400px;

        .productName {
           margin-top: 10px;
           font-size: 20px;
        }
        .productInformation {
            margin-top: 5px;
        }
        .productInformation p{
            font-size: 12px;
        }
        .price {
            margin-top: 20px;
            font-size: 24px;
        }
        .installment{
            font-size: 12px;
            color:#707070;
        }
        .sizeContainer{
            margin-top: 15px;
        }

        .sizeContainer span{
            font-size: 14px;
        }
        .size{
            margin-top: 2px;
            display: flex;
        }

        .chooseSize {
            width: 160px;
            display: flex;
        }
        .chooseSize p {
            width: 50px;
            height: 20px;
            background: #E9E9E9;
            margin-right: 10px;
            border-radius: 5px;
            cursor: pointer;
            text-align: center;
            color: #707070;
        }

        .quantity p {
            margin-top: 40px;
        }
        .listQuantity{
            display: flex;

            select{
                width: 80px;
                margin-right: 30px;
                margin-top: 3px;
                height: 30px;
                border-radius: 5px;
                cursor:pointer;
            }
            p {
                margin-top: 3px
            }
        }
   }
`;

