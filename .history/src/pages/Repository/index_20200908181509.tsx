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

        <Header>
          <img src={logoImg} alt="Github Explorer" />
          <Link to="/dashboard">
              <FiChevronLeft size={16} />
          </Link>
        </Header>
    //<h1>Repository: {params.repository}</h1>
    )
}
export default Repository;
