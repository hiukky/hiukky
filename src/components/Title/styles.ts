import styled from 'styled-components'
import { Utils, Flex } from '@minily/tools'

const Wrapper = styled.div`
  display: flex;
  ${Flex.container('center', 'center')}

  h1, p {
    color: ${p => Utils.lightenColor(p.theme.colors.light, -20)};
  }

  @media only screen and (min-width: 321px) {
    h1 {
      font-size: 250%;
    }
  }

  @media only screen and (min-width: 576px) {
    h1 {
      font-size: 350%;
    }

    p {
      font-size: 150%;
    }
  }
`

const H1 = styled.h1`
  font-family: ${p => p.theme.fonts.hammer};
  font-size: 2rem;
`

const P = styled.p`
  font-family: ${p => p.theme.fonts.numans};
  font-size: 1rem;
`

export { Wrapper, H1, P }
