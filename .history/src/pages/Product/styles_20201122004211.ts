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
  display: flex;
  align-items: left;
  justify-content: left;
   .pageWay{
       width: 50%;
       justify-content: center;
       align-items: center;
       margin: 0 auto;
       border: 2px solid black;
       align-items: left;
   }
`;

export const ContainerRight = styled.div`
  width: 100%;
  height: 50px;
  border: 2px solid black;
`;

