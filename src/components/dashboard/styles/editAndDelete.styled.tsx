import styled from "styled-components";

export const StyledEditAndDeleteModal = styled.div`
  
   width:fit-content;
   height: fit-content;
   z-index: 2000;
   background-color: #fff;
   position: absolute;
   padding: 0 10px;
   top: 20%;
   bottom: 0px;
   box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.08);
   right: 0px;
   border-radius: 6px;

   ul{
    list-style-type: none;
   }

   ul li{
    margin-top: 10px;
    text-align: center;
    width: 100%;
    max-width: 100%;
    cursor: pointer;
    padding: 0.6rem 0.6rem;
    color: #000;
   }

   .m-icon{
    color: #F79009;
    margin-right: 8px;
   }

   


  
`