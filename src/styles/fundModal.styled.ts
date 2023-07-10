import styled from 'styled-components'
export const StyledFundModal = styled.div`
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&family=Raleway:ital,wght@0,100;0,200;0,300;1,100;1,200&display=swap');

   

   .modal {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    padding: 30px;
    width: 480px;
    max-width: 100%;
    background-color:#fff;
    z-index: 300;
    border-radius: 6px;
  }



.close{
  width: 100%;
  max-width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
}

h2{
  margin-bottom: 5px;
}

.form-group1{
  margin-top: 20px;
}

  input{
    margin: 5px 0;
    width: 100%;
    max-width: 100%;
    height: 45px;
    padding: 0 0 0 10px;
    outline: none;
    border-radius: 6px;
  }

  button{
    width: 100%;
    max-width: 100%;
    height: 45px;
    margin: 5px 0;
    border-radius: 6px;
    background-color: #F79009;
    border: none;
    outline: none;
    color: #fff;
    cursor: pointer;
  }

 
`
