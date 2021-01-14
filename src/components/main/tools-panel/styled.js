import styled from "styled-components";

export const ToolsPanelWrapper = styled.div`
  width: 30%;
  max-width: 290px;
  border-right: 1px solid #dee3f0;

  @media only screen and (max-width: 768px) {
    max-width: none;
    border-right: none;
    padding: 0px;
    background: rgba(238, 245, 255, 1);
    width: 100%;
   height: ${({type})=>type==="" ? "100%" : "auto"};

  }
`;
