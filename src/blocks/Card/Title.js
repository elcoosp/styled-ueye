import styled from 'styled-components'
import H2 from '../elements/H2'

export default styled(H2)`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  position: relative;
  z-index: 1;
  &:after {
    content: '';
    position: absolute;
    bottom: -30px;
    width: 100%;
    height: 30px;
    background-image: linear-gradient(to bottom, white, transparent);
  }
`
