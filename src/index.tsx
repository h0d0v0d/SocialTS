import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/App/App';

import myStore, { DataType } from './redux/store';
import reduxStore from './redux/redux-store';

import { StoreType } from './redux/store';

import { BrowserRouter as Router} from "react-router-dom";


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

function render(store: StoreType) {
  root.render(
    <Router>
      <App state={store.getState()} dispatch={store.dispatch.bind(store)}/>
    </Router>
  )
}

render(myStore)

myStore.subscribe(() => {
  render(myStore)
})


