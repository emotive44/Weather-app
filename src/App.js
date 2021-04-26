import React, { useEffect } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';

import store from './shared/store/store';
import Routes from './shared/routes/Routes';
import { axiosSettings } from './shared/config/axios';


const App = () => {
  
  useEffect(() => {
    axiosSettings();
  }, []);

  return (
    <Provider store={store}>
      <Router>
        <Routes />
      </Router>
    </Provider>
  );
}

export default App;
