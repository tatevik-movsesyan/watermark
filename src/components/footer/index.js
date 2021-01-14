import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import * as Styled from "./styled";
import { backToStartPage } from "../../redux/actions/index";
import { getData } from "../../redux/selectors/index";

const Footer = React.memo((props) => {
  const { data, backToStartPage } = props;
  const [disable, isDisable] = useState(true);

  const isButtonDisable = () => (data.type === "" ? true : false);

  useEffect(() => {
    isDisable(isButtonDisable());
  }, [data.type]);

  return (
    <Styled.FooterWrapper type={data.type}>
      <Styled.CancelButton onClick={backToStartPage}>
        Cancel
      </Styled.CancelButton>
      <Styled.DoneButton
        onClick={() => console.log(data)}
        type={data.type}
        disabled={disable}
      >
        Done
      </Styled.DoneButton>
    </Styled.FooterWrapper>
  );
});

const mapStateToProps = (state) => ({
  data: getData(state),
});

export default connect(mapStateToProps, { backToStartPage })(Footer);
