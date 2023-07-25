import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {Reset} from "styled-reset";
import reportWebVitals from './reportWebVitals';
import createSagaMiddleware from "redux-saga";
import {configureStore} from "@reduxjs/toolkit";
import rootSaga from "./pages/saga/rootSaga";
import {Provider} from "react-redux";
import Root from "./pages/root";
import rootStore from "./pages/saga/store/rootStore";


const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
    reducer: rootStore,
    middleware: [sagaMiddleware]
})

sagaMiddleware.run(rootSaga);

const rootNode = document.getElementById('root') as HTMLElement

ReactDOM.createRoot(rootNode).render(
    // <React.StrictMode>
    <Provider store={store}>
        <Reset/>
        <Root/>
    </Provider>
    // </React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
