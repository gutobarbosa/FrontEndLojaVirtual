import React from 'react';
import { FiChevronRight } from 'react-icons/fi';
import logoImg from '../../assets/logo.svg';
import { Title, Form, Repositories } from './styles';


const Dashboard: React.FC = () => {
    return (
    <>
        <img src={logoImg} alt="Github Explorer"/>
        <Title>Explore repositorios no Github</Title>
        <Form>
            <input placeholder="Digite o nome do repositório"></input>
            <button type="submit"> Pesquisar</button>
        </Form>
        <Repositories>
            <a href="teste">
                <img
                src="https://avatars2.githubusercontent.com/u/46411054?s=460&u=c3f92c619bac6c318c07610c662d7fa846ea36bc&v=4" alt="Augusto Barbosa"
                />

                <div>
                    <strong> Augusto Barbosa </strong>
                    <p> Programador em busca de aperfeiçoar suas habilidaes como desenvolvidor</p>
                </div>
                <FiChevronRight size={20}/>
            </a>
            <a href="teste">
                <img
                src="https://avatars2.githubusercontent.com/u/46411054?s=460&u=c3f92c619bac6c318c07610c662d7fa846ea36bc&v=4" alt="Augusto Barbosa"
                />

                <div>
                    <strong> Augusto Barbosa </strong>
                    <p> Programador em busca de aperfeiçoar suas habilidaes como desenvolvidor</p>
                </div>
                <FiChevronRight size={20}/>
            </a>
            <a href="teste">
                <img
                src="https://avatars2.githubusercontent.com/u/46411054?s=460&u=c3f92c619bac6c318c07610c662d7fa846ea36bc&v=4" alt="Augusto Barbosa"
                />

                <div>
                    <strong> Augusto Barbosa </strong>
                    <p> Programador em busca de aperfeiçoar suas habilidaes como desenvolvidor</p>
                </div>
                <FiChevronRight size={20}/>
            </a>
        </Repositories>
    </>
    );
};
export default Dashboard;
// function Dashboard() {} é a mesma coisa que o de cima, porém é recomendado que utilize o de cima, pois conseguimos definir a tipagem, pois no typescript temos que tipar e precisamos falar o formato da função. E a tipagem é React.FC assim como no codigo acima
