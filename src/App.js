import React from 'react'
import CssBaseline from '@material-ui/core/CssBaseline'
import Container from '@material-ui/core/Container'
import DropDown from './Components/DropDown'

const App = () => {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container fixed>
        <DropDown style={{ backgroundColor: '#fff', height: '100vh' }} />
      </Container>
    </React.Fragment>
  )
}

export default App
