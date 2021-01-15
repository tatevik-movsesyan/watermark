import React,{useEffect,useRef,useState} from "react";
import * as Styled from "./styled";
import {
  getData,
  getimageCropParams,
} from "../../../../../redux/selectors/index";
import { connect } from "react-redux";
import ElementText from "../../element-text/index";
import ElementLogo from "../../element-logo/index";
import { getCurrentComponent } from "../../../../../helperFunctions";
import {useDivSize} from "../../../../../useDivSize";



const ScreenTiled = (props) => {
  const { data, imgCropParams } = props;
  const elementRef = useRef(null);

  const divSize = useDivSize(elementRef);

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

  

  const getObjCount=()=> 
    Math.floor(divSize.width /(parseFloat(imgCropParams.width)) * Math.ceil(divSize.height /
     parseFloat(imgCropParams.height))
  );

  return (
    <Styled.ScreenTiledWrapper ref={elementRef}>
      {[...Array(getObjCount())].map((el, ind) => (
        <Styled.ElementTiledWrapper paddingValue={data.padding} key={ind}>
          <>{getCurrentComponent(data.type, components)}</>
        </Styled.ElementTiledWrapper>
      ))}
    </Styled.ScreenTiledWrapper>
  );
};

const mapStateToProps = (state) => ({
  data: getData(state),
  imgCropParams: getimageCropParams(state),
});

export default connect(mapStateToProps)(ScreenTiled);
