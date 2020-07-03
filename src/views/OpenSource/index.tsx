import React from 'react'
import { Icon } from '@minily/components'

import { Wrapper, Item, Body } from '../styles'
import { Card } from './styles'

import { Tag } from 'components'

import Layout from 'layout'

const OpenSource: React.FC = () => {
  const projects = Array(5).fill({
    name: 'Flate',
    description: 'Dark colored theme for VS Code and Insomnia.',
    picture: 'assets/open-source/flate.png',
  })

  return (
    <Layout title="Open Source">
      <Wrapper>
        <Item>
          <Body.Container color="green">
            <Body.Title color="green">
              <Tag tag="h1" />
              <h1>Open Source</h1>
              <Tag tag="h1" />
            </Body.Title>
            <Body.Subtitle>
              <Tag tag="p" />
              <p>Alguns de meus projetos open-source.</p>
              <Tag tag="p" />
            </Body.Subtitle>
          </Body.Container>
        </Item>
        <Item>
          <Card.Container>
            {projects.map((project, key) => (
              <Card.Item key={key}>
                <Card.Header>
                  <Card.Title>{project.name}</Card.Title>
                  <Card.Description>{project.description}</Card.Description>
                  <Card.ButtonStar>
                    8
                    <Icon name="star" type="line" size="xs" />
                  </Card.ButtonStar>
                </Card.Header>
                <Card.Image>
                  <img src={project.picture} alt="Flate" />
                </Card.Image>
              </Card.Item>
            ))}
          </Card.Container>
        </Item>
      </Wrapper>
    </Layout>
  )
}

export default OpenSource
