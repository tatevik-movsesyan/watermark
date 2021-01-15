import React from "react";
import { connect } from "react-redux";
import { getData } from "../../../../redux/selectors/index";
import * as Styled from "./styled";
import ModeTool from "../logo-tools/mode-tool/index";
import PositionTool from "../logo-tools/position-tool/index";
import PaddingTool from "../logo-tools/padding-tool/index";
import Text from "./text-tool/index";
import SizeColorTool from "./size-color-tool/index";
import FontTool from "./font-tool/index";
import { getCurrentComponent } from "../../../../helperFunctions";

const TextTools = (props) => {
  const { data } = props;

  const COMPONENTS = [
    {
      component: <PositionTool />,
      key: "single",
    },

    {
      component: <PaddingTool />,
      key: "tiled",
    },
  ];

  return (
    <Styled.TextEditorlWrapper>
      <Text />
      <SizeColorTool />
      <FontTool />
      <ModeTool />
      {getCurrentComponent(data.mode, COMPONENTS)}
    </Styled.TextEditorlWrapper>
  );
};

const mapStateToProps = (state) => ({
  data: getData(state),
});

export default connect(mapStateToProps)(TextTools);
