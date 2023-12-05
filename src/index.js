import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import './code'
import {Counter} from './counter';
import {List} from './list';
import Rate from './rating';
// import App from './App';
import reportWebVitals from './reportWebVitals';
import { Table } from './Table';
import { CounterSfc } from './cunterSfc';
import { TableSfc } from './tableSfc';
import { FormAddProducts } from './form';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <Rate /> */}
    {/* <Counter value={-5} /> */}
    {/* <App />
    <Counter value={-5} />
    <Counter />
    <Counter value={5} />
    <List />
    <List placeholder={"add ..."} /> */}

    {/* <Table /> */}
    {/* <CounterSfc /> */}
    {/* <TableSfc /> */}

    {/* Form Add Products */}
    <FormAddProducts />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
