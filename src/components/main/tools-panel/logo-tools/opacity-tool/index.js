import React from "react";
import * as Styled from "./styled";
import { setOpacityValue } from "../../../../../redux/actions/index";
import { connect } from "react-redux";
import { getData } from "../../../../../redux/selectors/index";

const OpacityTool = (props) => {
  const { data, setOpacityValue } = props;
  const handleChange = (e) => setOpacityValue(Number(e));

  return ( 
    <Styled.OpacityWrapper>
      <Styled.OpacityTitle>Opacity</Styled.OpacityTitle>
      <Styled.OpacitySlider
        type="range"
        value={data.opacity}
        min="0"
        max="100"
        step="1"
        onChange={(e) => handleChange(e.target.value)}
      ></Styled.OpacitySlider>
    </Styled.OpacityWrapper>
  );
};

const mapStateToProps = (state) => ({
  data: getData(state),
});

export default connect(mapStateToProps, { setOpacityValue })(OpacityTool);
