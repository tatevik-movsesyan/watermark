import styled, { css } from "styled-components";

const getStyles = ({ mode, widthValue, heightValue }) => {
  if (mode === "single") {
    return css`
      width: 100%;
      height: 100%;
    `;
  }
  return css`
    width: ${widthValue};
    height: ${heightValue};
  `;
};

// const getOpacity = ({opacityValue})=>{
//   return
// }

export const LogoSingleImg = styled.div.attrs(({ opacityValue }) => ({
  style: {
    opacity: `${opacityValue / 100}`,
  },
}))`
  background-image: url("https://www.flaticon.com/svg/static/icons/svg/3897/3897941.svg");
  background-repeat: no-repeat;
  background-size: contain;
  ${getStyles};
`;
