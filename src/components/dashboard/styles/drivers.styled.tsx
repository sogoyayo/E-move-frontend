import styled from "styled-components";



export const StyledDrivers = styled.main`
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500&family=Raleway:ital,wght@0,100;0,200;0,300;1,100;1,200&display=swap');

    
  width: 90%;
  max-width: 100%;
  margin: 0 auto;
  font-family: 'Inter', sans-serif;

.flex {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 20px;
}


h1{
  color: #101828;
  font-size: 32px;
}

.bottom {
  width: 100%;
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 30px;
}

a{
  text-decoration: none;
  color: #F79009;
  margin-right: 40%;
  font-size: 24px;
  font-weight: 500;
  font-style: normal;
}

.img{
  width: fit-content;
  width: 100%;
}

.img h2{
  margin-top: -100px;
  color: #fff;
  text-align: center;
}

img{
  width: 100%;
  max-width: 100%;
  height: 80%;
}

@media screen and (max-width: 765px){

  .img{
    display: none;
  }

  .bottom {
    grid-template-columns: 1fr;
}

  
}


`