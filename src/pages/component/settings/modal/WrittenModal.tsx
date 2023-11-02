import styled, {css, keyframes} from "styled-components";
import React, {useEffect, useState} from "react";
import {useSelector} from "react-redux";
import {RootState} from "../../../saga/store/rootStore";
import {SettingsModalInterface} from "../../../../data/interface/modal/commonModalInterface";
import SettingsOption from  "../SettingsOption";

const WrittenModal = (props:{currentPage:string}) => {

    const settingsModalStatus: SettingsModalInterface = useSelector((state: RootState) => state.view.modal.settingsModalStatus)

    const [isInit, setIsInit] = useState<boolean>(false)
    const [isShow, setIsShow] = useState<boolean>(false)
    const [isHelp, setIsHelp] = useState<boolean>(false)
    const [isHelper, setIsHelper] = useState<boolean>(false)
    const [isGood, setIsGood] = useState<boolean>(false)

    useEffect(() => {
        if (settingsModalStatus.title === "작성 이력") {
            setIsInit(true)
            setIsShow(true)
            setIsHelp(false)
            setIsHelper(false)
            setIsGood(false)
        } else if (settingsModalStatus.title === "HELP") {
            setIsHelp(true)
        } else if (settingsModalStatus.title === "HELPER") {
            setIsHelper(true)
        } else if (settingsModalStatus.title === "GOOD") {
            setIsGood(true)
        } else {
            setIsInit(false)
        }
    }, [settingsModalStatus.title])

    return(
        <>
            {/*작성 이력*/}
            {
                isInit &&
                <>
                    <WrittenModalWrapper isVisible={isShow}>
                        {
                            settingsModalStatus.title === "작성 이력" &&
                            settingsModalStatus.settingsOptionList.map((optionValue: string) => {
                                return (
                                    <SettingsOption optionValue={optionValue}/>
                                 )
                            })
                        }
                    </WrittenModalWrapper>
                </>
            }

            {/*HELP*/}
            {
                isInit &&
                <>
                    <HelpWrapper isVisible={isHelp}>
                    </HelpWrapper>
                </>
            }

            {/*HELPER*/}
            {
                isInit &&
                <>
                    <HelperWrapper isVisible={isHelper}>
                    </HelperWrapper>
                </>
            }

            {/*GOOD*/}
            {
                isInit &&
                <>
                    <GoodWrapper isVisible={isGood}>
                    </GoodWrapper>
                </>
            }
        </>
    )
}

export default WrittenModal

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