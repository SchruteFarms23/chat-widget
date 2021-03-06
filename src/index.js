import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import listReducer from './reducers/listReducer'
import { createStore, combineReducers, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk'
import registerServiceWorker from './registerServiceWorker';


const rootReducers = combineReducers({
  list: listReducer
})

const store = createStore(rootReducers, composeWithDevTools(
  applyMiddleware(thunk)
  )
)

ReactDOM.render(<Provider store={store} ><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
