import styled from 'styled-components'

export const StyledSignUpPage = styled.div`
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500&family=Raleway:ital,wght@0,100;0,200;0,300;1,100;1,200&display=swap');

  /* display: flex;
  height: 100vh;
  align-items: center;
  justify-content: center;
  padding: 40px;
  background-color: #e5e5e5; */

  display: flex;
  height: 100vh;
  align-items: center;
  justify-content: center;
  padding: 40px;
  background-color: #e5e5e5;

  /* .container {
    width: fit-content;
    height: fit-content;
    display: flex;
    padding: 30px;
    border-radius: 6px;
    background-color: #fff;
  } */

  .form-container {
    width: fit-content;
    max-width: 100%;
    height: 100%;
    padding: 20px;
    margin: 0 20px;
  }

  .form .image-container {
    width: 100%;
    max-width: 100%;
    height: 100%;
  }

  .image-container img {
    width: 500px;
    max-width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 6px;
  }

  .form {
    width: 100%;
    height: 80%;
    margin-bottom: 20px;
  }

  .form-group1 {
    margin-top: 10px;
  }

  .form-group1 label {
    text-align: left;
    width: 100%;
    display: block;
    margin-top: 5px;
  }

  .form-group1 .input {
    /* border: 2px solid #eee; */
    border-radius: 8px;
    background-color: #fff;
    position: relative;
    width: fit-content;
    display: flex;
    align-items: center;
    width: 400px;
  }

  .form-group1 input,
  select {
    padding-left: 40px;
    height: 45px;
    width: 100%;
    border-radius: 6px;
    border: 2px solid lightgray;
  }

  .form-group1 .select {
    height: 45px;
    width: 100%;
  }

  .form-group1 .icon {
    position: absolute;
    left: 4px;
    font-size: 24px;
    color: gray;
  }

  button {
    width: 398px;
    height: 45px;
    outline: none;
    border: none;
    margin-top: 10px;
    background-color: #f79009;
    color: #fff;
    border-radius: 6px;
    cursor: pointer;
  }

  .link {
    text-decoration: none;
    color: #f79009;
  }

  .para {
    color: #101828;
    font-family: 'Inter', sans-serif;
    text-align: center;
    /* margin-bottom: 300px; */
  }

  .error {
    margin: 0;
    text-align: center;
  }

  .logo-header {
    display: flex;
    margin-bottom: 40px;
  }

  .logo-header h1 {
    padding-left: 20px;
  }

  label,
  h1,
  h2 {
    color: #012a4a;
    font-family: 'Inter', sans-serif;
  }

  h2 {
    margin-bottom: 20px;
  }

  /* ..............sigup... */

  

  @media only screen and (max-width: 768px) {
    .image-container {
      display: none;
    }
  }
`
