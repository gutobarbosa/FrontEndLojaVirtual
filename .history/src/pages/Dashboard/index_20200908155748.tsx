import React, { useState, FormEvent } from 'react';
import { FiChevronRight } from 'react-icons/fi';
import api from '../../services/api';
import logoImg from '../../assets/logo.svg';
import { Title, Form, Repositories, Error } from './styles';

//sempre que criamos um estado que não é um valor padrão como string number e boolean e sim array, objeto é muito legal definirmos um tipo pra ele
interface Repository {
    full_name: string;
    description: string;
    owner: {
        login:string;
        avatar_url: string;

    };
}

const Dashboard: React.FC = () => {
    const [newRepo, setNewRepo]= useState('');
    const [inputError, setInputError] = useState('');
    // iremos informar que esse useState é um array de repositorios
    const [repositories, setRepositories] = useState<Repository[]>([]);

    async function handleAddRepository(event: FormEvent<HTMLFormElement>): Promise<void>{
       // mais primeiro precisamos ter acesso ao valor enviado no input
       event.preventDefault(); // isso aqui sempre precisa ficar no começo quando utilizado.
       // console.log(newRepo);
       // para usar o event precisamos importar o FormEvent e  colocarmos o evento de clique como parametro da função pra conseguir usar o preventDefault que é para que o procedimento padrão do form não aconteça
       // Dessa maneira conseguimos ver oque ta retornando no console.log

       if(!newRepo){
        setInputError ('Digite um nome/autor do repositorio');
        return;
    }

    try {
      // Agora vamos chamar nossa API
      // colocamos `` porque iremos utilizar variavel aqui dentro
      //verificando se existe algum valor na onde digitamos o repositorio
      // adição de um novo repositorio
      // Consumir API do github
      // Salvar novo repositório

        // e pro get não ficar sem tipagem também podemos adicionar dessa maneira
        const response = await api.get<Repository>(`repos/${newRepo}`);
        //console.log(response.data);
        const repository = response.data;

        // dessa forma conseguimos acessar as informações assim repository.description quando tipamos o get
        //utilizando o conceito de imutabilidade, pegamos tudo aquilo que ja existe no vetor e adicionamos no final a informação que buscamos, para não perder oque ja existe.
        setRepositories([...repositories, repository]);
        setNewRepo('');
    } catch (err) {
        setInputError('Erro na busca por esse repositorio');
    }

    }


    return (
    <>
        <img src={logoImg} alt="Github Explorer"/>
        <Title>Explore repositorios no Github</Title>
        <Form onSubmit={handleAddRepository}>
            <input
            value={newRepo}
            onChange={ (e) => setNewRepo(e.target.value) }
            placeholder="Digite o nome do repositório"></input>
            <button type="submit"> Pesquisar</button>
        </Form>
        {inputError && <Error>{inputError}</Error>}
        <Repositories>
            {repositories.map(repository => (
                    <a key={repository.full_name} href="teste">
                    <img
                    src={repository.owner.avatar_url} alt={repository.owner.login}
                    />

                    <div>
                        <strong> {repository.full_name} </strong>
                        <p>{repository.description}</p>
                    </div>
                    <FiChevronRight size={20}/>
                </a>
            ))}
        </Repositories>
    </>
    );
};
export default Dashboard;
// function Dashboard() {} é a mesma coisa que o de cima, porém é recomendado que utilize o de cima, pois conseguimos definir a tipagem, pois no typescript temos que tipar e precisamos falar o formato da função. E a tipagem é React.FC assim como no codigo acima
