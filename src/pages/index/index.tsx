import React from 'react'
import { Col } from '@minily/components'

import Layout from 'layout'

import { Title } from 'components'

import { Wrapper, Brand, Child } from './styles'

const Home: React.FC = () => (
  <Layout title="Home">
    <Wrapper>
      <Child>
        <Title tag="h1" label="Romullo Sousa" />
        <Title tag="p" label="Fullstack Developer" />
      </Child>

      <Child>
        <Brand src={'assets/brand.png'} alt="Hiukky brand" />
      </Child>
    </Wrapper>
  </Layout>
)

export default Home
