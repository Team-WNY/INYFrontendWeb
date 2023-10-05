import styled from "styled-components";
import backImg from "../../../public/static/images/button/main/header/btn_main_header_back.png"
import {useNavigate} from "react-router";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../saga/store/rootStore";
import {SettingsModalInterface} from "../../../data/interface/modal/commonModalInterface";
import {updateSettingsModalStatus} from "../../saga/store/view/modal/modalViewStore";

const TopBarWrapper = styled.div`
  width: 100vw;
  height: 60px;
  top: 0;
  flex-shrink: 0;
  z-index: 100;
  position: fixed;
  border-bottom: 1px solid #000;
  background: var(--color-whiter, #FFF);
`

const BackBtn = styled.img`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  position: absolute;
  left: 0;
  margin: 17px 0 0 20px;
  background-image: url(${backImg});
`
const Title = styled.div`
  width: 370px;
  height: 21.797px;
  margin: 20px 0;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 17px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: 0.08px;
  text-transform: uppercase;
`

const SettingsHeader = () => {

    const dispatch = useDispatch()
    const navigate = useNavigate()
    const settingsModalStatus: SettingsModalInterface = useSelector((state: RootState) => state.view.modal.settingsModalStatus)

    const backBtnOnClick = () => {
        console.log("backBtnOnClick!!")
        if ((settingsModalStatus.title!! === "계정 / 정보 관리") ||
            (settingsModalStatus.title!! === "작성 이력") ||
            (settingsModalStatus.title!! === "NOTICE")){
            navigate("/settings")
            dispatch(updateSettingsModalStatus({isOpen:false, title:"환경설정"}))
        } else if ((settingsModalStatus.title!! === "비밀번호 변경하기") ||
                   (settingsModalStatus.title!! === "이메일 인증확인") ||
                   (settingsModalStatus.title!! === "연락처 입력하기")){
            dispatch(updateSettingsModalStatus({isOpen:true, title:"계정 / 정보 관리"}))
        } else if ((settingsModalStatus.title!! === "HELP") ||
                   (settingsModalStatus.title!! === "HELPER") ||
                   (settingsModalStatus.title!! === "GOOD")){
            dispatch(updateSettingsModalStatus({isOpen:true, title:"작성 이력"}))
        } else {
             navigate("/main")
             dispatch(updateSettingsModalStatus({isOpen:false, title:"환경설정"}))
        }
    }

    return(
        <>
            <TopBarWrapper>
                <BackBtn onClick={() => backBtnOnClick()}/>
                <Title>{settingsModalStatus.title}</Title>
            </TopBarWrapper>
        </>
    )
}

export default SettingsHeader