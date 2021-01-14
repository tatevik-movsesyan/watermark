import React from "react";
import { getData,getimageCropParams } from "../../../../redux/selectors/index";
import { connect } from "react-redux";
import * as Styled from "./styled";

const ElementLogo = (props) => {
    const { data,  imgParams} = props;
  return (
    <Styled.LogoSingleImg 
    mode={data.mode}
    widthValue={imgParams.width}
    heightValue={imgParams.height}
    opacityValue={data.opacity}
  ></Styled.LogoSingleImg>
  );
};


const mapStateToProps = (state) => ({
    data: getData(state),
    imgParams: getimageCropParams(state),
  });

 
  export default connect(mapStateToProps)(ElementLogo);