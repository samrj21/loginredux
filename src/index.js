import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import * as serviceWorker from './serviceWorker';
import Form from './containers/Form';
import {Provider} from 'react-redux';
import store from './store/storeConfig';

ReactDOM.render( <Provider store={store}>
    <Form />
    </Provider>, document.getElementById('root'));


serviceWorker.unregister();
