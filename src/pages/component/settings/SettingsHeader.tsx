import styled from "styled-components";
import backImg from "../../../public/static/images/button/main/header/btn_main_header_back.png"
import {useNavigate} from "react-router";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../saga/store/rootStore";
import {SettingsModalInterface} from "../../../data/interface/modal/commonModalInterface";
import {updateSettingsModalStatus} from "../../saga/store/view/modal/modalViewStore";
import {SETTINGS_MODAL_STATUS} from "../../../data/const/settingsConst";

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

    const backBtnOnClick = (title: string) => {
        console.log("backBtnOnClick!!")
        let payload;
        if ((title === "계정 / 정보 관리") || (title === "작성 이력") ||  (title === "NOTICE")){
            payload = SETTINGS_MODAL_STATUS.find(status => status.title === "환경설정")
            navigate("/settings")
            dispatch(updateSettingsModalStatus(payload))
        } else if ((title === "비밀번호 변경하기") || (title === "이메일 인증확인") || (title === "연락처 입력하기")){
            payload = SETTINGS_MODAL_STATUS.find(status => status.title === "계정 / 정보 관리")
            dispatch(updateSettingsModalStatus(payload))
        } else if ((title === "HELP") || (title === "HELPER") || (title === "GOOD")){
            payload = SETTINGS_MODAL_STATUS.find(status => status.title === "작성 이력")
            dispatch(updateSettingsModalStatus(payload))
        } else {
            payload = SETTINGS_MODAL_STATUS.find(status => status.title === "환경설정")
            navigate("/main")
            dispatch(updateSettingsModalStatus(payload))
        }
    }

    return(
        <>
            <TopBarWrapper>
                <BackBtn onClick={() => backBtnOnClick(settingsModalStatus.title)}/>
                <Title>{settingsModalStatus.title}</Title>
            </TopBarWrapper>
        </>
    )
}

export default SettingsHeader