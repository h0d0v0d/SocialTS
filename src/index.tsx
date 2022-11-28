import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/App/App';

import reduxStore from './redux/store';

import { BrowserRouter as Router} from "react-router-dom";
import { Provider } from 'react-redux';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <Provider store={reduxStore}>
    <Router>
      <App/>
    </Router>
  </Provider>
)


