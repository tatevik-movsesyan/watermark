import styled from "styled-components";

export const OpacityWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  border-bottom: 1px solid #dee3f0;
  padding: 5% 0 8%;
  @media only screen and (max-width: 768px) {
  border-bottom: none;
  }
  `;

export const OpacityTitle = styled.div`
  font: normal normal 500 12px/15px Montserrat;
  color: rgba(118, 131, 168, 1);
  @media only screen and (max-width: 768px) {
  display:none;
  }

`;
export const OpacitySlider = styled.input`
  height: 3px;
  margin-top: 14px;
  max-width: 206px;
  width: 100%;
`;
