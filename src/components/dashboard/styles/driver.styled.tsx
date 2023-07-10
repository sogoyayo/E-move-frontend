import styled from "styled-components";



export const StyledDriver = styled.main`
    
  width: 80%;
  max-width: 100%;
  margin: 0 auto;
  position: relative;

section {
  margin-top: 30px;
  width: 100%;
  max-width: 100%;
}


thead {
  background-color: #eee;
}


.top h1 {
  color: #101828;
  font-size: 32px;
  margin-bottom: 20px;
}

.top p {
  font-size: 16px;
  opacity: 0.8;
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
  position: relative;
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

/* .flex {
  display: flex;
  align-items: center;
  justify-content: center;
}

.flex span {
  background-color: #b0cef7;
  color: #1570EF;
  border-radius: 24px;
  padding: 5px;
}

.flex p {
  margin-right: 20px;
} */


img{
    width: 25px;
    height: 25px;
    max-width: 100%;
    cursor: pointer;
    object-fit: cover;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.08);
    border-radius: 50%;
}

`