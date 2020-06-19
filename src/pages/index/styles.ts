import styled from 'styled-components'
import { Row, Col } from '@minily/components'
import { Flex } from '@minily/tools'

const Wrapper = styled(Row)`
  height: 100%;
  transition: 0.3s;

  ${Flex.container('center', 'center', {
    wrap: 'wrap',
    direction: 'column-reverse',
  })};

  @media only screen and (min-width: 769px) {
    ${Flex.container('center', 'center', {
      wrap: 'wrap',
      direction: 'row',
    })};
  }
`

const Child = styled(Col)`
  ${Flex.container('center', 'center', { direction: 'column' })};

  :nth-child(1) {
    justify-content: flex-start;
  }

  :nth-child(2) {
    justify-content: flex-end;
    margin-bottom: 30px;
  }

  @media only screen and (min-width: 769px) {
    justify-content: flex-start;
  }
`

const Brand = styled.img`
  max-width: 9rem;

  @media only screen and (min-width: 576px) {
    max-width: 13rem;
  }

  @media only screen and (min-width: 769px) {
    max-width: 25rem;
  }
`

export { Wrapper, Child, Brand }
