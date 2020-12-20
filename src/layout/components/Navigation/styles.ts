import styled from 'styled-components'
import { Utils, Flex } from '@minily/tools'

const Wrapper = styled.div`
  position: fixed;
  grid-area: 'navgation';
  height: 70px;
  max-width: 330px;
  background: ${p => Utils.lightenColor(p.theme.colors.dark, 2)};
  opacity: 0.8;
  z-index: 5;
  border-radius: 30px;
  left: 50%;
  bottom: -10px;
  transform: translate(-50%, -50%);
  padding: 0 10px;
  ${Flex.container('space-between', 'center')}
  transition: .1s;

  @media only screen and (min-width: 1140px) {
    height: 40%;
    width: 70px;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    margin: auto;
    padding: 20px 0;
    margin-left: 20px;
    transform: none;
    flex-direction: column;
  }
`

const Button = styled.div`
  height: 60px;
  width: 60px;
  cursor: pointer;
  ${Flex.container('center', 'center')}

  > div {
    transition: 0.3s;

    :hover {
      transform: scale(1.3);
    }
  }
`

export { Wrapper, Button }
