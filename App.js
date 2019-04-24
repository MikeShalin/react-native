import React from 'react' //через expo нельзя хукать
import { Provider } from 'mobx-react'
import stores from './src/models'
import Navigation from './src/Features/Navigation'

const App = () => (
  <Provider {...stores}>
    <Navigation/>
  </Provider>
)

export default App
