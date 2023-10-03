import styled, {css, keyframes} from "styled-components";
import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../../saga/store/rootStore";
import {SettingsModalInterface} from "../../../../data/interface/modal/commonModalInterface";
import {updateSettingsModalStatus} from "../../../saga/store/view/modal/modalViewStore";
import {LoginInfo} from "../../../../data/interface/login/loginInterface";
import EnterNumberModal from "./EnterNumberModal";

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

const PasswordConfirmWrapper = styled.div<{ isVisible: boolean }>`
  width: 100%;
  position: fixed;
  min-height: 100%;
  margin: 50px 0;
  background-color: white;
  ${(props) => modalSettings(props.isVisible)}
`

const AccountOptionWrapper = styled.div<{ isVisible: boolean }>`
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

const PasswordInput = styled.input`
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

const AccountOption = styled.option`
  width: 150px;
  height: 15px;
  flex-direction: column;
  margin: 40px 30px;
  font-size: 10pt;
  font-weight: 650;
`

const AccountModal = (props:{currentPage:string}) => {

    const dispatch = useDispatch()
    const settingsModalStatus: SettingsModalInterface = useSelector((state: RootState) => state.view.modal.settingsModalStatus)
    const loginInfo: LoginInfo = useSelector((state: RootState) => state.server.user.userInfo)

    const [isInit, setIsInit] = useState<boolean>(false)
    const [isShow, setIsShow] = useState<boolean>(false)
    const [isConfirm, setIsConfirm] = useState<boolean>(false)

    useEffect(() => {
        if (settingsModalStatus.isOpen && settingsModalStatus.title!! === "계정 / 정보 관리") {
            setIsInit(true)
            setIsShow(true)
        } else {
            setIsInit(false)
        }
    }, [settingsModalStatus.isOpen])

    const confirmationClick = () => {
        console.log("confirmationClick!!")
        setIsConfirm(true)
    }

    const accountOptionClick = (e) => {
        const accountOptionValue = e.target.value;
        console.log("accountOptionClick!!", accountOptionValue)
        let payload: SettingsModalInterface = {
            isOpen: true
        }
        switch (accountOptionValue) {
            case "비밀번호 변경하기" :
                payload = {
                   ...payload,
                   title: "비밀번호 변경하기"
                }
            break;
            case "이메일 인증확인" :
                payload = {
                   ...payload,
                   title: "이메일 인증확인"
                }
            break;
            case "연락처 입력하기" :
                payload = {
                   ...payload,
                   title: "연락처 입력하기"
                }
            break;
            default :
                payload = {
                   ...payload,
                   title: "계정 / 정보 관리"
                }
            break;
        }
        dispatch(updateSettingsModalStatus(payload))
    }

    return(
        <>
            {
                isInit &&
                <>
                    <PasswordConfirmWrapper isVisible={isShow}>
                        <Guide>계정 정보를 변경하려면 비밀번호를 입력해주세요.</Guide>
                        <PasswordInput type="password"/>
                        <Confirmation onClick={() => confirmationClick()}>확인</Confirmation>
                    </PasswordConfirmWrapper>
                </>
            }

            {
                isConfirm &&
                <>
                    <EnterNumberModal/>
                    <AccountOptionWrapper  isVisible={isShow}>
                        <AccountOption value="비밀번호 변경하기" onClick={(e) => accountOptionClick(e)}>
                            비밀번호 변경하기
                        </AccountOption>
                        <AccountOption value="이메일 인증확인" onClick={(e) => accountOptionClick(e)}>
                            이메일 인증확인
                        </AccountOption>
                        <AccountOption value="연락처 입력하기" onClick={(e) => accountOptionClick(e)}>
                            연락처 입력하기
                        </AccountOption>
                    </AccountOptionWrapper>
                </>
            }
        </>
    )
}

export default AccountModal

PasswordConfirmWrapper.defaultProps = {
    isVisible: false
}

AccountOptionWrapper.defaultProps = {
    isVisible: false
}

