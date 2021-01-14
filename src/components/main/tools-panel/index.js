import React from "react";
import { connect } from "react-redux";
import { getData } from "../../../redux/selectors/index";
import  LogoTools  from "./logo-tools/index";
import TextTools  from "./text-tools/index";
import EmptyCase from "./empty-case/index";
import {getCurrentComponent} from "../../../helperFunctions";
import * as Styled from "./styled";


const components = [
  {
    component: <EmptyCase />,
    key: "",
  },
  {
    component: <LogoTools />,
    key: "img",
  },
  {
    component: <TextTools />,
    key: "text",
  },
];

const ToolsPanel = (props) => {
  const { data } = props;
  return (
<Styled.ToolsPanelWrapper type={data.type}>
{getCurrentComponent(data.type,components)}
</Styled.ToolsPanelWrapper>
  )
  
};

const mapStateToProps = (state) => ({
  data: getData(state),
});

export default connect(mapStateToProps)(ToolsPanel);
