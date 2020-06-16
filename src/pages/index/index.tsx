import React from 'react'

import Layout from 'layout'

import { Title } from 'components'

import { Wrapper } from './styles'

const Home: React.FC = () => (
  <Layout title="Home">
    <Wrapper>
      <Title tag="h1" label="Romullo Sousa" />
      <Title tag="p" label="Fullstack Developer" />
    </Wrapper>
  </Layout>
)

export default Home
