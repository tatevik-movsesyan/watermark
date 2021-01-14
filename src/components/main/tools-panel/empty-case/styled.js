import styled from "styled-components";

export const EditorWrapper = styled.div`
width: 100%;
height: 100%;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;

`;
export const EditorLogoButton = styled.button`
   white-space: nowrap;
  outline: none;
  border: none;
  background-color: rgba(56, 125, 255, 0.8);
  box-shadow: 0px 3px 9px #387dff80;
  border-radius: 25px;
  cursor: pointer;
  padding: 11px 18px 11px 22px;
  font: 500 14px/18px Montserrat;
  color: #ffffff;
  &:hover {
    background-color: rgba(56, 125, 255, 1);
  }
`;

export const Icon = styled.img`
  width: 14px;
  height: 14px;
  padding-right: 12px;
  margin: -2px;
`;

export const TextEditorWrapper = styled.button`
  outline: none;
  border: none;
  white-space: nowrap;
  background: rgba(79, 139, 255, 0.1) ;
  color: rgba(79, 139, 255, 1);
  border-radius: 5px;
  cursor: pointer;
  font-weight: bold;
  font-size: 14px;
  padding: 8px 19px;
  &:hover {
    background: rgba(79, 139, 255, 1) ;
    color:rgba(255, 255, 255, 1);
  }
`;

export const Block = styled.div`
  text-align: center;
  margin:27px 0px 21px 0px;

`;

const posAbsolutBlock =  `display: inline-block;
width: 80px;
height: 1px;
top: 50%;
content: "";
position: absolute;`

export const BlockName = styled.span`
  position: relative;
  text-align: center;
  font: bold 14px Montserrat;
  padding: 0px 1px;
  color: rgba(84, 95, 126, 1);
  &:before {
    ${posAbsolutBlock};
    background: transparent
      linear-gradient(
        270deg,
        rgba(193, 201, 224, 1) 0%,
        rgba(193, 201, 224, 0) 100%
      );
    right: 24px;
    
  }
  &:after {
    ${posAbsolutBlock};
    background: transparent
      linear-gradient(
        90deg,
        rgba(193, 201, 224, 1) 0%,
        rgba(193, 201, 224, 0) 100%
      );
    left: 24px;
  }
`;
