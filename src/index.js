import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
//import App from './component/App.jsx';
import { Provider } from 'react-redux';
import * as serviceWorker from './serviceWorker';
import configureStore from './store/configureStore';


const store = configureStore();


ReactDOM.render(
<Provider store={store}>
    <App />
</Provider>, document.getElementById('root'));
serviceWorker.unregister();
