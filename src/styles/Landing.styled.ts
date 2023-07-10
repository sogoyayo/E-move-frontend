import styled from 'styled-components'

export const StyledLandingPage = styled.div`
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&family=Raleway:ital,wght@0,100;0,200;0,300;1,100;1,200&display=swap');

  width: 100vw;
  max-width: 100%;

  header {
    width: 100%;
    max-width: 100%;
    padding: 20px 0;
    background: #ffffff;
    position:sticky ;
    top: 0;
    left:0 ;
    z-index: 100;
  }

  .top-container {
    width: 90%;
    margin: 0 auto;
    max-width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  header .logo {
    display: flex;
    align-items: center;
    font-size: 32px;
    color: #012a4a;
  }

  header .logo img {
    width: 32px;
    height: 32px;
    background-color: #f79009;
    padding: 5px;
    border-radius: 50%;
  }

  header ul {
    display: flex;
    align-items: center;
    list-style: none;
  }

  header ul li {
    margin-left: 20px;
  }

  header ul li a {
    text-decoration: none;
    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 140%;
    color: #101828;
  }

  header .get-started{
  width: 120px;
  height: 40px;
  display: flex;
  align-items:center ;
  justify-content: center;
  color: #fff;
  background-color: #F79009;
  border-radius: 6px;
  }

  header .get-started > a{
    color: #fff;
  }
  /* .................Hero Styles........................... */

  section {
    width: 100%;
    max-width: 100%;
    height: 100%;
    background: #e5e5e5;
    padding: 20px 0;
  }

  .hero-container {
    height: 100%;
    width: 90%;
    max-width: 100%;
    margin: 0px auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 20px 0px;
  }

  .left {
    width: fit-content;
    max-width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }

  .left h1 {
    font-family: 'Inter';
    font-style: normal;
    font-weight: 700;
    font-size: 40px;
    line-height: 140%;
    letter-spacing: 0.25px;
    color: #000000;
  }

  .left p {
    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    font-size: 24px;
    line-height: 140%;
    color: #667085;
    margin: 10px 0;
    text-align: left;
  }

  .left .caret {
    font-size: 24px;
    color: #f79009;
  }

  .left span {
    margin: 10px 0;
    width: fit-content;
    padding: 10px 20px;
    background: #f2f4f7;
    color: #000000;
    border-radius: 24px;
  }

  .left ul {
    list-style: none;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }

  .left ul li {
    margin: 10px 0;
    display: flex;
    align-items: center;
  }

  .img-box {
    margin-left: 20px;
    height: 80%;
    width: 50%;
    position: relative;
  }

  .img-box img {
    width: 100%;
    max-width: 100%;
    height: 100%;
  }

  footer {
    background: #f2f4f7;
    width: 100%;
    max-width: 100%;
    padding: 60px 0;
  }

  .ft-container {
    width: 90%;
    margin: 0 auto;
    max-width: 100%;
  }

  footer .top{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

   footer .top .logo {
    display: flex;
    align-items: center;
    font-size: 16px;
    color: #012a4a;
  }

  footer .top .logo img {
    width: 20px;
    height: 20px;
    background-color: #f79009;
    padding: 5px;
    border-radius: 50%;
  }

  footer .top ul{
    display: flex;
    align-items: center;
    list-style: none;
  }

  footer ul li{
    margin:10px 20px ;
  }

  footer ul a{
    text-decoration: none;
    font-family: 'Mulish';
font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 20px;
color: #000000;
  }


  footer .bottom{
    margin-top: 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .social-icons span{
    margin:10px 10px ;
    width: fit-content;
    height: fit-content;
    background: #eee;
    padding: 5px;
    border-radius: 50%;
  }

  @media screen and (max-width: 765px){
   .hero-container {
     flex-direction: column-reverse;
     align-items: center;
     justify-content: center;
  }

   .img-box {
    width: 100%;
    height: 50%;
    margin-left:0 ;
  }

   .left {
    width: 100%;
    margin-top: 20px;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
  }

   footer .bottom{
    flex-direction: column-reverse;
    align-items: center;
    justify-content: center;
  }


  }
`
