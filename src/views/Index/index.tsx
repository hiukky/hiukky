import React from 'react'

import { Wrapper, Item, Body, Brand } from '../styles'

import { Tag } from 'components'

import Layout from 'layout'

const Home: React.FC = () => (
  <Layout title="Home">
    <Wrapper sm={{ item: 2, order: 1 }} lg={{ item: 1, order: 2 }}>
      <Item>
        <Brand src="/assets/brand.png" alt="Brand" />
      </Item>
      <Item>
        <Body.Container>
          <Body.Title color="blue">
            <Tag tag="h1" />
            <h1>Romullo Sousa</h1>
            <Tag tag="h1" />
          </Body.Title>
          <Body.Subtitle>
            <Tag tag="p" />
            <p>Fullstack Develop</p>
            <Tag tag="p" />
          </Body.Subtitle>
        </Body.Container>
      </Item>
    </Wrapper>
  </Layout>
)

export default Home
