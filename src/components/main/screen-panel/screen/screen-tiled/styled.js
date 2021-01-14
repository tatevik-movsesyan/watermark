import styled from "styled-components";


export const ScreenTiledWrapper = styled.div`
width: 100%;
height:100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
`;

export const ElementTiledWrapper = styled.div`
background-size: contain;
margin: ${(props) => props.paddingValue + "px"};
`


