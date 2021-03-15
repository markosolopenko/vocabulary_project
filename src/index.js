import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import {App} from './App';
import { BrowserRouter } from 'react-router-dom';
import { WordsContext } from './context/WordsContext';


ReactDOM.render(
  <WordsContext>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </WordsContext>,
  document.getElementById('root')
);

