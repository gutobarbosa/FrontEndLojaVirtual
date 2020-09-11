import React, { useEffect, useState } from 'react';
import { useRouteMatch, Link } from 'react-router-dom';
import {Header, RepositoryInfo, Issues} from './styles';
import api from '../../services/api';
import logoImg from '../../assets/logo.svg';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

interface RepositoryParams {
    repository: string;
}
interface Repositorys {
    full_name: string;
    description: string;
    stargazers_count: number;
    forks_count: number;
    open_issues_count: number;
    owner: {
        login:string;
        avatar_url: string;

    };
    // repitindo, quando nosso estado não retorna valores primitivos como number, string e etc e sim array e objeto, temos que tipa-lo, utilizando interface.
    const Repository: React.FC = () => {
    const { params } = useRouteMatch<RepositoryParams>();
    const [repository, setRepository] = useState<Repository>(null);
    const [issues, setIssues] = useState([]);
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

    /*
    as informações acima são requisições utilizando o .then
*/
/**
useEffect(() => {

    async function loadData(): Promise<void> {
        const [repository, issues] = await Promise.all([
            api.get(`repos/${params.repository}/issues`),
            api.get(`repos/${params.repository}`),
        ]);
        console.log(repository);
        console.log(issues);

    }
    loadData();
}, [])


 * Desta maneira acima estamos usando o async pra fazer a requisição no caso
 * Poderiamos ter feito assim
 *    const repository = await api.get(`repos/${params.repository}`);
        const issues = await api.get(`repos/${params.repository}/issues`);
porém o diego na aula falou que async await espera um executar para depois começar a outra e isso pode nos causar problemas, quando utilizamos o Promisse.all() ele executa paralelamente
diversas requisições e obtemos as duas respostas no mesmo tempo, e essa função retorna vetores e em casa posição é o retorno de uma requisição, no caso acima, desestruturamos 2 posições em
repository e issues para receber esses dados de cada posição do array. obs: podemos executar dessa maneira apenas quando a segunda requisição não depende da primeira.
 */
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
