import styled from "styled-components";



export const StyledGraph = styled.section`
    
  width: 100%;
  max-width: 100%;
  margin: 0 auto;
  background-color: #fff;
  display: flex;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.08);
  height: 800px;

.chart-container {
  width: 95%;
  max-width: 100%;
  margin: 0 auto;
  border-radius: 5px;
  background-color: #fff;
}



.chart-container .topBar{
    width: 100%;
    max-width: 100%;
    margin: 20px 0;
}

.chart-container .topBar h1{
   font-size: 24px;
    width: 100%;
    margin-bottom: 10px;
}



.chart-container .topBar p{
    font-size: 16px;
}


/* Target the chart itself */
.chart-container .google-visualization-columnchart {
    width: 100%;
}


  .chart-container .BarFlex{
    width: 100%;
    margin: 20px 0;
    max-width: 100%;
    display: flex;
  }

  .BarFlex .percbox{
    width: fit-content;
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    justify-content: center;
    height: fit-content;
    padding: 10px 10px;
    border-left: 1px solid #eee;
  }

  .BarFlex .percbox h4{
  margin-bottom: 10px;
  }


  .caret{
    color: #047857;
    margin-left: 30px;
  }


  @media screen and (max-width: 765px){

    .chart-container .topBar h1{
   text-align: center;
}



.chart-container .topBar p{
     text-align: center;

}

 .chart-container{
  width: 100%;
 }

 .chart-container .BarFlex{
    align-items: center;
    justify-content: center;
  }

}




`