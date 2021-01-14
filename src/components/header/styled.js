import styled from "styled-components";

const FLEX_CENTER = `display: flex;
justify-content: center;
align-items: center;`

export const HeaderWrapper = styled.header`
  width: 100%;
  ${FLEX_CENTER}
  background-color: rgba(207, 224, 255, 0.23);
  border-radius: 9px 9px 0px 0px;
  border-bottom: 1px solid #dee3f0;
  padding-top: 23px;
  padding-bottom: 14px;

  @media only screen and (max-width: 768px) {
    height: 8%;
    padding: 0px;
    border-radius: 0;
    background: rgba(255, 255, 255, 1);
    box-shadow: 0px 6px 12px #0052e01a;
    border: none;
  }
  
`;

export const Title = styled.h1`
  text-align: center;
  color: #252e48;
  font-weight: 600;
  font-size: 20px;
`;
