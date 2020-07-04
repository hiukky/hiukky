import React from 'react'

import { Wrapper, Item, P, Body, Brand } from '../styles'

import { Tag } from 'components'

import Layout from 'layout'

const About: React.FC = () => (
  <Layout title="About me">
    <Wrapper sm={{ item: 2, order: 1 }} lg={{ item: 1, order: 2 }}>
      <Item>
        <Brand src="/assets/personal/hiukky.png" alt="Hiukky" />
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
              Olá! Meu nome <s>Romullo</s>, tenho 23 anos, sou brasileiro,
              cristão, um amante da tecnologia e do mundo open-source.
            </P>
            <P>
              Sou formado em <s> Análise e Desenvolvimento de Sistemas</s> pela
              Unopar e atualmente trabalho como desenvolvedor <s>fullstack </s>
              na <s>Rhaimes</s>, uma empresa de soluções em tecnologia aqui na
              minha cidade.
            </P>
            <P>
              Hoje meu <s>hobby</s> é a progamação! na maior parte do tempo
              quando não estou envolvido com o trabalho, estou na frente do meu
              computador
              <s> estudando</s> alguma nova tecnologia ou trabalhando em alguns
              dos meus projetos que você pode conferir no meu{' '}
              <a href="https://github.com/hiukky" target="_blank">
                <s> Github </s>
              </a>
              .
            </P>

            <P>
              Assistir
              <a href="https://myanimelist.net/profile/hiukky" target="_blank">
                <s> animes </s>
              </a>
              e <s>series</s> ou curtir um <s>lo-fi</s> também são algumas das
              minhas diversões.
            </P>
          </Body.Content>
          <Tag tag="p" />
        </Body.Container>
      </Item>
    </Wrapper>
  </Layout>
)

export default About
