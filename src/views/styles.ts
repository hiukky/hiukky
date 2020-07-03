import styled from 'styled-components'
import { Container } from '@minily/components'
import { Flex } from '@minily/tools'

import { TWrapper } from './types'

const Wrapper = styled(Container)<TWrapper>`
  ${p => Flex.container('center', 'center', { direction: 'column' })};

  > {
    ${p => `
    :nth-of-type(${p.sm?.item}) {
      order: ${p.sm?.order};

    }
  `}
  }

  @media only screen and (min-width: 576px) {
    ${p => Flex.container('space-between', 'center', { direction: 'row' })};

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

export { Wrapper, Item, P }
