import styled from 'styled-components'

export const StyledSidebar = styled.nav`
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500&family=Raleway:ital,wght@0,100;0,200;0,300;1,100;1,200&display=swap');

  width: 300px;
  height: 100%;
  max-width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 50px;
  font-family: 'Inter', sans-serif;

  h5 {
    opacity: 0.5;
  }

  a {
    color: #000;
    text-decoration: none;
    width: 100%;
    height: 100%;
    padding: 10px 20px;
    border-radius: 8px;
    align-items: center;
    display: flex;
    align-items: center;
  }

  .active {
    color: #fff;
    background-color: #f79009;
  }

  .active .sideIcon {
    color: #fff;
  }

  .deActive .sideIcon {
    color: #f79009;
  }

  ul {
    list-style: none;
  }

  ul li {
    margin-top: 40px;
    align-items: center;
    display: flex;
    align-items: center;
  }

  ul li span {
    margin-left: 10px;
  }

  @media screen and (max-width: 765px) {
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    max-width: 100%;
    height: fit-content;
    align-items: center;
    justify-content: space-between;
    padding: 20px;
    background-color: #fff;
    z-index: 5000;

    h5 {
      display: none;
    }

    ul {
      width: 100%;
      height: fit-content;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    ul li {
      margin-top: 5px;
    }

    ul li span {
      display: none;
    }
  }
`
