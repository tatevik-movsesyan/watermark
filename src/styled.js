import styled from "styled-components";


export const App = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 10px;
  box-shadow: 0px 6px 12px #0052e01a;
  background-color: white;


`;
export const AppWrapper = styled.div`
width: 100%;
height: 100%;
position: fixed;
background:rgba(0,0,0,0.5);
@media only screen and (max-width: 768px) {
  height: 100vh;
  border-radius: 0px;
  box-shadow: none;
  margin-top: 0px;
}

`

export const Modal = styled.div`
max-width: 1007px;
width: 100%;
position:absolute;
top:50%;
left:50%;
transform: translate(-50%,-50%);
@media only screen and (max-width: 768px) {
  height: 100%;
  top:0;
  left:0;
  transform: none;
}

`
