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
    left: 0%
  }
  100% {
    opacity: 0;
    left: 100%
  }
`

const modalSettings = (visible: boolean) => css`
  visibility: ${visible ? 'visible' : 'hidden'};
  z-index: 15;
  animation: ${visible ? fadeIn : fadeOut} 0.3s ease-out;
  transition: visibility 0.3s ease-out;
`

const EnterNumberWrapper = styled.div<{ isVisible: boolean }>`
  width: 100%;
  position: fixed;
  min-height: 100%;
  margin: 50px 0;
  background-color: white;
  ${(props) => modalSettings(props.isVisible)}
`

const Guide = styled.div`
  position: absolute;
  margin: 30px;
  font-size: 10pt;
  font-weight: 650;
`

const NumberInput = styled.input`
  width: 260px;
  height: 48px;
  border: 1px solid #000;
  font-size: 20px;
  position: absolute;
  margin: 60px;
  background: var(--color-whiter, #FFF)
`

const Confirmation = styled.button`
  width: 200px;
  height: 48px;
  border-radius: 10px;
  background: var(--color-74, linear-gradient(0deg, rgba(255, 255, 255, 0.74) 0%, rgba(255, 255, 255, 0.74) 100%), #70FFFF);
  position: absolute;
  margin: 140px 90px;
  color: var(--color-black, #000);

  /* Head/Header */
  font-family: Inter;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  letter-spacing: 0.08px;
`

const EnterNumber = (props) => {

    const dispatch = useDispatch()
    const settingsModalStatus: SettingsModalInterface = useSelector((state: RootState) => state.view.modal.settingsModalStatus)

    const [isInit, setIsInit] = useState<boolean>(false)
    const [isShow, setIsShow] = useState<boolean>(false)
    const [isConfirm, setIsConfirm] = useState<boolean>(false)

    useEffect(() => {
        console.log("settingsModalStatus",settingsModalStatus)
        if (settingsModalStatus.isOpen && settingsModalStatus.title!! === "연락처 입력하기") {
            setIsInit(true)
            setIsShow(true)
        } else {
            setIsInit(false)
        }
    }, [settingsModalStatus.isOpen])

    return (
        <>
            {
                isInit &&
                <>
                    <EnterNumberWrapper isVisible={isShow}>
                        <Guide>사용하시는 연락처를 입력해주세요.</Guide>
                        <NumberInput/>
                        <Confirmation>확인</Confirmation>
                    </EnterNumberWrapper>
                </>
            }
        </>
    )
}

export default EnterNumber

EnterNumberWrapper.defaultProps = {
    isVisible: false
}