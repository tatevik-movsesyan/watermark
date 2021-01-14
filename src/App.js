import React from "react";
import * as Styled from "./styled";
import { Header } from "./components/header/index";
import  Main  from "./components/main/index";
import Footer from "./components/footer/index";
import {useWindowSize} from "./useWindowSize";


export const App = () => {

  const size = useWindowSize();


  return (
    <Styled.AppWrapper>
      <Styled.Modal>
        <Styled.App>
        {/* <div>
      {size.width}px / {size.height}px
    </div> */}
          <Header />
          <Main />
          <Footer />
        </Styled.App>
      </Styled.Modal>
    </Styled.AppWrapper>
  );
};
