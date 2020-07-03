import styled from 'styled-components'
import { Flex } from '@minily/tools'

import { TWrapper, TColor } from './types'

const Wrapper = styled.div<TWrapper>`
  display: grid;
  grid-template-columns: 1fr;

  > {
    ${p => `
      :nth-of-type(${p.sm?.item}) {
        order: ${p.sm?.order};
      }
    `}
  }

  @media only screen and (min-width: 576px) {
    grid-template-columns: 1fr 1fr;
    padding: 0 5%;

    > {
      ${p => `
        :nth-of-type(${p.lg?.item}) {
          order: ${p.lg?.order};
        }
      `}
    }
  }
`

const Item = styled.div`
  margin: 10px 0;
  height: 100%;
  display: flex;
  ${Flex.container('center', 'center')};
`

const P = styled.p`
  margin: 10px 0;
  font-size: 0.9rem;
  text-align: justify;
  text-align-last: left;
  text-indent: 30px;
`
const Body = {
  Container: styled.div<TColor>`
    font-family: ${p => p.theme.fonts.numans};
    color: #ffffff;
    max-width: 600px;

    s {
      color: ${p => p.theme.colors[p.color]};
    }

    @media only screen and (min-width: 576px) {
      h1 {
        font-size: 4rem;
      }

      p {
        font-size: 1.1rem;
      }
    }
  `,

  Title: styled.div<TColor>`
    font-family: ${p => p.theme.fonts.hammer};
    font-size: 2rem;
    color: ${p => p.theme.colors[p.color]};
    white-space: nowrap;
    ${Flex.container('center', 'center')};
  `,

  Subtitle: styled.div`
    font-family: ${p => p.theme.fonts.numans};
    text-align: center;

    text-align-last: center;
    ${Flex.container('center', 'center')};
  `,

  Content: styled.div`
    text-align: left;
    padding: 0 20px;
    ${Flex.container('center', 'center', { direction: 'column' })};
  `,
}

const Brand = styled.img`
  width: 8rem;

  @media only screen and (min-width: 576px) {
    width: 22rem;
  }
`

export { Wrapper, Item, P, Body, Brand }
