import React from 'react'

import { Wrapper } from './styles'

const Content: React.FC = ({ children }) => (
  <Wrapper fluid={true}>{children}</Wrapper>
)

export default Content
