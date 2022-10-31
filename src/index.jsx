import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from "react-redux";
// import { store } from "./store/UsersPage/rootReducer";
// import { store } from "./store/TodosPage/vanillaRedux/store";
import { store } from "./store/TodosPage/reduxToolkit/store";
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <Provider store={store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>
);
