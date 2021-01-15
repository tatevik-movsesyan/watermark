import React from "react";
import { connect } from "react-redux";
import { getData } from "../../../../redux/selectors/index";
import  OpacityTool  from "./opacity-tool/index";
import  ModeTool  from "./mode-tool/index";
import  PositionTool  from "./position-tool/index";
import PaddingTool  from "./padding-tool/index";
import { Logo } from "./logo/index";
import  MobileTools  from "../../tools-panel/mobile-tools/index";
import {useWindowSize} from "../../../../useWindowSize";  
import { getCurrentComponent } from "../../../../helperFunctions";
import * as Styled from "./styled";

const LogoTools = (props) => {
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

   const width = useWindowSize();

  return (
    <Styled.LogoEditorWrapper>
      { (width > 769) && 
      <>
      <Logo />
      <OpacityTool />
      <ModeTool />
      {getCurrentComponent(data.mode, COMPONENTS)}
      </>
      }
      { (width < 769) && <MobileTools /> }
      </Styled.LogoEditorWrapper>
  );
};

const mapStateToProps = (state) => ({
  data: getData(state),
});

export default connect(mapStateToProps)(LogoTools);
