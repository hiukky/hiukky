import styled from 'styled-components'
import { Utils, Flex } from '@minily/tools'

const Wrapper = styled.div`
  position: fixed;
  grid-area: 'navgation';
  height: 70px;
  width: 70%;
  background: ${p => Utils.lightenColor(p.theme.colors.dark, 4)};
  z-index: 5;
  border-radius: 30px;
  left: 50%;
  bottom: 10px;
  transform: translate(-50%, -50%);
  padding: 0 30px;
  ${Flex.container('space-between', 'center')}

  @media only screen and (min-width: 568px) {
    height: 80%;
    width: 70px;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    margin: auto;
    margin-left: 20px;
    transform: none;
  }
`

const Button = styled.div`
  height: 60px;
  width: 60px;
  cursor: pointer;
  ${Flex.container('center', 'center')}
  transition: .3s;

  :hover {
    transform: scale(1.2);
  }
`

export { Wrapper, Button }
