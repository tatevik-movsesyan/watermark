import styled from "styled-components";

export const PanelPositionWrapper = styled.div`
  width: 100%;
  padding: 6% 0 5%;
    display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
 
`;
export const PositionTitle = styled.div`
  font: normal normal 500 12px/15px Montserrat;
  color: rgba(118, 131, 168, 1);
  margin-bottom: 13px;
  @media only screen and (max-width: 768px) {
    display:none;
    }
  
`;
export const PositionDivs = styled.div`
  display: grid;
  grid-gap: 20px;
  grid-template-columns: auto auto auto auto;
`;

const positionsInsideBlock = `
position absolute;
  top: 10.5px;
  left: 10.5px;
  background: #BDCFFB;
  border-radius: 2px;
  display: inline-block;
content: "";
position: absolute
`;

const blockOne = `
 ${positionsInsideBlock};
     width: 25px;
     height: 8px;
`

const blockTwo = `
 ${positionsInsideBlock};
     width: 8px;
     height: 25px;
`


export const PositionTopLeft = styled.div`
  position: relative;
  width: 47px;
  height: 47px;
  background: transparent linear-gradient(180deg, #fefeff 0%, #eff3ff 100%);
  border: 1px solid #d2e0fc;
  border-radius: 10px;
  cursor: pointer;
  &:before {
 ${blockOne};
  }
  &:after {
${blockTwo}
  }
  &.active {
    background: transparent linear-gradient(180deg, #5690ff 0%, #387dff 100%);
    : before {
      ${blockOne};
       background: #ffffff;
       }
    : after {
      ${blockTwo};
       background: #ffffff;
       }   
  }
  &:hover {
    box-shadow: 0px 3px 6px #497EF733;
  }
`;

export const PositionTopRight = styled(PositionTopLeft)`
  transform: rotate(90deg);
`;

export const PositionBottomRight = styled(PositionTopLeft)`
  transform: rotate(180deg);
`;

export const PositionBottomLeft = styled(PositionTopLeft)`
  transform: rotate(-90deg);
`;
