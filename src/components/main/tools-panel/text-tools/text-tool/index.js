import React from "react";
import * as Styled from "./styled";
import { connect } from "react-redux";
import { getData } from "../../../../../redux/selectors/index";
import { setText } from "../../../../../redux/actions/index";

const Text = (props) => {
  const { data, setText } = props;
  const textValue = data.value;
  const countOfCharacters = textValue.length;

  const handleChange = (x) => setText(x);

  return (
    <Styled.TextInputWrapper>
      <Styled.Text
        placeholder="MY TEXT"
        maxLength="42"
        onChange={(e) => handleChange(e.target.value)}
      ></Styled.Text>
      <Styled.TextComment>
        {countOfCharacters}/42 characters advised
      </Styled.TextComment>
    </Styled.TextInputWrapper>
  );
};

const mapStateToProps = (state) => ({
  data: getData(state),
});

export default connect(mapStateToProps, { setText })(Text);
