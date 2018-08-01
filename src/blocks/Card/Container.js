import styled from 'styled-components'
export default styled.div`
  overflow: hidden;
  box-shadow: ${p => p.theme.shadow.small};
  display: flex;
  flex-direction: column;
  align-items: stretch;
  justify-content: space-around;
  border-radius: ${p => p.theme.radius.small};
  height: ${p => (p.small ? `200px` : p.medium ? `300px` : `400px`)};
`
