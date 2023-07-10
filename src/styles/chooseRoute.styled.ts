import styled from 'styled-components'

export const StyledChooseRoute = styled.main`
  width: 100vw;
  padding-top: 40px;
  max-width: 100%;
  background: #e5e5e5;
  position: relative;

  h1 {
    text-align: left;
    color: #101828;
  }

  .container {
    width: 95%;
    margin: 0 auto;
    max-width: 100%;
  }

  section {
    display: flex;
    justify-content: space-between;
    padding-top: 40px;
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
    height: 100%;
    position: relative;
  }

  .right h2 {
    width: 100%;
    max-width: 100%;
    text-align: center;
    color: #fff;
    position: absolute;
    bottom: 30px;
  }

  .right img {
    width: 400px;
    max-width: 100%;
    height: 40%;
  }

  .backbtn {
    width: fit-content;
    display: flex;
    align-items: center;
  }

  .map {
    margin: 40px 0;
  }

  table {
    background: #f9fafb;
    padding: 40px 0;
  }

  th {
    font-weight: 200;
    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    text-align: left;
    color: #475467;
    padding: 20px 0;
  }

  td {
   font-family: 'Inter';
font-style: normal;
font-weight: 700;
font-size: 24px;
line-height: 140%;
    margin: 20px 0;
    text-align: left;
    color: #101828;
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

  .gBtn{
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

    td {
    font-size: 18px;
  }
  }
`
