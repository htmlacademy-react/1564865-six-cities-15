import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import App from './components/app/app';
import { store } from './store';
import { fetchOffersAction, checkAuthAction } from './store/api-action';
import { changeAuthorizationStatus } from './store/user-process/user-process';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { getToken } from './services/token';

const token = getToken();

if (token !== '') {
  store.dispatch(checkAuthAction());
} else {
  store.dispatch(changeAuthorizationStatus());
}

store.dispatch(fetchOffersAction());

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <ToastContainer />
      <App />
    </Provider>
  </React.StrictMode>
);
