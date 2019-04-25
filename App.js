import React from 'react' //через expo нельзя хукать
import { Provider } from 'mobx-react'
import stores from './src/models'
import Navigation from './src/Features/Navigation'

import { Container } from 'native-base'
import Header from './src/Features/Header/Components'

const App = () => {
  const nav = React.createRef()
  return (
    <Provider {...stores}>
      <Container>
        <Header navigation={nav}/>
        <Navigation ref={nav}/>
      </Container>
    </Provider>
  )
}

export default App
