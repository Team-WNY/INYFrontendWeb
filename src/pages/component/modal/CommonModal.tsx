import {useEffect, useState} from "react";
import styled, {css, keyframes} from "styled-components";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../saga/store/rootStore";
import {updateCommonModalStatus} from "../../saga/store/view/modal/modalViewStore";
import {CommonModalInterface} from "../../../data/interface/modal/commonModalInterface";
import btnModalDeleteImgSrc from "../../../public/static/images/button/modal/btn_modal_delete.png"
import btnModalBackImgSrc from "../../../public/static/images/button/modal/btn_modal_back.png"

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

const ModalSection = styled.div<{ visible: boolean }>`
  width: 218px;
  height: 150px;
  border-radius: 20px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: rgba(255, 255, 255, 1);
  padding: 18px 13px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
  ${(props) => modalSettings(props.visible)}
`;

const Title = styled.div`
  display: flex;
  width: auto;
  height: 19px;
  flex-direction: column;
  justify-content: center;

  /* Head/Header */
  font-family: Inter;
  font-size: 19px;
  font-style: normal;
  font-weight: bold;
  line-height: normal;
  letter-spacing: 0.08px;
  text-transform: uppercase;
`;

const Content = styled.div`
  color: #000;
  text-align: center;
  /* Button/Md */
  font-family: Inter;
  font-size: 15px;
  font-style: normal;
  font-weight: bold;
  line-height: normal;
  letter-spacing: 0.06px;
`;

const CancelButton = styled.button`
  display: flex;
  width: 75px;
  height: 30px;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  background-color: rgba(29, 255, 255, 0.57);
  &::before {
    color: #000;
    /* Head/Header */
    font-family: Inter;
    font-size: 12px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    letter-spacing: 0.08px;
    text-transform: uppercase;
    content: "삭제하기";
`

const GoBackButton = styled.button`
  display: flex;
  width: 75px;
  height: 30px;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  background-image: url("${btnModalBackImgSrc}");
`

const CommonModal = (
    // props: { pageStr?: string, purpose?: string }
) => {

    const dispatch = useDispatch()
    const commonModalStatus: CommonModalInterface = useSelector((state: RootState) => state.view.modal.commonModalStatus)
    const [isShow, setIsShow] = useState<boolean>(false)

    useEffect(() => {
        if (commonModalStatus.isOpen) {
            setIsShow(true)
        } else {
            setIsShow(false)
        }
    }, [commonModalStatus.isOpen])

    const closeBtnClick = () => {
        if (isShow) {
            setIsShow(false)
            dispatch(updateCommonModalStatus({isOpen: false}))
        }
    }

    const Item = (props: { text: string }) => {
        return <p>
            {props.text.split("\n").map((txt) => (
                <>
                    {txt}
                    <br/>
                </>
            ))}
        </p>;
    };

    return (
        <>
            {
                isShow &&
                <>
                    <Background visible={isShow}/>
                    <ModalSection visible={isShow}>
                        <Title>
                            {commonModalStatus.title}
                        </Title>
                        <Content>
                            <Item text={commonModalStatus.content}/>
                        </Content>
                        {
                            commonModalStatus.isConfirm ?
                                <div style={{display: "flex", gap: "17px"}}>
                                    <CancelButton/>
                                    <GoBackButton onClick={closeBtnClick}/>
                                </div>
                                :
                                <GoBackButton onClick={closeBtnClick}/>
                        }
                    </ModalSection>
                </>
            }
        </>
    )
}

export default CommonModal
