import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {BrowserRouter} from 'react-router-dom';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import loginForm from './reducers';
import {validateForm} from './actions/index'



const store = createStore(loginForm);
// store.dispatch(validateFormSuccess());
// store.dispatch(changeEmail('liza'));
// store.dispatch(changePassword('12345'));
    console.log(store.getState());



ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter><App/></BrowserRouter>
    </Provider>,
    document.getElementById('root'));

registerServiceWorker();
