import React from "react";
import * as Styled from "./styled";
import { connect } from "react-redux";
import { getData } from "../../../../../redux/selectors";
import { setFontName } from "../../../../../redux/actions/index";
import { fontItems } from "../../../../../constants";

 const FontTool=(props)=> {
  const {data, setFontName} = props;

  const handleChange = (e) => {
    setFontName(e);
  };
 
  return (

    <Styled.TextFontWrapper>
      <Styled.TextLabel>Font</Styled.TextLabel>
         <Styled.TextFont>
        <Styled.SelectFont
          font={data.fontPath}
          onChange={(e) => handleChange(e.target.value)}
             
        >
          {fontItems.map((item, index) => (
            <Styled.Option value={item.value} key={index}>
              {item.value}
            </Styled.Option>
          ))}
        </Styled.SelectFont>
       </Styled.TextFont>
    </Styled.TextFontWrapper> 
  );
};

const mapStateToProps = (state) =>({
  data:getData(state)
})

export default connect(mapStateToProps,{setFontName})(FontTool)