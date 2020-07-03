import React, { useEffect } from 'react'

import { Wrapper, Item, P } from '../styles'
import { Body, Orb } from './styles'

import { Tag } from 'components'

import Layout from 'layout'

const Skills: React.FC = () => {
  const SKILLS = [
    'ReactJs',
    'NodeJs',
    'HTML5',
    'CSS3',
    'SASS',
    'Postgres',
    'Javascript',
    'Typescript',
    'SQL',
    'Java',
    'Python',
    'AdonisJs',
    'NextJs',
    'MySQL',
    'NestJs',
  ]

  useEffect(() => {
    try {
      window.Orb.Start('orb-canvas', '', {
        textColour: '#ffffff',
        textHeight: 20,
        depth: 1,
      })
    } catch {
      let container = document.getElementById('orb-container')

      if (container) {
        container.style.display = 'none'
      }
    }
  }, [])

  return (
    <Layout title="Skills">
      <Wrapper sm={{ item: 2, order: 1 }} lg={{ item: 2, order: 2 }}>
        <Item>
          <Body.Container>
            <Body.Title>
              <Tag tag="h1" />
              <h1>Skills</h1>
              <Tag tag="h1" />
            </Body.Title>
            <Body.Content>
              <P>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s.
              </P>

              <P>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s.
              </P>
            </Body.Content>
          </Body.Container>
        </Item>
        <Item>
          <Orb id="orb-container">
            <canvas id="orb-canvas" width={500} height={500}>
              <ul>
                {SKILLS.map((skill, key) => (
                  <li key={key}>
                    <a onClick={e => e.preventDefault()}>{skill}</a>
                  </li>
                ))}
              </ul>
            </canvas>
          </Orb>
        </Item>
      </Wrapper>
    </Layout>
  )
}

export default Skills
