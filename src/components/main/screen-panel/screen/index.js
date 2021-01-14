import React from "react";
import * as Styled from "./styled";
import { getData } from "../../../../redux/selectors/index";
import { connect } from "react-redux";
import ScreenTiled from "./screen-tiled/index";
import ScreenSingle from "./screen-single/index";

const Screen = (props) => {
  const { data } = props;

  return (
    <Styled.ScreenWrapper>
      {data.mode === "single" && <ScreenSingle />}
      {data.mode === "tiled" && <ScreenTiled />}
    </Styled.ScreenWrapper>
  );
};

const mapStateToProps = (state) => ({
  data: getData(state),
});

export default connect(mapStateToProps)(Screen);
