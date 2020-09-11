import React from 'react';
import { Title } from './styles';

const Dashboard: React.FC = () => {
    return <h1>Explore repositorios no Github</h1>;
}
export default Dashboard;
// function Dashboard() {} é a mesma coisa que o de cima, porém é recomendado que utilize o de cima, pois conseguimos definir a tipagem, pois no typescript temos que tipar e precisamos falar o formato da função. E a tipagem é React.FC assim como no codigo acima
