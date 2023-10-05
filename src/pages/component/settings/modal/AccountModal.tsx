import styled, {css, keyframes} from "styled-components";
import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../../saga/store/rootStore";
import {SettingsModalInterface} from "../../../../data/interface/modal/commonModalInterface";
import {updateSettingsModalStatus} from "../../../saga/store/view/modal/modalViewStore";
import CommonModal from "../../modal/CommonModal";
import {ModalConst} from "../../../../data/const/modalConst";
import {CommonModalInterface} from "../../../../data/interface/modal/commonModalInterface";
import {updateCommonModalStatus} from "../../../saga/store/view/modal/modalViewStore";

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

const ChangePasswordWrapper = styled.div<{ isVisible: boolean }>`
  width: 100%;
  position: fixed;
  min-height: 100%;
  margin: 50px 0;
  background-color: white;
  ${(props) => modalSettings(props.isVisible)}
`

const EmailCertifiedWrapper = styled.div<{ isVisible: boolean }>`
  width: 100%;
  position: fixed;
  min-height: 100%;
  margin: 50px 0;
  background-color: white;
  ${(props) => modalSettings(props.isVisible)}
`

const EnterNumberWrapper = styled.div<{ isVisible: boolean }>`
  width: 100%;
  position: fixed;
  min-height: 100%;
  margin: 50px 0;
  background-color: white;
  ${(props) => modalSettings(props.isVisible)}
`

const ChangePasswordFrame = styled.div`
  width: 200px;
  height: 259px;
  position:absolute;
  margin: 50px 50px;
`

