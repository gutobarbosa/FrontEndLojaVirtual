import React, { useEffect, useState } from 'react';
import { useRouteMatch, Link } from 'react-router-dom';
import {Header, RepositoryInfo, Issues} from './styles';
import api from '../../services/api';
import logoImg from '../../assets/logo.svg';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

interface RepositoryParams {
    repository: string;
}
interface Repository {
    full_name: string;
    description: string;
    stargazers_count: number;
    forks_count: number;
    open_issues_count: number;
        owner: {
            login:string;
            avatar_url: string;

        };
    }

    interface Issue {
        title: string;
        id: number;
        html_url: string;
        user:{
            login: string;
        }
    }
    // repitindo, quando nosso estado não retorna valores primitivos como number, string e etc e sim array e objeto, temos que tipa-lo, utilizando interface.

    const Repository: React.FC = () => {
    const { params } = useRouteMatch<RepositoryParams>();
    const [repository, setRepository] = useState<Repository | null>(null);
    // No caso de array não precisamos fazer o esqueminha do null acima
    const [issues, setIssues] = useState<Issue[]>([]);
    // aqui estamos pegando as mesmas informações da que tinhamos na outra pagina
    useEffect (() => {
        api.get(`repos/${params.repository}`).then(response =>{
            setRepository(response.data);
        });
    }, [params.repository]); //temos qe colocar o params.repository aqui nos cochetes porque caso ela mude a informação retornada sempre será a fiel
    // agora iremos pegar o conteudo das issues do repositorio, nesse caso teremos que fazer duas requests.
    useEffect (() => {
        api.get(`repos/${params.repository}/issues`).then(response =>{
            setIssues(response.data);
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
                <Link to="/">
                    <FiChevronLeft size={16} />
                    Voltar
                </Link>
            </Header>
            { repository && (
                <RepositoryInfo>
                    <header>
                        <img src={repository.owner.avatar_url} alt={repository.owner.login} />
                        <div>
                            <strong>
                                {repository.full_name}
                            </strong>
                            <p>{repository.description}</p>
                        </div>
                    </header>
                    <ul>
                        <li>
                            <strong>{repository.stargazers_count}</strong>
                            <span>Stars</span>
                        </li>
                        <li>
                            <strong>{repository.forks_count}</strong>
                            <span>Forks</span>
                        </li>
                        <li>
                            <strong>{repository.open_issues_count}</strong>
                            <span> Issues abertas </span>
                        </li>
                    </ul>
                </RepositoryInfo>
            )}

            <Issues>
               {issues.map(issue => (
                    <a key={issue.id} href={issue.html_url}>
                    <div>
                        <strong> {issue.title} </strong>
                        <p>{issue.user.login}</p>
                    </div>
                    <FiChevronRight size={20}/>
                </a>
               ))}
            </Issues>
        </>
     //<h1>Repository: {params.repository}</h1>
    );
};
export default Repository;
