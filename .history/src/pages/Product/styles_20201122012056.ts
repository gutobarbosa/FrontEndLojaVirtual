import styled from 'styled-components';
/*
interface CardProps {
  total?: boolean;
}*/

export const Container = styled.div`
  width: 100%;
  max-width: 1120px;
  margin: 0 auto;
  padding: 40px 20px;
  color: purple;
  border: 10px solid red;
  display: flex;
`;

export const ContainerLeft = styled.div`
  width: 100%;
  height: 100%;
  min-height: 900px;
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
  border: 2px solid black;


  .containerFirst{
    width: 100%;
  height: 50px;
    display: flex;
  }
   .categoryName{
       width: 70%;
   }
`;

