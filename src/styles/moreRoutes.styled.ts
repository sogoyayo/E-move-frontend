import styled from 'styled-components'

export const StyledMoreRoutes = styled.ul`

  width: 100%;
  max-width:100%;
  max-width: 100%;
  background: #fff;
  list-style:none;
  background: #fff;
  padding: 5px;
  height: 400px;
  overflow-y: scroll;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.08);


  li{
    width: 100%;
    max-width:100%;
    text-align:left;
    display: flex;
    align-items: center;
    margin: 10px 0;
    padding: 10px 0 10px 40px;
  }


  li:hover{
    background: #F9FAFB;
  }


  a{
    width: 100%;
    display: block;
    text-decoration:none;
   font-family: 'Inter';
font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 140%;
letter-spacing: 0.15px;
color: #101828;
  }


  .loader{
    width: 100%;
    max-width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .icon{
    color: #F79009;
  }

`
