import React from 'react';
import './index.css';
import reportWebVitals from './reportWebVitals';
import ReactDOM from "react-dom";
import App from "./App";

import {BrowserRouter} from "react-router-dom";
import store from "./Redux/Store";
import {Provider} from "./StoreContext";


export let rerenderEntireTree = () => {
    ReactDOM.render(
        <BrowserRouter>
            <Provider store={store}>
                <App/>,
            </Provider>
        </BrowserRouter>,
        document.getElementById('root')
    );
}


store.subscribe(() => {
    rerenderEntireTree()
})
rerenderEntireTree()

reportWebVitals();
