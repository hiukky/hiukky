import React from 'react'
import { Col } from '@minily/components'

import { Box, Wrapper } from './styles'

import Layout from 'src/layout'

const Home: React.FC = () => (
  <Layout title="Hiukky">
    <Wrapper>
      <Col size={{ xs: 12, lg: 6 }}>
        <Box />
      </Col>
      <Col size={{ xs: 12, lg: 6 }}>
        <Box />
      </Col>
    </Wrapper>
  </Layout>
)

export default Home
