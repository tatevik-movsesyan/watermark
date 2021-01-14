import React, {useState} from "react";
import * as Styled from "./styled";
import opacity_icon from "../../../../img/opacity.png";
import tiled_icon from "../../../../img/tiled.png";
import position_icon from "../../../../img/position-icon.png";
import OpacityTool from "../../tools-panel/logo-tools/opacity-tool/index";
import {MobileTool} from "./mobile-tool/index";

export const MobileTools = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [toolType, setToolType ] = useState("Opacity");

  const MOBILE_TOOLS = [
    {
      width: "20px",
      src: opacity_icon,
      text: "Opacity",
    },
    {
      width: "20px",
      src: tiled_icon,
      text: "Tiled Mode",
    },
    {
      width: "15px",
      src: position_icon,
      text: "Position",
    },
  ];

  const handleOnClick = (index,item) => {
    setActiveIndex(index); 
    setToolType(item.text);
 };
  return (
    <Styled.MobileToolsWrapper>
    <MobileTool toolType={toolType}/>
    <Styled.TabWrapper>
      {MOBILE_TOOLS.map((item, index) => (
        <Styled.Tab  key={index}>
          <Styled.TabButton  onClick={() => handleOnClick(index,item)}
               className={activeIndex === index ? "active" : ""} >
            <Styled.Icon width={item.width} src={item.src}
              />
            {item.text}
          </Styled.TabButton>
        </Styled.Tab>
      ))}
     
    </Styled.TabWrapper>
    </Styled.MobileToolsWrapper>
  );
};
