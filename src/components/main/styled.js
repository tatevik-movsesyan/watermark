import styled from "styled-components";

export const MainWrapper = styled.div`
width:100%;
height:100%;
display:flex;
flex-direction:row;
@media only screen and (max-width: 768px) {
    height:80%;
    flex-direction: column-reverse;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`



