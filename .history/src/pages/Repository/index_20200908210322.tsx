import React from 'react';
import { useRouteMatch, Link } from 'react-router-dom';
import {Header, RepositoryInfo} from './styles';
import logoImg from '../../assets/logo.svg';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

interface RepositoryParams {
    repository: string;
}
const Repository: React.FC = () => {
    const { params } = useRouteMatch<RepositoryParams>();
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
                <Link key={repository.full_name} to={`/repositories/${repository.full_name}`}>
                    <div>
                        <strong> {repository.full_name} </strong>
                        <p>{repository.description}</p>
                    </div>
                    <FiChevronRight size={20}/>
                </Link>
            </Issues>

        </>
     //<h1>Repository: {params.repository}</h1>
    );
};
export default Repository;
