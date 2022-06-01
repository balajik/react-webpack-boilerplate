import { StrictMode } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

ReactDOM.render(
  <StrictMode>
    <App text="React and Webpack" />
  </StrictMode>,
  document.getElementById('root')
);

if (module.hot) {
  module.hot.accept();
}
