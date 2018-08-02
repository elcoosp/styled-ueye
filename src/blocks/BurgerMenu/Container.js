import styled, { css } from 'styled-components'
const hidden = css`
  position: absolute;
  left: -10000px;
  top: auto;
  width: 1px;
  height: 1px;
  overflow: hidden;
`
const Container = styled.nav`
  position: absolute;
  left: 0;
  top: 0;
  height: 100vh;
  ${p =>
    p.isOpen
      ? css`
          animation: ${p.entryAnimation} 0.3s ease-in-out forwards;
        `
      : css`
          animation: ${p.getExitAnimation(hidden)} 0.3s ease-in-out forwards;
        `};
`
export default Container
