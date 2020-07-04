import React from 'react'

import { Wrapper, Item, Body, Brand } from '../styles'
import { Copyright } from './styles'

import { Tag } from 'components'

import Layout from 'layout'

const Home: React.FC = () => (
  <Layout title="Home">
    <Wrapper sm={{ item: 1, order: 2 }} lg={{ item: 1, order: 2 }}>
      <Item>
        <Body.Container color="blue">
          <Body.Title color="blue">
            <Tag tag="h1" />
            <h1>Romullo Sousa</h1>
            <Tag tag="h1" />
          </Body.Title>
          <Body.Subtitle>
            <Tag tag="p" />
            <p>Fullstack Developer</p>
            <Tag tag="p" />
          </Body.Subtitle>
        </Body.Container>
      </Item>
      <Item>
        <Brand src="/assets/personal/brand.png" alt="Brand" />
      </Item>
    </Wrapper>
    <Copyright>2020 © Hiukky</Copyright>
  </Layout>
)

export default Home
