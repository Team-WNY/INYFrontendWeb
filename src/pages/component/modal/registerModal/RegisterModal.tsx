import styled, {css, keyframes} from "styled-components";
import CommonModal from "../CommonModal";
import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {RegModalInterface} from "../../../../data/interface/modal/commonModalInterface";
import {RootState} from "../../../saga/store/rootStore";
import {updateRegModalStatus} from "../../../saga/store/view/modal/modalViewStore";
import DaumPostcodeEmbed, {useDaumPostcodePopup} from "react-daum-postcode";
import {postcodeScriptUrl} from "react-daum-postcode/lib/loadPostcode";
import UploadImageArea from "./UploadImageArea";
// import {Swiper} from "swiper/swiper-react";
// import {Keyboard, Mousewheel, Navigation, Pagination} from "swiper/types/modules";

const RegisterModal = (props: { currentPage: string }) => {

    const dispatch = useDispatch()
    // const commonModalStatus: CommonModalInterface = useSelector((state: RootState) => state.view.modal.commonModalStatus)
    const regModalStatus: RegModalInterface = useSelector((state: RootState) => state.view.modal.regModalStatus)

    const [isInit, setIsInit] = useState<boolean>(false)
    const [isShow, setIsShow] = useState<boolean>(false)
    const [isSearchAddress, setIsSearchAddress] = useState<boolean>(false)
    const [addressInputValue, setAddressInputValue] = useState<string>("")

    const daumPostSearchOpen = useDaumPostcodePopup(postcodeScriptUrl);

    // useEffect(() => {
    //     if (commonModalStatus.isOpen) {
    //         setIsShow(true)
    //     } else {
    //         setIsShow(false)
    //     }
    // }, [commonModalStatus.isOpen])

    const postSearchBtnClick = () => {
        daumPostSearchOpen({onComplete: searchComplete}).then(result => console.log("result", result))
    }

    useEffect(() => {
        console.log("regModalStatus ", regModalStatus)
        if (regModalStatus.isOpen) {
            setIsInit(true)
            setIsShow(true)
        } else {
            setIsInit(false)
        }
    }, [regModalStatus.isOpen])

    const closeClick = () => {
        if (isShow) {
            setIsInit(false)
            dispatch(updateRegModalStatus({isOpen: false}))
        }
    }

    const addressInputClick = () => {
        console.log("addressInputClick clicked !! ")
        setIsShow(false)
        if (!isSearchAddress) {
            setIsSearchAddress(true)
        }
    }

    const searchComplete = (data) => {
        console.log("data ", data)
        setIsShow(true)
        setIsSearchAddress(false)
        setAddressInputValue(data.address)
    }

    return (
        <>
            {
                isInit &&
                <>
                    <CommonModal currentPage={props.currentPage}/>
                    <Background isVisible={isShow}/>
                    <RegisterModalWrapper isVisible={isShow}>
                        <RegisterModalHeader>
                            <CloseBtn onClick={() => closeClick()}/>
                            <Title>{regModalStatus.title}</Title>
                        </RegisterModalHeader>
                        <Line/>
                        <RegisterModalImageArea>
                            <UploadImageArea/>
                        </RegisterModalImageArea>
                        <RegisterInfoFrame>
                            <InputTitleStr>제목</InputTitleStr>
                            <RegisterSubjectInput/>

                            <InputTitleStr>설명</InputTitleStr>
                            <RegisterContentTextArea/>

                            <InputTitleStr>주소</InputTitleStr>
                            <RegisterAddressInput
                                value={addressInputValue}
                                onClick={() => postSearchBtnClick()}
                            />

                            <InputTitleStr>상세 주소</InputTitleStr>
                            <RegisterAddressInput/>

                        </RegisterInfoFrame>
                        <RegisterSubmit>작성완료</RegisterSubmit>


                    </RegisterModalWrapper>
                    {
                        isSearchAddress &&
                        <DaumPostcodeEmbed
                            style={{
                                width: '400px',
                                height: '400px',
                                display: isSearchAddress ? "block" : "none",
                                zIndex: 16,
                            }}
                            onComplete={searchComplete}
                        />
                    }
                </>
            }
        </>
    )
}

export default RegisterModal


const fadeIn = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

const fadeOut = keyframes`
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
`;

