import React from 'react'
import { ThemeProvider } from 'styled-components'
import { render } from 'react-dom'
import Card from './blocks/Card'
const theme = {
  color: { primary: 'red' },
  shadow: { small: '2px 3px 27px 1px rgba(89,89,89,0.20)' },
  radius: { small: '3px' }
}
const App = () => (
  <ThemeProvider theme={theme}>
    <Card
      medium
      title="Some Card"
      headerImage="url(&quot;https://images.unsplash.com/photo-1532976799258-5848600ec8f1?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=7f5720dc13466c17724a53402f0eab26&auto=format&fit=crop&w=900&q=60&quot;)"
    />
  </ThemeProvider>
)

render(<App />, document.querySelector('#root'))
