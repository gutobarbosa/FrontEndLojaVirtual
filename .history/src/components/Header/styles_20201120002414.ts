import styled from 'styled-components';
/*
interface ContainerProps {
  size?: 'small' | 'large';
}*/

export const Container = styled.div`
  background: #FAFAFA;
  padding: 30px;
  width: 100%;

  header {
    height: 60px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  span {
    color: #707070;
    text-align: left;
    opacity: 1;
    margin-left: 25px;
    cursor: pointer;
  }
  .menu{
    margin-left: 10px;

  }
  input {
    border-left: 0px solid black;
    border-right: 0px solid black;
    border-top: 0px solid black;
    width: 70px;
  }

   img {
    margin-right: 5px;
   }

   .menuTotal{
     width:100px;
     height:30px;
     cursor:pointer;
   }

   .menuTotal:hover{
    opacity: 0.5;
  }
`;

export const ContainerHeader = styled.div`
width: 85%;
margin: 0 auto;
`;


export const ContentLeft = styled.div`

`;

export const ContentRight = styled.div`
  display: flex;
  margin-left: 20px;
  .favoritesTotal img {
        margin-right: -20px;
        margin-left: 15px
    }

    .favoritesTotal:hover{
        cursor:pointer;
    }

    .MycarTotal img {
        margin-right: -20px;
        margin-left: 15px
    }

    .MycarTotal:hover{
        cursor:pointer;
    }


`;