const modalSettings = (visible: boolean) => css`
  z-index: 100;
  animation: ${visible ? fadeIn : fadeOut} 0.4s ease-out;
  transition: visibility 0.4s ease-out;
`;

const Background = styled.div<{ isVisible: boolean }>`
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  position: fixed;
  background-color: rgba(0, 0, 0, 0.6);
  ${(props) => modalSettings(props.isVisible)}
`;

const RegisterModalWrapper = styled.div<{ isVisible: boolean }>`
  width: 100%;
  height: 100%;
  border-radius: 7px;
  position: fixed;
  top: 50vh;
  left: 50vw;
  z-index: 301;
  transform: translate(-50%, -50%);
  box-shadow: 5px 4px 5px -3px rgba(0, 0, 0, 0.25);
  background: var(--color-whiter, #FFF);
  ${(props) => modalSettings(props.isVisible)}
`

const RegisterModalHeader = styled.div`
  width: 100%;
  height: 64.5px;
  top: 0;
  padding-top: 1px;
`

const Line = styled.line`
  width: 318px;
  height: 1px;
  top: 64.5px;
  background: #000;
  position: absolute;
  margin: 0px 21px 0 21px;
`

const RegisterModalImageArea = styled.div`
  width: 100%;
  height: 52px;
  top: 71px;
  padding-top: 1px;
`

// background-image: url("${cancelImg}");
const Title = styled.div`
  width: 42px;
  height: 21.797px;
  margin: 21.8px 159px 0 159px;
  display: flex;
  z-index: 15;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  font-family: Inter;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  letter-spacing: 0.08px;
  text-transform: uppercase;

  &::before {
    color: #000;

    /* Head/Header */
    font-family: Inter;
    font-size: 16px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    letter-spacing: 0.08px;
    text-transform: uppercase;
  }
`

const CloseBtn = styled.button`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  position: absolute;
  left: 0;
  margin: 12.6px 0 0 20px;
  background-color: #fff;
  /* shadow */
  box-shadow: 5px 4px 5px -3px rgba(0, 0, 0, 0.25);

  &:after {
    display: inline-block;
    content: "\\00d7";
    font-size: 17pt;
  }
`

const SlideImage = styled.div`
  width: 45px;
  height: 45px;
  border: 1px solid var(--color-74, #70FFFF);
  background: #D9D9D9;
`

const UploadImgBtn = styled.input`
  top: 75px;
  display: flex;
  width: 45px;
  height: 49px;
  gap: 10px;
  position: absolute;
  margin: 75px 295px 0 20px;
  background: #fff;
`

const RegisterInfoFrame = styled.div`
  top: 140px;
  width: 318px;
  height: 403px;
  position: absolute;
  margin: 0 21px;
  gap: 9px;
  display: inline-flex;
  flex-direction: column;
  align-items: flex-start;
`

const InputTitleStr = styled.div`
  width: auto;
  height: 19px;
  position: relative;
  color: var(--color-black, #000);

  /* Head/Header */
  font-family: Inter;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  letter-spacing: 0.08px;
  text-transform: uppercase;
`

const RegisterSubjectInput = styled.input`
  width: 318px;
  height: 48px;
  border: 1px solid #000;
  font-family: Inter;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  background: var(--color-whiter, #FFF);
`

const RegisterContentTextArea = styled.textarea`
  width: 318px;
  height: 120px;
  border: 1px solid #000;
  font-family: Inter;
  font-size: 13px;
  font-style: normal;
  font-weight: 600;
  background: var(--color-whiter, #FFF);
`

const RegisterAddressInput = styled.input`
  width: 318px;
  height: 48px;
  border: 1px solid #000;
  font-family: Inter;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  background: var(--color-whiter, #FFF);
`

const RegisterSubmit = styled.button`
  top: 0;
  width: 239px;
  height: 48px;
  border-radius: 10px;
  background: var(--color-74, linear-gradient(0deg, rgba(255, 255, 255, 0.74) 0%, rgba(255, 255, 255, 0.74) 100%), #70FFFF);
  position: absolute;
  margin: 567px 60.5px 0 60.5px;
  color: var(--color-black, #000);

  /* Head/Header */
  font-family: Inter;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  letter-spacing: 0.08px;
`

Background.defaultProps = {
    isVisible: false
}
RegisterModalWrapper.defaultProps = {
    isVisible: false
}
