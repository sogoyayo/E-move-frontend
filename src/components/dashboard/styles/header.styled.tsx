import styled from 'styled-components'

export const StyledHeader = styled.header`
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500&family=Raleway:ital,wght@0,100;0,200;0,300;1,100;1,200&display=swap');

  width: 100%;
  max-width: 100%;
  height: 100px;
  display: flex;
  align-items: center;
  position: relative;
  font-family: 'Inter', sans-serif;

  .overlay {
    position: fixed;
    top: 0;
    right: 0;
    width: 100vw;
    max-width: 100%;
    background-color: #000;
    z-index: 1000;
    height: 100vh;
    opacity: 0.3;
  }

  .faintOverlay{
    position: fixed;
    top: 0;
    right: 0;
    width: 100vw;
    max-width: 100%;
    background-color: #000;
    z-index: 1000;
    height: 100vh;
    opacity: 0;
  }

.container{
  width: 95%;
  margin: 0 auto;
  max-width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.right{
  display: flex;
  align-items: center;
}

.right h4{
  font-family: 'Inter';
font-style: normal;
font-weight: 600;
font-size: 16px;
line-height: 140%;
}

  .right {
    display: flex;
    align-items: center;
  }

  .right h4 {
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 140%;
  }

  .right span {
    width: 1px;
    background-color: #7f7d7d;
    height: 30px;
    margin: 0 20px;
  }

  .right button {
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 140%;
    outline: none;
    border: none;
    background-color: transparent;
    cursor: pointer;
  }

  .logo {
    display: flex;
    align-items: center;
    font-size: 32px;
    color: #012a4a;
  }

  .logo img {
    width: 32px;
    height: 32px;
    background-color: #f79009;
    padding: 5px;
    border-radius: 50%;
  }
`