const EmailCertifiedFrame = styled.div`
  width: 200px;
  height: 259px;
  position:absolute;
  margin: 50px 100px;
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

const NewPasswordInput = styled.input`
  width: 160px;
  height: 48px;
  border: 1px solid #000;
  font-size: 20px;
  margin: 10px 0;
  position: fixed;
  background: var(--color-whiter, #FFF)
`

const CheckNewPasswordInput = styled.input`
  width: 160px;
  height: 48px;
  border: 1px solid #000;
  font-size: 20px;
  margin: 10px 0;
  position: fixed;
  background: var(--color-whiter, #FFF)
`

const EmailCertifiedInput = styled.input`
  width: 160px;
  height: 48px;
  border: 1px solid #000;
  font-size: 20px;
  margin: 10px 0;
  position: fixed;
  background: var(--color-whiter, #FFF)
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

const ConfirmButton = styled.button`
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
const ChangePasswordButton = styled.button`
  width: 75px;
  height: 48px;
  border-radius: 10px;
  background: var(--color-base, rgba(29, 255, 255, 0.57));
  position: absolute;
  margin: 100px 0;
  color: var(--color-black, #000);

  /* Head/Header */
  font-family: Inter;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  letter-spacing: 0.08px;
`

const RegisterButton = styled.button`
  width: 75px;
  height: 48px;
  border-radius: 10px;
  background: var(--color-base, rgba(29, 255, 255, 0.57));
  position: absolute;
  margin: 140px 60px;
  color: var(--color-black, #000);

  /* Head/Header */
  font-family: Inter;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  letter-spacing: 0.08px;
`

const DeleteButton = styled.button`
  width: 75px;
  height: 48px;
  border-radius: 10px;
  background: var(--color-74, linear-gradient(0deg, rgba(255, 255, 255, 0.74) 0%, rgba(255, 255, 255, 0.74) 100%), #70FFFF);
  position: absolute;
  margin: 140px 250px;
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

    const [isInit, setIsInit] = useState<boolean>(false)
    const [isShow, setIsShow] = useState<boolean>(false)
    const [isConfirm, setIsConfirm] = useState<boolean>(false)
    const [isChangePassword, setIsChangePassword] = useState<boolean>(false)
    const [isEmailCertified, setIsEmailCertified] = useState<boolean>(false)
    const [isEnterNumber, setIsEnterNumber] = useState<boolean>(false)

    useEffect(() => {
        if (settingsModalStatus.isOpen && settingsModalStatus.title!! === "계정 / 정보 관리") {
            setIsInit(true)
            setIsShow(true)
            setIsChangePassword(false)
            setIsEmailCertified(false)
            setIsEnterNumber(false)
        } else if (settingsModalStatus.title!! === "환경설정") {
            setIsInit(false)
            setIsConfirm(false)
        } else {
            setIsInit(false)
        }
    }, [settingsModalStatus])

    const confirmButtonClick = () => {
        console.log("confirmButtonClick!!")
        setIsConfirm(true)
    }

    const ChangePasswordButtonClick = () => {
        console.log("ChangePasswordButtonClick")
        let value: string = "ChangePassword"
        const payload: CommonModalInterface = {
              title: ModalConst[props.currentPage][value].title,
              content: ModalConst[props.currentPage][value].content,
              isConfirmMsg: ModalConst[props.currentPage][value]?.isConfirmMsg,
              isOpen: true,
              currentPage: props.currentPage,
        }
        dispatch(updateCommonModalStatus(payload))
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
                setIsChangePassword(true)
            break;
            case "이메일 인증확인" :
                payload = {
                   ...payload,
                   title: "이메일 인증확인"
                }
                setIsEmailCertified(true)
            break;
            case "연락처 입력하기" :
                payload = {
                   ...payload,
                   title: "연락처 입력하기"
                }
                setIsEnterNumber(true)
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
            {/*계정/정보 관리 비밀번호 입력*/}
            {
                isInit &&
                <>
                    <PasswordConfirmWrapper isVisible={isShow}>
                        <Guide>계정 정보를 변경하려면 비밀번호를 입력해주세요.</Guide>
                        <PasswordInput type="password"/>
                        <ConfirmButton onClick={() => confirmButtonClick()}>확인</ConfirmButton>
                    </PasswordConfirmWrapper>
                </>
            }

            {/*계정/정보 관리 옵션 */}
            {
               <>
                    <AccountOptionWrapper  isVisible={isConfirm}>
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

            {/*비밀번호 변경하기*/}
            {
                <>
                    <CommonModal currentPage={props.currentPage}/>
                    <ChangePasswordWrapper isVisible={isChangePassword}>
                        <ChangePasswordFrame>
                           <div style={{fontSize: "18px", fontWeight: "650"}}>비밀번호</div>
                           <NewPasswordInput type="password"/>
                           <div style={{fontSize: "18px", fontWeight: "650", marginTop: "80px"}}>비밀번호 확인</div>
                           <CheckNewPasswordInput type="password"/>
                           <ChangePasswordButton onClick={() => ChangePasswordButtonClick()}>변경하기</ChangePasswordButton>
                        </ChangePasswordFrame>
                    </ChangePasswordWrapper>
                </>
            }

            {/*이메일 인증확인*/}
            {
                <>
                    <EmailCertifiedWrapper isVisible={isEmailCertified}>
                        <EmailCertifiedFrame>
                            <div style={{fontSize: "18px", fontWeight: "650"}}>E-MAIL</div>
                            <EmailCertifiedInput readOnly/>
                        </EmailCertifiedFrame>
                    </EmailCertifiedWrapper>
                </>
            }

            {/*연락처 입력하기*/}
            {
                <>
                    <EnterNumberWrapper isVisible={isEnterNumber}>
                        <Guide>사용하시는 연락처를 입력해주세요.</Guide>
                        <NumberInput/>
                        <RegisterButton>등록하기</RegisterButton>
                        <DeleteButton>삭제하기</DeleteButton>
                    </EnterNumberWrapper>
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

ChangePasswordWrapper.defaultProps = {
    isVisible: false
}

EmailCertifiedWrapper.defaultProps = {
    isVisible: false
}

EnterNumberWrapper.defaultProps = {
    isVisible: false
}