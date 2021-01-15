import React,  {useRef,useEffect}from "react";
import { getData, getimageCropParams } from "../../../../redux/selectors/index";
import { connect } from "react-redux";
import * as Styled from "./styled";
import { setWidthValue, setHeightValue } from "../../../../redux/actions/index";

const ElementText = (props) => {
  const { data, imgParams, setWidthValue, setHeightValue } = props;
  const textRef = useRef(null);

  useEffect(
    () => {
      const elementIsRef = textRef.hasOwnProperty("current");
      if (!elementIsRef) return
      setWidthValue(textRef.current.getBoundingClientRect().width);
      setHeightValue(textRef.current.getBoundingClientRect().height);
    },
    [data.fontSize] 
  )


  return (
    <Styled.TextSingle
      fontSizeValue={data.fontSize}
      colorValue={data.color}
      fontValue={data.fontPath} 
      ref = {textRef} 
    >
      {data.value}
    </Styled.TextSingle>
  );
};

const mapStateToProps = (state) => ({
  data: getData(state),
  imgParams: getimageCropParams(state),
});

const mapDispatchToProps = {
  setWidthValue,
  setHeightValue,
};

export default connect(mapStateToProps, mapDispatchToProps)(ElementText);
