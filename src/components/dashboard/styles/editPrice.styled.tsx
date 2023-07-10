import styled from "styled-components";



export const StyledEditPrice = styled.form`
    
  width: 300px;
  max-width: 100%;
  height: fit-content;
  background-color: #fff;
  padding: 20px;
  height: fit-content;
position: fixed;
top: 50%;
left: 50%;
transform: translate(-50%, -50%);
z-index: 2000;




.field {
  margin-top: 15px;
  width: 100%;
  max-width: 100%;
}

.inputbox {
  border: 1px solid #eee;
  position: relative;
  height: 45px;
  margin-top: 8px;
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

.newPriceModal{
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.newPriceModal .close{
  cursor: pointer;
}


`