import React from 'react';
import { getData } from "../../redux/selectors/index";
import { connect } from "react-redux";
import * as Styled from "./styled";
import ScreenPanel from "./screen-panel/index";
import ToolsPanel from './tools-panel/index';
import {useWindowSize} from "../../useWindowSize"  



const Main=(props)=> {
  const { data} = props;

    const windowSize = useWindowSize();

      return ( 
      <Styled.MainWrapper  type={data.type}>
          <ToolsPanel/>
          { (windowSize.width > 768) && <ScreenPanel/> }
          {data.type !== ""&& (windowSize.width <= 768) && <ScreenPanel/> }
      </Styled.MainWrapper>
    );
  }
  const mapStateToProps = (state) => ({
    data: getData(state),
  });
  
  
  export default connect(mapStateToProps)(Main);
