import React from 'react'
import styled, { css } from 'styled-components'

import Header from './Header'
import Title from './Title'
import Container from './Container'
import Content from './Content'

export default ({ small, medium, headerImage, title, content }) => {
  const containerSize = small ? { small: true } : medium ? { medium: true } : {}
  return (
    <Container {...containerSize}>
      <Header image={headerImage} />
      <Title>{title}</Title>
      <Content>{content}</Content>
    </Container>
  )
}
