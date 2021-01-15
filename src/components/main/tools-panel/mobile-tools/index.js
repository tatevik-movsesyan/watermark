import React, {useState} from "react";
import * as Styled from "./styled";
import opacity_icon from "../../../../img/opacity.png";
import tiled_icon from "../../../../img/tiled.png";
import position_icon from "../../../../img/position-icon.png";
import padding_icon from "../../../../img/padding-icon.png";
import {MobileTool} from "./mobile-tool/index";
import { connect } from "react-redux";
import { getData } from "../../../../redux/selectors/index";

 const MobileTools = (props) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [toolType, setToolType ] = useState("Opacity");

  const {data}=props;

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
    {
      width: "20px",
      src: padding_icon,
      text: "Padding",
    },
  ];

  const getMobileTools=()=>{
    return (data.mode === "tiled")?
    MOBILE_TOOLS.filter((item)=>item.text !== "Position")
    :MOBILE_TOOLS.filter((item)=>item.text !== "Padding")
  } 

  const handleOnClick = (index,item) => { 
    setActiveIndex(index); 
    setToolType(item.text);
 };
  return (
    <Styled.MobileToolsWrapper>
    <MobileTool toolType={toolType}/>
    <Styled.TabWrapper>
      {getMobileTools().map((item, index) => (
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

const mapStateToProps = (state)=>({
  data: getData(state)
});

export default connect(mapStateToProps)(MobileTools);
