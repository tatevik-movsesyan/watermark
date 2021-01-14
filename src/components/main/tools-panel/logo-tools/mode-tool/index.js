import React from "react";
import { connect } from "react-redux";
import { getData } from "../../../../../redux/selectors/index";
import * as Styled from "./styled";
import { toggleMode } from "../../../../../redux/actions/index";

const ModeTool = (props) => {
  const { data, toggleMode } = props;

  const switchMode = (checked) => {
    if (checked) {
      toggleMode("tiled");
    } else {
      toggleMode("single");
    }
  };

  return (
    <Styled.TiledModeWrapper type={data.type}>
      <Styled.TiledModeTitle>Tiled mode</Styled.TiledModeTitle>
      <Styled.CheckBoxWrapper mode={data.mode}>
        <Styled.CheckBox
          id="checkbox"
          type="checkbox"
          onChange={(e) => switchMode(e.target.checked)}
        />
        <Styled.CheckBoxLabel htmlFor="checkbox" />
      </Styled.CheckBoxWrapper>
    </Styled.TiledModeWrapper>
  );
};
const mapStateToProps = (state) => ({
  data: getData(state),
});

export default connect(mapStateToProps, { toggleMode })(ModeTool);
