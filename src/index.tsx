import * as React from 'react';
import * as ReactDOM from 'react-dom';

import { Provider } from 'mobx-react';

import ErrorStore from './store/errorStore';
import App from './components/App';
import './styles.scss';

const errorStore = new ErrorStore();
const  elementToMount = document.getElementById('app');

ReactDOM.render(
  <Provider errorStore={errorStore}>
    <App />
  </Provider>,
  elementToMount
);
