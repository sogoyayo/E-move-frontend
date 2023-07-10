import styled from 'styled-components'

export const StyledPayment = styled.main`

  width: 100vw;
  max-width: 100%;
  height: 100%;
  background: #E5E5E5;
  padding: 40px 0;

.container{
  width: 80%;
  margin: 0 auto;
  max-width: 100%;
}

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
font-weight: 500;
font-size: 32px;
line-height: 140%;
letter-spacing: 0.25px;
color: #101828;
margin: 20px 0;
}

img{
    width: 45px;
    height: 35px;
    max-width: 100%;
}

.box{
    width: 400px;
    max-width: 100%;
    border-radius: 24px;
    height: 200px;
    color: #FFFFFF;
    padding: 20px;
    background: #2D3282;
}

.flex{
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 40px;
}


.small-flex{
    margin: 40px 0;
    display: flex;
    align-items: center;
}


table {
  width: 100%;
  background-color: #eee;
  max-width: 100%;
  border-spacing: 0.15px;
  border-collapse: collapse;
}


tbody {
  width: 100%;
  background-color: #ffffff;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}

table th{
  color: #012A4A;
}

tr {
  height: 50px;
}

.tr {
  cursor: pointer;
  border-bottom: 1px solid rgb(192, 190, 190);
}


td {
  text-align: center;
  font-size: 16px;
  border: none;
  background-color: #ffffff;
}


 





@media screen and (max-width: 765px){
  .right{
    display: none;
  }
}
`
