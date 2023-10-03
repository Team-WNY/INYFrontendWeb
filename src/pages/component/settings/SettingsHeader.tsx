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
  width: 21px;
  height: 21px;
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
        if (settingsModalStatus.title!! === "환경설정") {
            navigate("/main")
        }
        dispatch(updateSettingsModalStatus({isOpen:false, title:"환경설정"}))
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