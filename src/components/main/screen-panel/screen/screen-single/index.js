import React, { useState, useRef } from "react";
import * as Styled from "./styled";
import {
  getData,
  getimageCropParams,
} from "../../../../../redux/selectors/index";
import { connect } from "react-redux";
import {
  SetLeftEdgeValue,
  SetTopEdgeValue,
  setWidthValue,
  setHeightValue,
} from "../../../../../redux/actions/index";
import { resizersItems, X, Y, minimum_size } from "../../../../../constants";
import ElementText from "../../element-text/index";
import ElementLogo from "../../element-logo/index";
import { useEventListener } from "./customHooks";

import { getCurrentComponent } from "../../../../../helperFunctions";

const components = [
  {
    component: <ElementLogo />,
    key: "img",
  },
  {
    component: <ElementText />,
    key: "text",
  },
];

const ScreenSingle = (props) => {
  const element = useRef(null);
  const elementWrapper = useRef(null);
  const elementEdge = useRef(null);
  const {
    data,
    imgParams,
    SetLeftEdgeValue,
    SetTopEdgeValue,
    setWidthValue,
    setHeightValue,
  } = props;

  const [isMouseDownFired, setIsMouseDownFired] = useState(false);
  const [isMouseDownEdgeFired, setIsMouseDownEdgeFired] = useState(false);
  const [offset, setOffset] = useState([]);
  const [currentTopLeftValue, setCurrentTopLeftValue] = useState([]);
  const [mouseCoordinates, setMouseCoordinate] = useState([]);
  const [currentWidthHeightValue, setCurrentWidthHeightValue] = useState([]);

  const onMouseDown = (event) => {
    if (!isMouseDownFired) {
      setIsMouseDownFired(true);
      const el = elementWrapper.current;
      setOffset([
        event.clientX - parseFloat(el.style.left),
        event.clientY - parseFloat(el.style.top),
      ]);
    }
  };

  const onMouseUp = () => {
    if (isMouseDownFired) {
      setIsMouseDownFired(false);
      SetLeftEdgeValue(currentTopLeftValue[X]);
      SetTopEdgeValue(currentTopLeftValue[Y]);
    }
  };

  const onMouseMove = (event) => {
    if (isMouseDownFired) {
      const el = elementWrapper.current;
      el.style.left = event.clientX - offset[X] + "px";
      el.style.top = event.clientY - offset[Y] + "px";
      setCurrentTopLeftValue([el.style.left, el.style.top]);
    }
  };

  const onMouseDownEdge = (e) => {
    if (!isMouseDownEdgeFired) {
      setIsMouseDownEdgeFired(true);
      const resizeValue = e.target.attributes.value.value;
      if (resizeValue !== "bottom-right" || data.type === "text") {
        return setIsMouseDownEdgeFired(false);
      }
      const el = elementWrapper.current;
      setCurrentWidthHeightValue([
        parseFloat(el.style.width),
        parseFloat(el.style.height),
      ]);
      setMouseCoordinate([e.clientX, e.clientY]);
    }
  };

  const onMouseMoveEdge = (e) => {
    if (isMouseDownEdgeFired) {
      const pathY = e.clientY - mouseCoordinates[Y];
      const pathX = e.clientX - mouseCoordinates[X];
      const increase = Math.max(pathX, pathY);
      const height = currentWidthHeightValue[Y] + increase;
      const width = currentWidthHeightValue[X] + increase;
      const el = elementWrapper.current;
      if (width > minimum_size) {
        el.style.height = height + "px";
        el.style.width = width + "px";
      }
    }
  };
  const onMouseUpEdge = () => {
    if (isMouseDownEdgeFired) {
      setIsMouseDownEdgeFired(false);
      const el = elementWrapper.current;
      setHeightValue(el.style.height);
      setWidthValue(el.style.width);
    }
  };

  useEventListener("mousedown", onMouseDown, element);
  useEventListener("mouseup", onMouseUp);
  useEventListener("mousemove", onMouseMove);
  useEventListener("mousedown", onMouseDownEdge, elementEdge);
  useEventListener("mouseup", onMouseUpEdge);
  useEventListener("mousemove", onMouseMoveEdge);

  return (
    <Styled.ScreenSingleWrapper
      type={data.type}
      ref={elementWrapper}
      topValue={imgParams.top}
      leftValue={imgParams.left}
      widhtValue={imgParams.width}
      heightValue={imgParams.height}
    >
      <Styled.ElementWrapper ref={element}>
        <>{getCurrentComponent(data.type, components)}</>
      </Styled.ElementWrapper>
      {resizersItems.map((item, index) => (
        <Styled.Resizer
          type={data.type}
          style={item.style}
          key={index}
          value={item.value}
          ref={elementEdge}
        ></Styled.Resizer>
      ))}
    </Styled.ScreenSingleWrapper>
  );
};

const mapStateToProps = (state) => ({
  data: getData(state),
  imgParams: getimageCropParams(state),
});

const mapDispatchToProps = {
  SetLeftEdgeValue,
  SetTopEdgeValue,
  setWidthValue,
  setHeightValue,
};

export default connect(mapStateToProps, mapDispatchToProps)(ScreenSingle);
