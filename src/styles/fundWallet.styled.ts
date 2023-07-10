import styled from 'styled-components'

export const StyledFundWallet = styled.main`
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500&family=Raleway:ital,wght@0,100;0,200;0,300;1,100;1,200&display=swap');

  width: 100vw;
  padding-top: 40px;
  max-width: 100%;
  background: #e5e5e5;
  font-family: 'Inter', sans-serif;

  .header {
    text-align: left;
    color: #101828;
    margin-left: 80px;
    padding-top: 20px;
  }

  .container {
    width: 100%;
    margin: 0 auto;
    max-width: 100%;
    background: #EAECF0;
    height: 100vh;
  }

  .box {
    margin-left: 80px;
    margin-right: 50px;
    margin-top: 30px;
    padding-top: 30px;
    padding-bottom: 30px;
    background: #e5e5e5;
    display: flex;
    justify-content: space-between;
    padding-left: 30px;
    padding-right: 30px;
    border-radius: 10px;
  }

  .middle {
    display: flex;
    justify-content: space-between;
    margin-top: 30px;
    margin-right: 80px;
    margin-left: 80px;
    font-size: 12px
  }

  .bottom {
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    margin: 0 auto;
    width: fit-content;


  }
  .trans-bottom {
    justify-content: center;
    margin-top: 50px;
    margin-left: 80px;
    margin-right: 50px;
  }

  .right-para {
    color: #98A2B3;
    /* border: 1px solid green; */
    cursor: pointer;
  }

  .top-para {
    margin-top: 20px;
  }

  .bottom-para {
    font-size: 10px;
    color: #98A2B3;
    margin: 20px 0px;
  }

  .box p{
    margin-bottom: 10px
  }

  .balance {
    /* display: flex; */
    align-items: left;
    text-align: left;
    /* flex-direction: column; */
  }

  button {
    border: none;
    background: #FFFAEB;
     outline: none;
     cursor: pointer;
    height: 45px;
    padding: 0 15px;
    border-radius: 24px;
  }

  .left {
    width: 100%;
    height: fit-content;
    background: #fff;
    padding: 40px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
  }

  .left img {
    width: 100%;
    max-width: 100%;
  }

  .more {
    width: fit-content;
    max-width: 100%;
    height: 45px;
    outline: none;
    padding: 0 40px;
    color: #b93815;
    background-color: #fffaeb;
    border-radius: 6px;
    display: flex;
    align-items: center;
    border: none;
    cursor: pointer;
    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 140%;
    margin: 40px 0;
  }

  .right {
    margin: 0 0 0 40px;
    height: fit-content;
    position: relative;
  }

  .right h2 {
    color: #fff;
    position: absolute;
    bottom: 30px;
  }

  .right img {
    width: 400px;
    max-width: 100%;
    height: 60%;
  }

  .backbtn {
    width: fit-content;
    display: flex;
    align-items: center;
  }

  .map {
    margin: 40px 0;
  }

 
  th {
    font-weight: 200;
    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    text-align: left;
  }

  td {
    font-weight: 800;
    font-family: 'Inter';
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    margin: 20px 0;
    text-align: left;
    border: 20px solid transparent;
  }

  

  .bookRouteBtn {
    width: 100%;
    max-width: 100%;
    height: 45px;
    outline: none;
    margin-top: 15px;
    color: #fff;
    background-color: #f79009;
    border-radius: 6px;
    border: none;
    text-decoration: none;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
  }

  @media screen and (max-width: 765px) {
    .right {
      display: none;
    }
  }
`
