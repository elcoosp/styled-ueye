import React from 'react'
import styled, { css } from 'styled-components'

import Header from './Header'
import Title from './Title'
import Container from './Container'

export default ({ small, medium, headerImage, title }) => {
  const containerSize = small ? { small: true } : medium ? { medium: true } : {}
  return (
    <Container {...containerSize}>
      <Header image={headerImage} />
      <Title>{title}</Title>
    </Container>
  )
}
