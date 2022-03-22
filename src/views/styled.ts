import styled from 'styled-components'
import { Flex } from '@minily/tools'

import { TWrapper, TColor } from './types'

const Wrapper = styled.div<TWrapper>`
  display: grid;
  grid-template-columns: 1fr;
  padding-bottom: 100px;

  > {
    ${p => `
      :nth-of-type(${p.sm?.item}) {
        order: ${p.sm?.order};
      }
    `}
  }

  @media only screen and (min-width: 1140px) {
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

  @media only screen and (min-width: 1140px) {
    line-height: 1.8;
  }
`
const Body = {
  Container: styled.div<TColor>`
    font-family: ${p => p.theme.fonts.numans};
    color: #ffffff;
    max-width: 600px;

    s {
      color: ${p => p.theme.colors[p.color]};
      font-weight: 600;
    }

    @media only screen and (min-width: 1140px) {
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
    font-size: 1.1rem;
    font-weight: 600;
    ${Flex.container('center', 'center')};

    @media only screen and (min-width: 1140px) {
      p {
        font-size: 1.6rem;
      }
    }
  `,

  Content: styled.div`
    text-align: left;
    padding: 0 3px;
    ${Flex.container('center', 'center', { direction: 'column' })};

    @media only screen and (min-width: 1140px) {
      padding: 0 20px;
    }
  `,
}

const Brand = styled.img`
  border-radius: 10px;
  width: 10rem;

  @media only screen and (min-width: 1140px) {
    width: 25rem;
  }
`

export { Wrapper, Item, P, Body, Brand }
