import React from 'react'

import { Wrapper } from './styles'

import { Tag } from 'components'

const Content: React.FC = ({ children }) => (
  <>
    <Tag tag={['html', 'body']} />
    <Wrapper fluid={true}>{children}</Wrapper>
    <Tag tag={['html', 'body']} reverse={true} />
  </>
)

export default Content
