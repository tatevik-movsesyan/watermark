import styled from "styled-components";


export const Resizer = styled.div`
  width: 7px;
  height: 7px;
  position: absolute;
  ${(props)=>{if(props.value==="bottom-right"){
    return `cursor: nwse-resize;`
  }}}
  ${(props)=>{if(props.type==="text"){
    return `cursor: auto;`
  }}}
`;

export const ScreenSingleWrapper = styled.div.attrs(
  (props) =>
    props.type === "text" && {
      style: {
        width: "auto",
        height: "auto",
        top: props.topValue,
        left: props.leftValue,
      },
    }
    || 
    {
      style: {
        width: props.widhtValue,
        height: props.heightValue,
        top: props.topValue,
        left: props.leftValue,
      },
    }
)
 ` word-wrap: break-word;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  &:hover {
    box-shadow: 0px 0px 3px #00000033;
    border: 1px solid #5690ff;
    box-sizing: border-box;
    ${Resizer} {
      background: #5690ff 0% 0% no-repeat padding-box;
      border: 1px solid #ffffff;
      opacity: 1;
      border-radius: 50%;
   
  }
`;

export const ElementWrapper = styled.div`
  width: 100%;
  height: 100%;
  cursor: pointer;
`;

