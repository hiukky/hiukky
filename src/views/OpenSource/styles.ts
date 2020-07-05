import styled from 'styled-components'
import { Flex, Utils } from '@minily/tools'

const Card = {
  Container: styled.div`
    overflow: auto;
    width: 100%;
    margin-top: 20px;
    ${Flex.container('flex-start', 'center', { direction: 'column' })};
    overflow: auto;
    font-family: ${p => p.theme.fonts.numans};
    color: ${p => p.theme.colors.light};

    ::-webkit-scrollbar {
      width: 0;
    }

    @media only screen and (min-width: 1140px) {
      position: absolute;
      height: 95vh;
      width: 50%;
      margin: 0;
    }
  `,

  Item: styled.div`
    position: relative;
    flex: 0 0 300px;
    width: 100%;
    max-width: 700px;
    background: ${p => Utils.lightenColor(p.theme.colors.dark, 1)};
    margin-bottom: 40px;
    border-radius: 20px;
    overflow: hidden;
    padding: 10px;
  `,

  Header: styled.div`
    height: 80px;
    display: grid;
    align-items: center;
    grid-template-rows: 40px 40px;
    padding: 0 10px;

    @media only screen and (min-width: 1140px) {
      h2 {
        font-size: 1.9rem;
      }

      span {
        font-size: 1rem;
      }
    }
  `,

  Title: styled.h2`
    font-size: 1.4rem;
    color: ${p => p.theme.colors.green};
  `,

  Description: styled.span`
    font-size: 0.9rem;
    text-align: justify;
    text-align-last: left;
  `,

  ButtonStar: styled.div`
    position: absolute;
    width: 50px;
    padding: 1px 10px;
    ${Flex.container('space-between', 'center')};
    border-radius: 30px;
    right: 18px;
    top: 15px;
    cursor: pointer;
    user-select: none;
    transition: 0.3s;
    background: ${p => p.theme.colors.dark};
    font-size: 0.9rem;

    :hover {
      background: ${p => Utils.lightenColor(p.theme.colors.dark, 3)};
    }

    i {
      color: ${p => p.theme.colors.green};
    }
  `,

  Image: styled.a`
    height: 200px;
    ${Flex.container('center', 'center')};
    cursor: pointer;

    img {
      max-width: 100%;
      height: 200px;
    }
  `,
}

export { Card }
