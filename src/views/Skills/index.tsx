import React from 'react'
import dynamic from 'next/dynamic'

import { Wrapper, Item, P, Body } from '../styles'

import { Tag } from 'components'

import Layout from 'layout'

const Orb = dynamic(() => import('components/Orb'))

const Skills: React.FC = () => {
  const SKILLS = [
    'SQL',
    'Javascript',
    'CSS3',
    'PostgreSQL',
    'MongoDB',
    'HTML5',
    'NodeJs',
    'Typescript',
    'ReactJs',
    'SASS',
    'Java',
    'Python',
    'JSON',
    'AdonisJs',
    'NestJs',
    'NextJs',
    'MySQL',
  ]

  return (
    <Layout title="Skills">
      <Wrapper sm={{ item: 1, order: 2 }} lg={{ item: 2, order: 2 }}>
        <Item>
          <Orb data={SKILLS} />
        </Item>
        <Item>
          <Body.Container color="pink">
            <Body.Title color="pink">
              <Tag tag="h1" />
              <h1>Skills</h1>
              <Tag tag="h1" />
            </Body.Title>
            <Body.Content>
              <P>
                Nesses 3 anos de caminhada como desenvolvedor e com minha
                curiosidade para desvendar as coisas, eu pude adiquir bastante
                experiência em diversas tecnologias seja no mundo <s>Android</s>
                , <s>Linux</s> ou <s>Web</s>.
              </P>

              <P>
                Atualmente a maior parte do tempo estou trabalhando com
                <s> Nodejs</s> e <s>Typescript</s>, com alguns frameworks como
                <s> ReactJs</s> e <s>AdonisJs</s>.
              </P>
            </Body.Content>
          </Body.Container>
        </Item>
      </Wrapper>
    </Layout>
  )
}

export default Skills
