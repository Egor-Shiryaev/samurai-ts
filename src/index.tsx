import React from 'react'; // позволяет создавать компоненты jsx
import ReactDOM from 'react-dom'; // помогает отрисовывать их в браузере, переводит JSX в HTML
import './index.css';
import App from "./App";

ReactDOM.render(
    <App />,
  document.getElementById('root')
); // ReactDOM отрисуй App в элементе с id 'root'

