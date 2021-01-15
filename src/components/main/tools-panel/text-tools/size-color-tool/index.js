import React from "react";
import * as Styled from "./styled";
import { connect } from "react-redux";
import { getData } from "../../../../../redux/selectors/index";
import {
  setFontSizeValue,
  setColorValue,
} from "../../../../../redux/actions/index";

const SizeColorTool = (props) => {
  const { data, setFontSizeValue, setColorValue } = props;

  const changeSize = (e) => setFontSizeValue(Number(e));
  const changeColor = (e) => setColorValue(e);

  return (
    <Styled.SizeColorWrapper>
      <Styled.SizeLabel>Size</Styled.SizeLabel>
      <Styled.SizeSlider
        type="range"
        value={data.fontSize}
        min="12"
        max="100"
        step="1"
        onChange={(e) => changeSize(e.target.value)}
      ></Styled.SizeSlider>
      <Styled.ColorWrapper>
        <Styled.ColorSwitch
          type="color"
          value={data.color}
          onChange={(e) => changeColor(e.target.value)}
        ></Styled.ColorSwitch>
      </Styled.ColorWrapper>
    </Styled.SizeColorWrapper>
  );
};

const mapStateToProps = (state) => ({
  data: getData(state),
});

const mapDispatchToProps = {
  setFontSizeValue,
  setColorValue,
};

export default connect(mapStateToProps, mapDispatchToProps)(SizeColorTool);
