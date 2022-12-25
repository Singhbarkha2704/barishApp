import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import { store, persistor } from './store/store';
// import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <Provider store={store}>
        {/* <PersistGate loading={<div>loADing..</div>} persistor={persistor}> */}
            <App /> 
        {/* </PersistGate>         */}
    </Provider>      
);

//how to mock a store?
//how to use Provider in react testing?
