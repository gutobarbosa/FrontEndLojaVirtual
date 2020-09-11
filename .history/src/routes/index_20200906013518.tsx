import React from 'react';
import {Switch, Route} from 'react-router-dom';

import Dashboard from '../pages/Dashboard';
import Repository from '../pages/Repository';

// rota da url, nesse caso a nossa rota atual é a raiz então vai apenas a / e o componente é que sera acessado através desse endereço url
const Routes: React.FC = () =>{
    return (
        <Switch>
            <Route path="/" exact component={Dashboard} />
            <Route path="/repository" component={Repository} />
        </Switch>
    );
}

export default Routes;
