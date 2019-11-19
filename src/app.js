import React from 'react'
import { Provider } from 'react-redux'
import store from './store'
import Todos from './Todos'

const App = () => {
  return (
    <Provider store={store}>
      <Todos />
    </Provider>
  )
}

export default App
