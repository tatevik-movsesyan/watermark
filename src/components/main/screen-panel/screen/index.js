import React from "react";
import * as Styled from "./styled";
import { getData } from "../../../../redux/selectors/index";
import { connect } from "react-redux";
import ScreenTiled from "./screen-tiled/index";
import ScreenSingle from "./screen-single/index";
import { getCurrentComponent } from "../../../../helperFunctions";

const Screen = (props) => { 
  const { data } = props;

  const COMPONENTS = [
    {
      component: <ScreenSingle />,
      key: "single",
    },

    {
      component: <ScreenTiled />,
      key: "tiled",
    },
  ];

  return (
    <Styled.ScreenWrapper>
      {getCurrentComponent(data.mode, COMPONENTS)}
    </Styled.ScreenWrapper>
  );
};

const mapStateToProps = (state) => ({
  data: getData(state),
});

export default connect(mapStateToProps)(Screen);
