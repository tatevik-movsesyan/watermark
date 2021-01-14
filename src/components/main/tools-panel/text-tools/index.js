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

 const TextTools=(props)=> {
  const { data } = props;


  return (
    <Styled.TextEditorlWrapper>
      <Text />
      <SizeColorTool />
      <FontTool />
      <ModeTool />
      {data.mode === "single" && <PositionTool />}
      {data.mode === "tiled" && <PaddingTool />}
    </Styled.TextEditorlWrapper>
  );
};

const mapStateToProps = (state) => ({
  data: getData(state),
});

export default connect(mapStateToProps)(TextTools);