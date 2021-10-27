import React from 'react';
import './index.css';
import reportWebVitals from './reportWebVitals';
import ReactDOM from "react-dom";
import App from "./App";

import {BrowserRouter} from "react-router-dom";
import store from "./Redux/Store";


 export let rerenderEntireTree = () => {
    ReactDOM.render(
        <BrowserRouter>
        <App store = {store}/>,
    </BrowserRouter> ,
        document.getElementById('root')

    );
}


store.subscribe(()=> {
    rerenderEntireTree()})
rerenderEntireTree()

reportWebVitals();
