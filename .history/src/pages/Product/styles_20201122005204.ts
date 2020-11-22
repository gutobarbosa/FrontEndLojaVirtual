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
  height: 50px;
  border: 2px solid black;
   .pageWay{
       width: 100%;
       display: flex;

   }
   .pageWay span {
       font-size: 12px;
       margin-left: 30px;
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
`;

export const ContainerRight = styled.div`
  width: 100%;
  height: 50px;
  border: 2px solid black;
`;

