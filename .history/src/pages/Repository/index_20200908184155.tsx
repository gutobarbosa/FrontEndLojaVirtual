import React from 'react';
import { useRouteMatch, Link } from 'react-router-dom';
import {Header} from './styles';
import logoImg from '../../assets/logo.svg';
import { FiChevronLeft } from 'react-icons/fi';

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
                </header>
                <ul></ul>
            </RepositoryInfo>

        </>
     //<h1>Repository: {params.repository}</h1>
    );
};
export default Repository;
