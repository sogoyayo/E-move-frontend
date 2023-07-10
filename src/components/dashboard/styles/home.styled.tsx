
import styled from "styled-components";


export const StyledHome = styled.main`
  width: 80%;
  max-width: 100%;
  height: 800px;
  margin: 0 auto;


  .loader{
    width: 100%;
    max-width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }


  h1{
    font-family: 'Inter';
font-style: normal;
font-weight: 700;
font-size: 32px;
line-height: 140%;
  }

.boxes{
  margin: 20px 0;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 20px;
}

.box{
  width: 100%;
  height: 150px;
  border-radius: 6px;
  background-color: #fff;
  display: flex;
  align-items: center;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.08);
  justify-content: space-between;
  padding: 0 20px;
}

.box .left h3{
  font-size: 40px;
}

.box .left small{
  font-size: 16px;
}


.icon{
  width: fit-content;
  height: fit-content;
  background-color:#f6d9b3;
  padding: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  font-size: 32px;
  color: #F79009;
}


@media screen and (max-width: 765px){

  width: 95%;
  
 .boxes{
  grid-template-columns: 1fr;
 }

}


`