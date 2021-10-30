import React from 'react';
import './index.css';
import reportWebVitals from './reportWebVitals';
import ReactDOM from "react-dom";
import App from "./App";
import {BrowserRouter} from "react-router-dom";
import {Provider} from "react-redux";
import store from "./Redux/Redux-store";



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
