import styled from "styled-components";

export const CanvasWrapper = styled.div`
width: 70%;
padding: 2% 3%;
margin: auto;
@media only screen and (max-width: 768px) {
    width: 100%;
    padding: 0;
    margin: auto;
  }

`
export const CanvasEditSection = styled.div`
position: relative;
padding-top: 56.25%;
width: 100%;
background-color: #CFE0FF;
border-radius: 10px;
overflow: hidden;
@media only screen and (max-width: 768px) {
    border-radius: 0px;

  }
}
`
export const Img = styled.img`
position: absolute;
width: 100%;
height: 100%;
top: 0;
left: 0;
`

