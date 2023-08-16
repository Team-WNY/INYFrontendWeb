import styled from "styled-components";
import React from "react";
import {useMediaQuery} from "react-responsive";
import {Mobile, Pc} from "../../../data/responseWeb/responseWeb";

const LoginWrapper = styled.div`
  display: flex;
  width: 39.91vw;
  padding: 7.16vh 5.6vw 43.55vh 5.76vw;
  flex-direction: column;
  align-items: center;
  gap: 9.31vh;
  background: #FFF;
`

const StyledImg = styled.img`
  width: 1.25rem;
  height: 0.625rem;
  top: 7.16vw;
  left: 19.90vw;
`

const TestPage = () => {

    const isPc = useMediaQuery({
        query: "(min-width:1024px)"
    });
    const isTablet = useMediaQuery({
        query: "(min-width:768px) and (max-width:1023px)"
    });
    const isMobile = useMediaQuery({
        query: "(max-width:767px)"
    });

    return (
        <>
            <Pc>pc test</Pc>
            <Mobile>moblie test</Mobile>
        </>
    )
}

export default TestPage

