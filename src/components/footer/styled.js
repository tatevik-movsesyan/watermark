import styled from "styled-components";

export const FooterWrapper = styled.footer`
width: 100%;
background: rgba(207, 224, 255, 0.23);
display:flex;
justify-content: center;
align-items: center;
border-top: 1px solid #DEE3F0;
padding:36px 0px;


@media only screen and (max-width: 768px) {
    height:12%;
    padding:0px;
    border-radius: 0;
    border: none;
    background: ${({type})=>type===""?
    "rgba(255, 255, 255, 1)":
   "#0052E01A"}
box-shadow: 0px -3px 12px rgba(0, 82, 224, 0.1);
  }

`

export const CancelButton = styled.button`
outline: none;
border:none;
font-size:14px;
// font: 14px Montserrat, sans-serif;
color:rgba(79, 139, 255, 1);
background:transparent;
cursor:pointer;
padding:8px 19px;
&:hover{
    background: rgba(79, 139, 255, 0.1);
border-radius: 17px;
@media only screen and (max-width: 768px) {
    display:none;

    }
}
`

export const DoneButton = styled.button`
margin-left: 48px;
padding:11px 30px;
outline: none;
border:none;
background: transparent linear-gradient(180deg,#5690FF 0%,#387DFF 100%);
box-shadow: 0px 3px 9px #387DFF80;
border-radius: 25px;
opacity: 0.5;
color: white;
font: 14px Montserrat, sans-serif;
text-align:center;
${props => {
    if(props.type!==''){
        return `cursor:pointer;
        opacity: 0.8;
        &:hover{
            opacity:1;
        }`
    }
}};
@media only screen and (max-width: 768px) {
    display:${props => {
        if(props.type===''){
            return `none`
        }
    }};

  }
`
