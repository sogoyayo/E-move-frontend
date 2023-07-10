import styled from "styled-components";



export const StyledProfile = styled.div`
    
width: 400px;
max-width: 100%;
height: 400px;
padding: 20px;
background-color: #fff;
border-radius: 6px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.08);
position: fixed;
top: 50%;
left: 50%;
transform: translate(-50%, -50%);
z-index: 2000;



.flex{
    width: 100%;
    max-width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.flex1{
    margin: 20px 0;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}

.flex1 h4{
    margin: 10px 0;
}
.flex1 span{
    display: flex;
    align-items: center;
    cursor: pointer;
}

.flex1 span .edi-icon{
    color: #F79009;
    margin-right: 5px;
}

.flex span{
    width: fit-content;
    height: fit-content;
    padding: 5px;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid #000;
    cursor: pointer;
    border-radius: 50%;
}

img{
    width: 100px;
    height: 100px;
    max-width: 100%;
    object-fit: cover;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.08);
    border-radius: 50%;
}

.flex2 small{
    margin: 0 10px;
    width: 10px;
    height: 2px;
    background-color: #000;
}


.flex2{
    margin-top: 10px;
  display: flex;
  align-items: center;
}

.flex2 h5{
  font-size: 16px;
}



`