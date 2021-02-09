
import state, { subscribe } from './redux/state';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {addMessage, addPost, changeNewPost} from './redux/state';
import { BrowserRouter} from 'react-router-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';

let rerenderEntireTree = (state) => {
    ReactDOM.render(
      <React.StrictMode>
        <BrowserRouter>
          <App appState={state} addPost={addPost} addMessage={addMessage} changeNewPost={changeNewPost}/>
        </BrowserRouter>
      </React.StrictMode>,
    document.getElementById('root')
    );
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

reportWebVitals();

rerenderEntireTree(state);

subscribe(rerenderEntireTree);

