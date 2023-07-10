import styled from 'styled-components'

export const StyledModal = styled.div`

  .modalbg {
    width: 100vw;
    top: 0;
    position: absolute;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .modalcard {
    width: 479px;
    height: auto;
    background-color: white;
    border-radius: 24px;
  }

  @media screen and (max-width:450px){
    .modalcard{
        width: 90%;
    }
  }
`