import React from 'react';
import ReactDOM from 'react-dom';
// import './index.css';
import App from './App';
// import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';
import RedusStore from './RedusStore'

ReactDOM.render(
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>,
  // document.getElementById('root')
  <Provider store={RedusStore}>
    <App />
  </Provider>, document.getElementById('root')
);

// serviceWorker.unregister();


// import React from 'react';
// import { Provider } from 'react-redux';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// import store from './store';

// ReactDOM.render(
//   <Provider store={store}>
//     <App />
//   </Provider>, document.getElementById('root'));
