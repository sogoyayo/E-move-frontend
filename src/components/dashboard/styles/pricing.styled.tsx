import styled from "styled-components";



export const StyledPricing = styled.main`
    
  width: 80%;
  max-width: 100%;
  margin: 0 auto;
  

thead{
  background-color: #eee;
}


.top h1{
color: #101828;
  font-family: 'Inter';
font-style: normal;
font-weight: 700;
font-size: 32px;
line-height: 140%;
  margin-bottom: 20px;
}

.top p{
  font-family: 'Inter';
font-style: normal;
font-weight: 700;
font-size: 16px;
line-height: 140%;
  opacity: 0.8;
}


section{
  margin-top: 30px;
  width: 100%;
  max-width: 100%;
}

table{
  width: 100%;
  background-color: #eee;
  max-width: 100%;
  border-spacing: 0.15px;
    border-collapse: collapse;
}


tbody{
  background-color: #ffffff;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}

tr{
  height: 50px;
}

.tr{
  border-bottom: 1px solid rgb(192, 190, 190);
}


td{
 text-align: center;
 font-size: 16px;
 border: none;
 background-color: #ffffff;
}

.flex{
  display: flex;
  align-items: center;
  justify-content: center;
}

.flex span{
  background-color: #b0cef7;
  color: #1570EF;
  border-radius: 24px;
  padding: 5px;
}

.flex p{
  margin-right: 20px;
}

.edit{
  padding: 6px 8px;
  outline: none;
  border-radius: 3px;
  font-family: 'Inter';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 140%;
  border: 1px solid #b6b5b5;
  cursor: pointer;
}


`