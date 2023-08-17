import React from "react";
import Router from "./router/router";
import styled from "styled-components";
import {useSelector} from "react-redux";
import {RootState} from "./saga/store/rootStore";

const RootSection = styled.section`
  //width: device-width;
  //height: 91.69vh;
  //aspect-ratio: auto 375 / 667;
  //max-width: 100%;
  //max-height: 100%;
  //background: red;
  :root {
    --vh: 100%;
  }
  width: 100vw;
  height: 100vh;
  z-index: 1;
  //max-width: 1920px;
  //max-height: 1032px;
  //min-width: 1280px;
  //min-height: 688px;
  background-color: #fff;
  //margin: 0 auto;
`
//background-color: ${(props) => props.isModalShow ? 'rgba(0, 0, 0, 0.75)' : '#fff'};

const Root: React.FC = () => {

    return (
        <>
            <RootSection>
                <Router/>
            </RootSection>
        </>
    )
}
export default Root
