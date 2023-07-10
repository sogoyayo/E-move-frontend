import styled from 'styled-components'
export const StyledBookTripSuccess = styled.div`

  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&family=Raleway:ital,wght@0,100;0,200;0,300;1,100;1,200&display=swap');

  display: flex;
  align-items: center;
  justify-content: center;
  height: fit-content;
  width: 400px;
  max-width: 100%;
  background-color: #e5e5e5;
  position: fixed;
  top: 50%;
  border-radius: 24px;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 100;

  .box {
    width: 400px;
    height: fit-content;
    max-width: 100%;
    color: #012a4a;
    font-family: 'Inter', sans-serif;
    background-color: #fff;
    padding: 20px;
    display: flex;
    border-radius: 24px;
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
    width: 100%;
    max-width: 100%;
    max-width: 100%;
    text-align: center;
    padding: 10px 0;
    border-radius: 6px;
    margin-top: 20px;
    color: #fff;
    background-color: #f79009;
  }


  .booktripBtn{
    width: 100%;
    max-width: 100%;
    max-width: 100%;
    text-align: center;
    padding: 10px 0;
    border-radius: 6px;
    margin-top: 20px;
    color: #000;
    background-color: #EAECF0;
    cursor: pointer;
  }



  img{
    width: 45px;
    max-width: 100%;
    height: 45px;
  }

`
