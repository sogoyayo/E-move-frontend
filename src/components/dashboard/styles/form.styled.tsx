import styled from 'styled-components'

export const StyledDiv = styled.div`
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500&family=Raleway:ital,wght@0,100;0,200;0,300;1,100;1,200&display=swap');
  
  font-family: 'Inter', sans-serif;

  .header {
    text-align: left;
    margin-bottom: 20px;
    padding-left: 20px;
  }

`

export const StyledForm = styled.form`
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500&family=Raleway:ital,wght@0,100;0,200;0,300;1,100;1,200&display=swap');

  font-family: 'Inter', sans-serif;
  color: #012a4a;
  width: 100%;
  max-width: 100%;
  height: fit-content;
  background-color: #fff;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.08);
  padding: 20px;
  height: fit-content;
  border-radius: 6px;

  .field, .ID-field, .pho-field {
    margin-top: 15px;
    padding-top: 5px;
    width: 100%;
    max-width: 100%;
    position: relative;
    height: 70px
  }

  .field1 {
    width: 100%;
    max-width: 100%;
    height: 45px;
    border: 1px solid rgb(109, 108, 108);
    border-radius: 6px;
    display: flex;
    align-items: center;
    margin-top: 20px;
  }

  .inputbox {
    border: 1px solid #eee;
    position: relative;
    height: 45px;
    margin-top: 20px;
  }

  input {
    top: 0;
    left: 0;
    width: 100%;
    border: 1px solid rgb(109, 108, 108);
    max-width: 100%;
    height: 100%;
    border-radius: 6px;
    padding: 0 5px;
    position: absolute;
  }

  select {
    top: 0;
    left: 0;
    width: 100%;
    max-width: 100%;
    height: 100%;
    position: absolute;
  }

  .label {
    /* border: 1px solid red; */
    left: 0px;
    width: 100%;
    position: absolute;
    font-size: 14px;
  }

  .photo {
    width: 100%;
    max-width: 100%;
  }

  .photobox {
    width: fit-content;
    height: fit-content;
    padding: 8px 5px;
    margin: 0 5px;
    border-radius: 3px;
    border: 1px solid rgb(182, 182, 184);
    margin-top: 20px;
    position: relative;
    margin-bottom: 20px;
  }

  select, .btn {
    color: gray;
    border-radius: 6px;
    font-size: 13px;
    /* border: 1px solid red */
  }


  @media screen and (max-width: 765px){

  width: 100%;
  
}
`