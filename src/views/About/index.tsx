import React from 'react'

import { Wrapper, Item, P, Body, Brand } from '../styles'

import { Tag } from 'components'

import Layout from 'layout'

const About: React.FC = () => (
  <Layout title="About me">
    <Wrapper sm={{ item: 2, order: 1 }} lg={{ item: 1, order: 2 }}>
      <Item>
        <Brand src="/assets/personal/hiukky.png" />
      </Item>
      <Item>
        <Body.Container color="yellow">
          <Body.Title color="yellow">
            <Tag tag="h1" />
            <h1>About Me</h1>
            <Tag tag="h1" />
          </Body.Title>
          <Tag tag="p" />
          <Body.Content>
            <P>
              Olá! Meu nome é <s>Romullo</s>, tenho 23 anos, sou cristão
              "apaixonado por
              <s> Jesus</s>", um amante da tecnologia e do mundo open-source.
            </P>

            <P>
              Atualmente trabalho como desenvolvedor <s>Fullstack</s> em uma
              empresa aqui na minha cidade e nas horas vagas estou trabalhando
              em algum dos meus projetos que você pode conferir no meu
              <a href="https://github.com/hiukky" target="_blank">
                <s> Github </s>
              </a>
              .
            </P>

            <P>
              Também sou um <s>otaku</s>, fã da cultura <s>geek</s> e apaixonado
              por <s>Lo-fi</s>. Quando não estou no mundo dos códigos, estou
              curtindo algo da cultura japonesa, sejá aquele velho e bom{' '}
              <s>Anime</s> ou a trilha sonora dele rs.
            </P>
          </Body.Content>
          <Tag tag="p" />
        </Body.Container>
      </Item>
    </Wrapper>
  </Layout>
)

export default About
