import {useEffect, useState} from "react";
import styled, {css, keyframes} from "styled-components";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../saga/store/rootStore";
import {updateCommonModalStatus} from "../../saga/store/view/modal/modalViewStore";
import {CommonModalInterface} from "../../../data/interface/modal/commonModalInterface";
import {useNavigate} from "react-router";

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
  z-index: 999;
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
  position: fixed;
  top: 50vh;
  left: 50vw;
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

const PositiveButton = styled.button`
  display: flex;
  width: 75px;
  height: 30px;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  border-radius: 10px;
  background: var(--color-base, rgba(29, 255, 255, 0.57));
  color: #000;
  /* Head/Header */
  font-family: Inter;
  font-size: 12px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  letter-spacing: 0.08px;
  text-transform: uppercase;
`

const GoBackButton = styled.button`
  display: flex;
  width: 75px;
  height: 30px;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  border-radius: 10px;
  background: var(--color-74, linear-gradient(0deg, rgba(255, 255, 255, 0.74) 0%, rgba(255, 255, 255, 0.74) 100%), #70FFFF);
  color: #000;
  /* Head/Header */
  font-family: Inter;
  font-size: 12px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  letter-spacing: 0.08px;
  text-transform: uppercase;
`

const CommonModal = (props: { currentPage: string }) => {

    const dispatch = useDispatch()
    const navigate = useNavigate()
    const commonModalStatus = useSelector((state: RootState) => state.view.modal.commonModalStatus as CommonModalInterface)
    const isLogin = useSelector((state: RootState) => state.server.login.isLogin as boolean)
    const [isShow, setIsShow] = useState<boolean>(false)

    useEffect(() => {
        console.log("commonModalStatus ", commonModalStatus)
    }, [commonModalStatus.isOpen])

    const goBackBtnClick = () => {
        if (commonModalStatus.isOpen) {
            dispatch(updateCommonModalStatus({isOpen: false}))
        }
    }

    const positiveBtnClick = () => {
        // setIsShow(false)
        dispatch(updateCommonModalStatus({isOpen: false}))
        if (props.currentPage !== "main") {
            navigate(0)
        }
    }

    const Item = (props: { text: string }) => {
        return <p key={props?.text}>
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
                commonModalStatus.isOpen &&
                <>
                    <Background visible={commonModalStatus.isOpen}/>
                    <ModalSection visible={commonModalStatus.isOpen}>
                        <Title>
                            {commonModalStatus?.title}
                        </Title>
                        <Content>
                            <Item text={commonModalStatus?.content}
                                  key={commonModalStatus.currentPage + "_" + commonModalStatus?.content}/>
                        </Content>
                        <div style={{display: "flex", gap: "17px"}}>
                            {
                                commonModalStatus?.isConfirmMsg ?
                                    <PositiveButton
                                        onClick={() => positiveBtnClick()}>{commonModalStatus?.isConfirmMsg}</PositiveButton>
                                    : null
                            }
                            <GoBackButton onClick={goBackBtnClick}>돌아가기</GoBackButton>
                        </div>
                    </ModalSection>
                </>
            }
        </>
    )
}

export default CommonModal

Background.defaultProps = {
    visible: false
}
ModalSection.defaultProps = {
    visible: false
}
