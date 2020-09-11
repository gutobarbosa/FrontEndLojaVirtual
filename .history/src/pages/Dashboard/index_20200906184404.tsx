import React from 'react';
import logoImg from '../../assets/logo.svg';
import { Title } from './styles';

const Dashboard: React.FC = () => {
    return (
    <>
        <img src={logoImg} alt="Github Explorer"/>
        <Title>Explore repositorios no Github</Title>
    </>
    )
}
export default Dashboard;
// function Dashboard() {} é a mesma coisa que o de cima, porém é recomendado que utilize o de cima, pois conseguimos definir a tipagem, pois no typescript temos que tipar e precisamos falar o formato da função. E a tipagem é React.FC assim como no codigo acima
