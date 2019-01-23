import React from 'react'
import ReactDOM from 'react-dom'

import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import reduxThunk from 'redux-thunk'
import './common/'
import rootReducer from './store/reducers.js'
import './mock'
const store = createStore(rootReducer, applyMiddleware(reduxThunk))

import App from './App'

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, 
    document.getElementById('root'),
)