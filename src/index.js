import React from 'react';
import ReactDOM from 'react-dom';
import POC from './Components/Poc.jsx';
import { AppStore } from './redux';
import { BrowserRouter } from "react-router-dom";
import { Provider } from 'react-redux';

ReactDOM.render(
    <Provider store={AppStore}>
        <BrowserRouter>
          <POC />
        </BrowserRouter>
    </Provider>,
  document.getElementById('root')
);