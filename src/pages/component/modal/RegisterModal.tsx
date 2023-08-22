import styled, {css, keyframes} from "styled-components";
import CommonModal from "./CommonModal";
import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {RegModalInterface} from "../../../data/interface/modal/commonModalInterface";
import {RootState} from "../../saga/store/rootStore";
import cancelImg from "../../../public/static/images/button/main/register/btn_main_register_cancel.png";
import {updateCommonModalStatus, updateRegModalStatus} from "../../saga/store/view/modal/modalViewStore";

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
  visibility: ${visible ? 'visible' : 'hidden'};
  z-index: 15;
  animation: ${visible ? fadeIn : fadeOut} 0.15s ease-out;
  transition: visibility 0.15s ease-out;
`;

const Background = styled.div<{ visible: boolean }>`
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  position: fixed;
  background-color: rgba(0, 0, 0, 0.6);
  ${(props) => modalSettings(props.visible)}
`;


const RegisterModalWrapper = styled.div<{ visible: boolean }>`
  width: 360px;
  height: 600px;
  border-radius: 7px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  box-shadow: 5px 4px 5px -3px rgba(0, 0, 0, 0.25);
  z-index: 10;
  background: var(--color-whiter, #FFF);
  ${(props) => modalSettings(props.visible)}
`


// background-image: url("${cancelImg}");
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
  &:after{
    display: inline-block;
    content: "\\00d7";
    font-size: 17pt;
  }
`

const Title = styled.div<{test:string}>`
  width: 42px;
  height: 21.797px;
  margin: 21.8px 159px 0 159px;
  display: flex;
  z-index: 15;
  align-items: center;
  flex-direction: column;
  justify-content: center;

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
    content: ${(props) => props.test && props.test} 
  }
`
    // ${(props) => props.text && `content: ${props.text};`}


// right: ${(props) => props.isOpen ? '0' : '-25.15vw'};

const RegisterModal = () => {

    const dispatch = useDispatch()
    // const commonModalStatus: CommonModalInterface = useSelector((state: RootState) => state.view.modal.commonModalStatus)
    const regModalStatus: RegModalInterface = useSelector((state: RootState) => state.view.modal.regModalStatus)

    const [isShow, setIsShow] = useState<boolean>(false)

    // useEffect(() => {
    //     if (commonModalStatus.isOpen) {
    //         setIsShow(true)
    //     } else {
    //         setIsShow(false)
    //     }
    // }, [commonModalStatus.isOpen])

    useEffect(() => {
        console.log("regModalStatus " , regModalStatus)
        if (regModalStatus.isOpen) {
            setIsShow(true)
        } else {
            setIsShow(false)
        }
    }, [regModalStatus.isOpen])

    const closeClick = () => {
        if (isShow) {
            setIsShow(false)
            dispatch(updateRegModalStatus({isOpen: false}))
        }
    }

    useEffect(()=> {
        console.log('regModalStatus.title ' , regModalStatus.title)
    },[regModalStatus])

    return (
        <>
            {
                isShow &&
                <>
                    <CommonModal/>
                    <Background visible={isShow}/>
                    <RegisterModalWrapper visible={isShow}>
                        <div style={{display:"flex"}}>
                            <CloseBtn onClick={() => closeClick()}/>
                            <Title test={regModalStatus.title}/>
                        </div>

                    </RegisterModalWrapper>
                </>
            }
        </>
    )
}

export default RegisterModal
