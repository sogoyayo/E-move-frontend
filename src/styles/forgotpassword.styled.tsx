import styled from 'styled-components'

export const StyledForgotPassword = styled.div`
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&family=Raleway:ital,wght@0,100;0,200;0,300;1,100;1,200&display=swap');
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100vw;
  max-width: 100%;
  background-color: #e5e5e5;

  .box {
    width: 400px;
    height: 400px;
    max-width: 100%;
    color: #012a4a;
    font-family: 'Inter', sans-serif;
    background-color: #fff;
    border-radius: 15px;
    padding: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }
  h1 {
    width: 100%;
    max-width: 100%;
    text-align: center;
    margin: 10px 0;
  }

  .field {
    width: 100%;
    display: flex;
    flex-direction: column;
  }

  input {
    height: 43px;
    margin-bottom: 10px;
    border-radius: 6px;
    outline: none;
  }

  button {
    height: 43px;
    border: none;
    outline: none;
    border-radius: 6px;
    background-color: #f79009;
    color: #fff;
  }

  label {
    display: block;
  }

  p {
    width: 100%;
    max-width: 100%;
    text-align: center;
  }

  a {
    text-decoration: none;
    width: 60%;
    max-width: 100%;
    max-width: 100%;
    text-align: center;
    padding: 10px 0;
    border-radius: 6px;
    margin-top: 20px;
    color: #f79009;
  }

  .main-reset {
    width: 100%;
  }
`
