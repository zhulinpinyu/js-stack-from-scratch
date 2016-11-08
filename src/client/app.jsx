import 'babel-polyfill'
import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, combineReducers } from 'redux'
import { Provider } from 'react-redux'
import dogReducer from './reducers/dog-reducer'
import BarkButton from './containers/bark-button'
import BarkMessage from './containers/bark-message'

const store = createStore(combineReducers({
  dog: dogReducer
}))

ReactDOM.render(
  <Provider store={store}>
    <div>
      <BarkMessage />
      <BarkButton />
    </div>
  </Provider>
  , document.querySelector('.app')
)
