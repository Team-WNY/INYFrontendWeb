import styled, {css, keyframes} from "styled-components";
import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../../saga/store/rootStore";
import {SettingsModalInterface} from "../../../../data/interface/modal/commonModalInterface";
import {updateSettingsModalStatus} from "../../../saga/store/view/modal/modalViewStore";

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

const WrittenModalWrapper = styled.div<{ isVisible: boolean }>`
  width: 100%;
  position: fixed;
  min-height: 100%;
  margin: 50px 0;
  background-color: white;
  ${(props) => modalSettings(props.isVisible)}
`

const HelpWrapper = styled.div<{ isVisible: boolean }>`
  width: 100%;
  position: fixed;
  min-height: 100%;
  margin: 50px 0;
  background-color: white;
  ${(props) => modalSettings(props.isVisible)}
`

const HelperWrapper = styled.div<{ isVisible: boolean }>`
  width: 100%;
  position: fixed;
  min-height: 100%;
  margin: 50px 0;
  background-color: white;
  ${(props) => modalSettings(props.isVisible)}
`

const GoodWrapper = styled.div<{ isVisible: boolean }>`
  width: 100%;
  position: fixed;
  min-height: 100%;
  margin: 50px 0;
  background-color: white;
  ${(props) => modalSettings(props.isVisible)}
`

const WrittenOption = styled.option`
  width: 150px;
  height: 15px;
  flex-direction: column;
  margin: 40px 30px;
  font-size: 10pt;
  font-weight: 650;
`

const WrittenModal = (props:{currentPage:string}) => {

    const dispatch = useDispatch()
    const settingsModalStatus: SettingsModalInterface = useSelector((state: RootState) => state.view.modal.settingsModalStatus)

    const [isInit, setIsInit] = useState<boolean>(false)
    const [isShow, setIsShow] = useState<boolean>(false)
    const [isHelp, setIsHelp] = useState<boolean>(false)
    const [isHelper, setIsHelper] = useState<boolean>(false)
    const [isGood, setIsGood] = useState<boolean>(false)

    useEffect(() => {
        console.log("settingsModalStatus", settingsModalStatus)
        if (settingsModalStatus.isOpen && settingsModalStatus.title!! === "작성 이력") {
            setIsInit(true)
            setIsShow(true)
            setIsHelp(false)
            setIsHelper(false)
            setIsGood(false)
        } else if ((settingsModalStatus.title!! === "HELP") ||
                   (settingsModalStatus.title!! === "HELPER") ||
                   (settingsModalStatus.title!! === "GOOD")) {
            setIsInit(true)
        } else {
            setIsInit(false)
        }
    }, [settingsModalStatus])

    const writtenOptionClick = (e) => {
        const writtenOptionValue = e.target.value;
        let payload: SettingsModalInterface = {
            isOpen: true
        }
        switch (writtenOptionValue) {
            case "HELP" :
                payload = {
                   ...payload,
                   title: "HELP"
                }
                setIsHelp(true)
            break;
            case "HELPER" :
                payload = {
                   ...payload,
                   title: "HELPER"
                }
                setIsHelper(true)
            break;
            case "GOOD" :
                payload = {
                   ...payload,
                   title: "GOOD"
                }
                setIsGood(true)
            break;
            default :
                payload = {
                   ...payload,
                   title: "작성 이력"
                }
            break;
        }
        dispatch(updateSettingsModalStatus(payload))
    }

    return(
        <>
            {/*작성 이력*/}
            {
                isInit &&
                <>
                    <WrittenModalWrapper isVisible={isShow}>
                        <WrittenOption value="HELP" onClick={(e) => writtenOptionClick(e)}>
                            HELP
                        </WrittenOption>
                        <WrittenOption value="HELPER" onClick={(e) => writtenOptionClick(e)}>
                            HELPER
                        </WrittenOption>
                        <WrittenOption value="GOOD" onClick={(e) => writtenOptionClick(e)}>
                            GOOD
                        </WrittenOption>
                    </WrittenModalWrapper>
                </>
            }

            {/*HELP*/}
            {
                <>
                    <HelpWrapper isVisible={isHelp}>
                    </HelpWrapper>
                </>
            }

            {/*HELPER*/}
            {
                <>
                    <HelperWrapper isVisible={isHelper}>
                    </HelperWrapper>
                </>
            }

            {/*GOOD*/}
            {
                <>
                    <GoodWrapper isVisible={isGood}>
                    </GoodWrapper>
                </>
            }
        </>
    )
}

export default WrittenModal

WrittenModalWrapper.defaultProps = {
    isVisible: false
}

HelpWrapper.defaultProps = {
    isVisible: false
}

HelperWrapper.defaultProps = {
    isVisible: false
}

GoodWrapper.defaultProps = {
    isVisible: false
}