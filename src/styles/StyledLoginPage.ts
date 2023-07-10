import styled from 'styled-components'

export const StyledLoginPage = styled.div`
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500&family=Raleway:ital,wght@0,100;0,200;0,300;1,100;1,200&display=swap');

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
    height: 60%;
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
    margin-top: 30px;
    background-color: #f79009;
    color: #fff;
    border-radius: 6px;
    cursor: pointer;
  }

  .link {
    text-decoration: none;
    color: #1570EF;
    font-family: 'Inter', sans-serif;
  }

  .para {
    color: #101828;
    font-family: 'Inter', sans-serif;
    text-align: center;
    margin-top: 40px;
    /* margin-bottom: 300px; */
  }

  .para .link {
    color: #f79009;
  }

  .logo-header {
    display: flex;
    margin-bottom: 60px;
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
    margin-bottom: 40px;
  } 

  /* .........my logi */
   width: 100vw;
  max-width: 100%;
  height: 100vh;
  background-color: rgb(238, 238, 238);
  overflow-y: auto;

  main {
    height: 100%;
    width: 90%;
    max-width: 100%;
    margin: 0px auto;
    display: flex;
    justify-content: space-between;
    padding: 20px 0px;
  }

  .left {
    width: 45%;
    max-width: 100%;
    height: 100%;
  }

  .line {
    margin: 20px 0;
  }

  .logo {
    font-size: 32px;
  }

  form {
    width: 80%;
    margin: 0px auto;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  p {
    margin-top: 15px;
  }

  .field {
    width: 100%;
    height: 45px;
    border-bottom: 2px solid lightgray;
    position: relative;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    margin-top: 20px;
    border-radius: 6px;
  }

  input {
    width: 100%;
    height: 100%;
    outline: none;
    border-radius: 6px;
    border: none;
    padding: 0 0 0 5px;
  }

  .field span {
    position: absolute;
    height: 100%;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    left: 5px;
  }

  .img-box {
    margin-left: 20px;
    height: 100%;
    width: 60%;
    position: relative;
    border-radius: 24px 0px 0px 24px;
  }

  .img-box img {
    width: 100%;
    max-width: 100%;
    object-fit: cover;
    height: 100%;
    border-radius: 24px 0px 0px 24px;
  }

  @media only screen and (max-width: 768px) {
    
    .image-container {
      display: none;
    }


  }
`
