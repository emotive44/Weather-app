import React from 'react';
import { Route, Router, Switch, useHistory } from 'react-router-dom';

import { Home } from '../../modules';
import { Navbar, Footer } from '../components';


const Routes = () => {
  const history = useHistory();

  return (
    <Router history={history}>
      <Navbar />
      <main style={{height: '88vh'}}>
        <Switch>
            <Route exact path="/" component={Home} />
        </Switch>
      </main>
      <Footer />
    </Router>
  );
}

export default Routes;
