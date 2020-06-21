import styled from 'styled-components'
import { Utils, Flex } from '@minily/tools'

const Body = {
  Container: styled.div`
    ${Flex.container('center', 'center', { direction: 'column' })};
    margin-bottom: 50px;

    h1,
    p {
      color: ${p => Utils.lightenColor(p.theme.colors.light, -20)};
    }

    @media only screen and (min-width: 576px) {
      h1 {
        font-size: 4rem;
      }

      p {
        font-size: 1.3rem;
      }
    }
  `,

  Title: styled.div`
    font-family: ${p => p.theme.fonts.hammer};
    font-size: 2rem;
    ${Flex.container('center', 'center')};
  `,

  Subtitle: styled.div`
    font-family: ${p => p.theme.fonts.numans};
    ${Flex.container('center', 'center')};
  `,
}

const Brand = styled.img`
  width: 8rem;

  @media only screen and (min-width: 576px) {
    width: auto;
  }
`

export { Body, Brand }
