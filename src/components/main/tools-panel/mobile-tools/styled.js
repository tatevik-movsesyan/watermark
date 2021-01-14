import styled from "styled-components";

export const MobileToolsWrapper = styled.div`
display:flex;
flex-direction: column;
justify-content:center;
align-items:center;
width:100%;
background-color: #FFFFFF;
border-top: 1px solid #DEE3F0;
border-bottom: 1px solid #DEE3F0;

`
 
export const TabWrapper = styled.div`
display:none;

  @media only screen and (max-width: 768px) {
   display:flex;
   flex-direction: row;
   justify-content:center;
   align-items:center;
   width:100%;
  //  background-color: #FFFFFF;
   border-top: 1px solid #DEE3F0;
  //  border-bottom: 1px solid #DEE3F0;


  }
`

export const Tab = styled.div`
padding:11px;
// display:flex;
//    flex-direction: column;
//    justify-content:center;
//    align-items:center;
   border-right: 1px solid #DEE3F0;
   width:33%;
  //  text-align: center;
font: normal normal 500 11px/14px Montserrat;
color: #363F5A;

`
export const TabButton =  styled.div`
 display:flex;
 padding: 14px 0px 5px;
 
 flex-direction: column;
   justify-content:center;
   align-items:center;
   text-align: center;
   &.active {
    background: #EEF5FF;
    border-radius: 5px;
   }
// &:hover {
//   background: #EEF5FF;
//   border-radius: 5px;
// }
`
export const Icon = styled.img`
`

