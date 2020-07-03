import React from 'react'

import { Wrapper, Item, P, Body, Brand } from '../styles'

import { Tag } from 'components'

import Layout from 'layout'

const About: React.FC = () => (
  <Layout title="Sobre mim">
    <Wrapper sm={{ item: 2, order: 1 }} lg={{ item: 1, order: 2 }}>
      <Item>
        <Brand src="/assets/personal/hiukky.png" />
      </Item>
      <Item>
        <Body.Container>
          <Body.Title color="yellow">
            <Tag tag="h1" />
            <h1>About Me</h1>
            <Tag tag="h1" />
          </Body.Title>
          <Tag tag="p" />
          <Body.Content>
            <P>
              Meu nome é Romullo tenho 23 anos sou cristão apaixonado por Jesus
              e um amante da Tecnologia e do mundo open-source.
            </P>

            <P>
              Atualmente trabalho como desenvolvedor Fullstack em uma empresa
              aqui na minha cidade e nas horas vagas estou trabalhando em algum
              dos meus projetos que você pode conferir no Github.
            </P>

            <P>
              Também sou um otaku e fã da cultura geek. Quando não estou
              mergulhado no mundo dos códigos, estou curtindo a cultura japonesa
              assistindo Animes ou curtindo aquele velho e bom Lo-fi.
            </P>
          </Body.Content>
          <Tag tag="p" />
        </Body.Container>
      </Item>
    </Wrapper>
  </Layout>
)

export default About
