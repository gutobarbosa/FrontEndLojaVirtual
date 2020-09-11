import React, { useEffect } from 'react';
import { useRouteMatch, Link } from 'react-router-dom';
import {Header, RepositoryInfo, Issues} from './styles';
import api from '../../services/api';
import logoImg from '../../assets/logo.svg';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

interface RepositoryParams {
    repository: string;
}
const Repository: React.FC = () => {
    const { params } = useRouteMatch<RepositoryParams>();

    // aqui estamos pegando as mesmas informações da que tinhamos na outra pagina
    useEffect (() => {
        api.get(`repos/${params.repository}`).then(response =>{
            console.log(response.data);
        });
    }, [params.repository]); //temos qe colocar o params.repository aqui nos cochetes porque caso ela mude a informação retornada sempre será a fiel
    // agora iremos pegar o conteudo das issues do repositorio, nesse caso teremos que fazer duas requests.
    useEffect (() => {
        api.get(`repos/${params.repository}/issues`).then(response =>{
            console.log(response.data);
        });
    }, [params.repository]);


    return (
        <>
            <Header>
                <img src={logoImg} alt="Github Explorer" />
                <Link to="/dashboard">
                    <FiChevronLeft size={16} />
                    Voltar
                </Link>
            </Header>

            <RepositoryInfo>
                <header>
                    <img src="https://avatars2.githubusercontent.com/u/46411054?s=460&u=c3f92c619bac6c318c07610c662d7fa846ea36bc&v=4" alt="Augusto Barbosa" />
                    <div>
                        <strong>
                            Augusto Barbosa / Repository
                        </strong>
                        <p>descrição do repositorio</p>
                    </div>
                </header>
                <ul>
                    <li>
                        <strong>1808</strong>
                        <span>Stars</span>
                    </li>
                    <li>
                        <strong>48</strong>
                        <span>Forks</span>
                    </li>
                    <li>
                        <strong>67</strong>
                        <span> Issues abertas </span>
                    </li>
                </ul>
            </RepositoryInfo>

            <Issues>
                <Link to={"/"}>
                    <div>
                        <strong> Qualquer coisa </strong>
                        <p> Qualquer coisa 2</p>
                    </div>
                    <FiChevronRight size={20}/>
                </Link>
            </Issues>

        </>
     //<h1>Repository: {params.repository}</h1>
    );
};
export default Repository;
