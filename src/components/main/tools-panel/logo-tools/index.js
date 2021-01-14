import React from "react";
import { connect } from "react-redux";
import { getData } from "../../../../redux/selectors/index";
import  OpacityTool  from "./opacity-tool/index";
import  ModeTool  from "./mode-tool/index";
import  PositionTool  from "./position-tool/index";
import PaddingTool  from "./padding-tool/index";
import { Logo } from "./logo/index";
import { MobileTools } from "../../tools-panel/mobile-tools/index";
import {useWindowSize} from "../../../../useWindowSize";  
import * as Styled from "./styled";

const LogoTools = (props) => {
  const { data } = props;

  const windowSize = useWindowSize();

  return (
    <Styled.LogoEditorWrapper>
      { (windowSize.width > 769) && 
      <>
      <Logo />
      <OpacityTool />
      <ModeTool />
      {data.mode === "single" && <PositionTool />}
      {data.mode === "tiled" && <PaddingTool />}
      </>
      }
      { (windowSize.width < 769) && <MobileTools /> }
      </Styled.LogoEditorWrapper>
  );
};

const mapStateToProps = (state) => ({
  data: getData(state),
});

export default connect(mapStateToProps)(LogoTools);
