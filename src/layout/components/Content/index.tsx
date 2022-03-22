import React from 'react'

import { Wrapper } from './styled'

import { Tag } from 'components'

const Content: React.FC = ({ children }) => (
  <Wrapper fluid={true}>
    <Tag tag={['html', 'body']} />
    {children}
    <Tag tag={['html', 'body']} reverse={true} />
  </Wrapper>
)

export default Content
