import styled from 'styled-components'

const Copyright = styled.div`
  position: fixed;
  bottom: 5px;
  left: 50%;
  transform: translateX(-50%);
  font-family: ${p => p.theme.fonts.numans};
  color: ${p => p.theme.colors.light};
  font-size: 0.6rem;

  @media only screen and (min-width: 576px) {
    font-size: 0.8rem;
  }
`

export { Copyright }
