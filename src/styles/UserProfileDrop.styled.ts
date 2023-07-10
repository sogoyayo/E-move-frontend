
import styled from 'styled-components'

export const StyledUserProfileDropdown = styled.div`

  position: absolute;
  top: 100%;
  right: 0;
  width: fit-content;
  height: fit-content;
  background-color: #fff;
  border: 1px solid #eee;
  padding: 10px 0;

h1{
  font-family: 'Inter';
font-style: normal;
font-weight: 600;
font-size: 14px;
line-height: 20px;
color: #101828;
text-align: left;
margin: 5px 20px;
}

p{
    font-family: 'Inter';
font-style: normal;
font-weight: 400;
font-size: 14px;
line-height: 20px;
color: #98A2B3;
margin: 0 20px 10px 20px;
}

.flex{
  display: flex;
  align-items:center ;
  margin: 10px 20px 10px 20px;
  font-family: 'Inter';
font-style: normal;
font-weight: 400;
font-size: 14px;
line-height: 20px;
color: #101828;
cursor: pointer;
}

.icon{
    color: #F79009;
    margin-right: 20px;
    cursor: pointer;
}

  @media screen and (max-width:450px){
   
  }
`

export const StyledUserLogoutConfirm = styled.div`
  
  width: 400px;
  height: fit-content;
  max-width: 100%;
  background-color: #fff;
  position: fixed;
  top: 50%;
  left: 50%;
  padding: 10px 0;
  transform: translate(-50%, -50%);
  border-radius: 6px;
  border: 1px solid #eee;
  z-index: 2000;
  transition: all 0.3s ease-out;

  h1{
    margin: 20px 5px;
    font-family: 'Inter';
font-style: normal;
font-weight: 600;
font-size: 16px;
line-height: 140%;
letter-spacing: 0.15px;
color: #101828;
  }

p{
    margin: 20px 5px;
    font-family: 'Inter';
font-style: normal;
font-weight: 400;
font-size: 14px;
line-height: 20px;
color: #21334F;

}

.flex{
    width: 90%;
    margin-top: 80px;
    display: flex;
    align-items: center;
    justify-content: right;
    margin-right: 40px;
}

button{
  width: 80px;
  max-width: 100%;
  height: 40px;
  outline: none;
  margin-top: 15px;
  color: #fff;
  background-color: #F79009;
  border-radius: 6px;
  border: none;
  cursor: pointer;
  font-family: 'Inter';
font-style: normal;
font-weight: 400;
font-size: 14px;
line-height: 20px;
}

.btn1{
 background: #FCFCFC;
  color: #21334F;
  margin-right: 5px;
}



`