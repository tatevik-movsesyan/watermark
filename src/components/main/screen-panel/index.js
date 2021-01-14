import React from "react";
import * as Styled from "./styled";
import { getData } from "../../../redux/selectors/index";
import { connect } from "react-redux";
import Screen from "./screen/index";
import screen from "../../../img/screen-background.jpg"


const ScreenPanel = (props) => { 
  const { data} = props;


  return (
    <Styled.CanvasWrapper type={data.type}>
      <Styled.CanvasEditSection>
        <Styled.Img src={screen} alt="screen"></Styled.Img>
        {data.type !== "" && <Screen />}
      </Styled.CanvasEditSection>
    </Styled.CanvasWrapper>
  );
};

const mapStateToProps = (state) => ({
  data: getData(state),
});


export default connect(mapStateToProps)(ScreenPanel);
