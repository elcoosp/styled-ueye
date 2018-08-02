import React, { Fragment } from 'react'
import { ThemeProvider } from 'styled-components'
import { render } from 'react-dom'
import Card from './blocks/Card'
import BurgerMenu from './blocks/BurgerMenu'
import { css, keyframes } from 'styled-components'
const theme = {
  color: { primary: 'red' },
  shadow: { small: '2px 3px 27px 1px rgba(89,89,89,0.20)' },
  radius: { small: '3px' }
}
const AppCard = () => (
  <ThemeProvider theme={theme}>
    <Card
      medium
      headerImage="url(&quot;https://images.unsplash.com/photo-1532976799258-5848600ec8f1?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=7f5720dc13466c17724a53402f0eab26&auto=format&fit=crop&w=900&q=60&quot;)"
      title="Some Card"
      content="fzrejkge ger g eriojgergprhk er pfgjioer g ekge ger g eriojgergprhk er pfgjioer g ekge ger g eriojgergprhk er pfgjioer g ekge ger g eriojgergprhk er pfgjioer g ekge ger g eriojgergprhk er pfgjioer g ekge ger g eriojgergprhk er pfgjioer g ekge ger g eriojgergprhk er pfgjioer g ekge ger g eriojgergprhk er pfgjioer g ekge ger g eriojgergprhk er pfgjioer g ekge ger g eriojgergprhk er pfgjioer g eriojgergprhk er pfgjig eriojgergprhk er pfgjig eriojgergprhk er pfgji fert eriojgergprhk er pfgjioer  fert eriojgergprhk er pfgjioer  fert eriojgergprhk er pfgjioer  fert eriojgergprhk er pfgjioer  fert eriojgergprhk er pfgjioer  fert eriojgergprhk er pfgjioer  fert eriojgergprhk er pfgjioer  fert eriojgergprhk er pfgjioer  fert eriojgergprhk er pfgjioer  fert eriojgergprhk er pfgjioer  fert eriojgergprhk er pfgjioer  fert eriojgergprhk er pfgjioer  fert eriojgergprhk er pfgjioer  fert eriojgergprhk er pfgjioer  fert eriojgergprhk er pfgjioer  fert eriojgergprhk er pfgjioer  fert eriojgergprhk er pfgjioer  fert eriojgergprhk er pfgjioer  fert eriojgergprhk er pfgjioer  fert eriojgergprhk er pfgjioer  fert eriojgergprhk er pfgjioer  fert eriojgergprhk er pfgjioer  fert eriojgergprhk er pfgjioer  fert eriojgergprhk er pfgjioer  fert eriojgergprhk er pfgjioer  fert eriojgergprhk er pfgjioer  fert eriojgergprhk er pfgjioer  fert eriojgergprhk er pfgjioer  fert eriojgergprhk er pfgjioer  fert eriojgergprhk er pfgjioer  fert eriojgergprhk er pfgjioer  fert eriojgergprhk er pfgjioer  fert eriojgergprhk er pfgjioer  fert eriojgergprhk er pfgjioer  fert eriojgergprhk er pfgjioer  fert eriojgergprhk er pfgjioer  fert eriojgergprhk er pfgjioer  fert eriojgergprhk er pfgjioer  fert eriojgergprhk er pfgjioer  fert eriojgergprhk er pfgjioer  fert eriojgergprhk er pfgjioer  fert eriojgergprhk er pfgjioer  fert eriojgergprhk er pfgjioer  fert eriojgergprhk er pfgjioer  fert gphrje fre thp jtfgdsl  gqsm g"
    />
  </ThemeProvider>
)

const MenuToggler = ({ isOpen, ...props }) => (
  <button {...props}>{isOpen ? `close` : `open`}</button>
)

const fadeInSlide = keyframes`
  from {
    opacity:0;
    transform: translate(-50px);
  }

  to {
    transform: translate(0px);
    opacity:1;
  }
`
const fadeOutSlideThen = css => keyframes`
  from {
    transform: translate(0px);
    opacity:1;
  }

  to {
    transform: translate(-50px);
    opacity:0;
    ${css}
  }
`
const App = () => (
  <BurgerMenu
    toggler={MenuToggler}
    items={[
      props => <a {...props}>Somewhere</a>,
      props => <a {...props}>About</a>,
      props => <a {...props}>Content</a>
    ]}
    entryAnimation={fadeInSlide}
    getExitAnimation={fadeOutSlideThen}
  />
)

render(<App />, document.querySelector('#root'))
