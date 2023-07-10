import styled from "styled-components";


export const StyledUserDashboardNavbar = styled.header`
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500&family=Raleway:ital,wght@0,100;0,200;0,300;1,100;1,200&display=swap');

  width: 100%;
  max-width: 100%;
  height: 100px;
  display: flex;
  align-items: center;
  position: sticky;
  top: 0;
  left: 0;
  background: #fff;
  z-index:100;
  font-family: 'Inter', sans-serif;


  .overlay{
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

.right span{
  width: 1px;
  background-color: #7f7d7d;
  height: 30px;
  margin: 0 20px;
}

.right button{
  font-family: 'Inter';
font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 140%;
outline: none;
border: none;
background-color: transparent;
cursor: pointer;
}

.logo{
 display: flex;
 align-items: center;
 font-size: 32px;
 font-family: 'Inter';
font-style: normal;
font-weight: 700;
line-height: 140%;
letter-spacing: 0.25px;
color: #012A4A;
}



.logo img{
   width: 32px;
    height: 32px;
      background-color: #F79009;
      padding: 5px;
      border-radius: 50%;
}

//styles for user dashboard navbar
ul{
  display:flex;
  align-items:center;
  list-style:none;
}

ul li{
  margin: 0 20px;
}

a{
  text-decoration:none;
  font-family: 'Inter';
font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 140%;
display: flex;
align-items: center;
letter-spacing: 0.15px;
color: #101828;
}


.user{
    display: flex;
    align-items:center;
    font-family: 'Inter';
font-style: normal;
font-weight: 600;
font-size: 16px;
text-align: center;
position: relative;
letter-spacing: 0.15px;
color: #012A4A;
}

.user h4{
  margin-right: 10px;
  cursor: pointer;
}



@media screen and (max-width: 765px){
   ul{
    display: none;
   }
}

`