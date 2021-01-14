import React from "react";
import * as Styled from "./styled";
import { connect } from "react-redux";
import { setPaddingValue } from "../../../../../redux/actions/index";
import { getData } from "../../../../../redux/selectors";

const PaddingTool=(props)=> {
  const {data,setPaddingValue}=props;

  const handleChange = (e) => setPaddingValue(Number(e));
  return (
    <Styled.PaddingWrapper type={data.type}>
      <Styled.PaddingTitle>Padding</Styled.PaddingTitle>
      <Styled.PaddingSlider
        type="range"
        value={data.padding}
        min="0"
        max="100"
        step="1"
        onChange={(e) => handleChange(e.target.value)}
      ></Styled.PaddingSlider>
    </Styled.PaddingWrapper>
  );
};

const mapStateToProps = (state)=>({
  data: getData(state)
}) 
export default connect(mapStateToProps, { setPaddingValue })(PaddingTool);
