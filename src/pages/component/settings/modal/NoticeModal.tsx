import styled, {css, keyframes} from "styled-components";
import React, {useEffect, useState} from "react";
import {useSelector} from "react-redux";
import {RootState} from "../../../saga/store/rootStore";
import {SettingsModalInterface} from "../../../../data/interface/modal/commonModalInterface";

const fadeIn = keyframes`
  0% {
    opacity: 0;
    left: 100%;
  }
  100% {
    opacity: 1;
    left: 0%;
  }
`

const fadeOut = keyframes`
  0% {
    opacity: 1;
    left: 0%;
  }
  100% {
    opacity: 0;
    left: 100%;
  }
`

const modalSettings = (visible: boolean) => css`
  visibility: ${visible ? 'visible' : 'hidden'};
  z-index: 15;
  animation: ${visible ? fadeIn : fadeOut} 0.15s ease-out;
  transition: visibility 0.15s ease-out;
`

const NoticeModalWrapper = styled.div<{ isVisible: boolean }>`
  width: 100%;
  position: fixed;
  min-height: 100%;
  margin: 50px 0;
  background-color: white;
  ${(props) => modalSettings(props.isVisible)}
`

const NoticeModal = (props:{currentPage:string}) => {

     const settingsModalStatus: SettingsModalInterface = useSelector((state: RootState) => state.view.modal.settingsModalStatus)

     const [isInit, setIsInit] = useState<boolean>(false)
     const [isShow, setIsShow] = useState<boolean>(false)

     useEffect(() => {
            if (settingsModalStatus.title === "NOTICE") {
                setIsInit(true)
                setIsShow(true)
            } else {
                setIsInit(false)
            }
        }, [settingsModalStatus.title])

     return(
        <>
            {
                isInit &&
                <>
                    <NoticeModalWrapper isVisible={isShow}>

                    </NoticeModalWrapper>
                </>
            }
        </>
     )
}

export default NoticeModal

NoticeModalWrapper.defaultProps = {
    isVisible: false
}