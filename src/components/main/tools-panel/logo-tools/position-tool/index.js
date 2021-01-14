import React,{useState} from "react";
import * as Styled from "./styled";
import { SetTopEdgeValue, SetLeftEdgeValue } from "../../../../../redux/actions/index";
import { connect } from "react-redux";
import { getData } from "../../../../../redux/selectors";
import {increase} from "../../../../../constants";


const PositionTool=(props)=> {
  const [activeIndex, setActiveIndex] = useState(0);

  const {data,SetTopEdgeValue,SetLeftEdgeValue}=props;

  const canvasW=parseFloat(data.canvasWidth)-increase;
  const canvasH=parseFloat(data.canvasHeight)-increase;
  
  const imgW = parseFloat(data.imageCropParams.width);
  const imgH = parseFloat(data.imageCropParams.height);

  const positionButtonsItems = [
    { function: () => {
      SetTopEdgeValue("0px");
      SetLeftEdgeValue("0px");
    },
      style:{
        transform: "rotate(0deg)"
    }},
    { function: () => {
      SetTopEdgeValue("0px");
      SetLeftEdgeValue(`${canvasW - imgW}px`);
    },
      style:{
        transform: "rotate(90deg)"
    }},
    { function: () => {
      SetTopEdgeValue(`${canvasH - imgH}px`);
      SetLeftEdgeValue("0px");
    },
      style:{
        transform: "rotate(-90deg)"
    }},
    { function: () => {
      SetTopEdgeValue(`${canvasH - imgH}px`);
      SetLeftEdgeValue(`${canvasW - imgW}px`);
    },
      style:{
        transform: "rotate(180deg)"
    }}
  ]

  const handleOnClick = (index,item) => {
    setActiveIndex(index); 
    item.function();
 };

  return (
    <Styled.PanelPositionWrapper>
      <Styled.PositionTitle type={data.type}>
        Position
      </Styled.PositionTitle> 
      <Styled.PositionDivs>
      {positionButtonsItems.map((item, index) => (
                <Styled.PositionTopLeft 
                style={item.style}
                onClick={() => handleOnClick(index,item)}
                className={activeIndex === index ? "active" : ""}
                key={index}
                ></Styled.PositionTopLeft>
          ))}
        </Styled.PositionDivs>
    </Styled.PanelPositionWrapper>
  );
};

const mapStateToProps = (state)=>({
  data: getData(state)
});

const mapDispatchToProps = {
  SetTopEdgeValue, 
  SetLeftEdgeValue
}

export default connect(mapStateToProps, mapDispatchToProps )(PositionTool);