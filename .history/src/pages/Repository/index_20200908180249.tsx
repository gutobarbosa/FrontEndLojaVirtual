import React from 'react';
import { useRouteMatch } from 'react-router-dom';
import {Header} from './styles';
import logoImg from '../../assets/logo.svg';
interface RepositoryParams {
    repository: string;
}
const Repository: React.FC = () => {
    const { params } = useRouteMatch<RepositoryParams>();
    return (

        <Header>

        </Header>
    //<h1>Repository: {params.repository}</h1>
    )
}
export default Repository;
