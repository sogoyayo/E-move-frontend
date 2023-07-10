import styled from "styled-components";

export const StyledMain = styled.main`
    
  height: 100vh;
  width: 100vw;
  position: fixed;
  top: 0;
  left: 0;


.main-section {
  display: flex;
  width: 100%;
  max-width: 100%;
  height: 100%;
}


.pagination {
  overflow-y: scroll;
  width: 100%;
  max-width: 100%;
  background-color: #E5E5E5;
  padding-top: 50px;
}


@media screen and (max-width: 765px){

  .main-section{
     flex-direction: column;
  }

}

`