import React, { useState } from "react";
import * as Styled from "./styled";
import { getCurrentComponent } from "../../../../../helperFunctions";
import OpacityTool from "../../logo-tools/opacity-tool/index";
import ModeTool from "../../logo-tools/mode-tool/index";
import PositionTool from "../../logo-tools/position-tool/index";
import Padding from "../../logo-tools/padding-tool/index";

export const MobileTool = ({ toolType }) => {
  const TOOLS = [
    {
      component: <OpacityTool />,
      key: "Opacity",
    },

    {
      component: <ModeTool />,
      key: "Tiled Mode",
    },
    {
      component: <PositionTool />,
      key: "Position",
    },
    {
      component: <Padding />,
      key: "Padding",
    },
  ];

  return (
    <Styled.MobileToolWrap>
      {getCurrentComponent(toolType, TOOLS)}
    </Styled.MobileToolWrap>
  );
};
