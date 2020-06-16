import styled from 'styled-components'
import { Utils, Flex } from '@minily/tools'

const Wrapper = styled.div`
  display: flex;
  ${Flex.container('center', 'center')}

  h1, p {
    color: ${p => Utils.lightenColor(p.theme.colors.light, -20)};
  }
`

const H1 = styled.h1`
  font-family: ${p => p.theme.fonts.hammer};
  font-size: 2.5rem;
  margin: 0px 20px;

  @media only screen and (min-width: 568px) {
    font-size: 350%;
  }
`

const P = styled.p`
  font-family: ${p => p.theme.fonts.numans};
  font-size: 1.1rem;
  margin: 0px 10px;

  @media only screen and (min-width: 568px) {
    font-size: 150%;
  }
`

export { Wrapper, H1, P }
