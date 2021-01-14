import styled from "styled-components";


export const TextSingle = styled.div.attrs(({fontSizeValue,colorValue}) => ({
  style: {
    fontSize: fontSizeValue + "px",
    color: colorValue,
},
}))`  font-family: "${({fontValue}) =>fontValue}";
`
