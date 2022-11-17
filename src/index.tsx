import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/App/App';

import store from './redux/store';

import { BrowserRouter as Router} from "react-router-dom";

function render() {
  const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
  );
  root.render(
    <Router>
      <App store={store}/>
    </Router>
  )
}

render()

store.subscribe(render)


