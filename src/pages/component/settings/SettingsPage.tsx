import styled from "styled-components";
import SettingsHeader from "./SettingsHeader";
import {useDispatch} from "react-redux";
import {CommonModalInterface} from "../../../data/interface/modal/commonModalInterface";
import {updateCommonModalStatus} from "../../saga/store/view/modal/modalViewStore";
import {ModalConst} from "../../../data/const/modalConst";
import {SettingsModalInterface} from "../../../data/interface/modal/commonModalInterface";
import {updateSettingsModalStatus} from "../../saga/store/view/modal/modalViewStore";
import CommonModal from "../modal/CommonModal";
import AccountModal from "../settings/modal/AccountModal";
import WrittenModal from "../settings/modal/WrittenModal";

const SettingsWrapper = styled.div`
  height: auto;
  min-height: 100%;
`

const UserSetting = styled.div`
  width: 150px;
  height: 100px;
  position: absolute;
  margin: 80px 295px 0 30px;
  font-size: 10pt;
  font-weight: 650;
`

const AndWhatNot = styled.div`
  width: 150px;
  height: 100px;
  position: absolute;
  margin: 200px 295px 0 30px;
  font-size: 10pt;
  font-weight: 650;
`

const SettingsOption = styled.option`
  width: 150px;
  height: 15px;
  flex-direction: column;
  margin: 20px 0;
  font-size: 12.5pt;
  font-weight: 650;
  color: #A4A4A4;
`
const Line = styled.line`
  width: 100%;
  height: 1px;
  background: #000;
  position: absolute;
  margin: 180px  0 ;
`

const SettingsPage = (props: { currentPage: string }) => {

    const dispatch = useDispatch()

    const settingsOptionClick = (e) => {
        const settingsOptionValue = e.target.value;
        console.log("settingsOptionClick!!", settingsOptionValue)
        let payload: SettingsModalInterface = {
            isOpen: true
        }
        switch (settingsOptionValue) {
            case "계정 / 정보 관리" :
                payload = {
                       ...payload,
                       title: "계정 / 정보 관리"
                }
            break;
            case "작성한 글 이력" :
                payload = {
                       ...payload,
                       title: "작성 이력"
                }
            break;
            case "공지사항" :
                payload = {
                       ...payload,
                       title: "NOTICE"
                }
            break;
            case "회원탈퇴" :
                payload = {
                       ...payload,
                       title: "회원탈퇴"
                }
            break;
            default :
                payload = {
                       ...payload,
                       title: "환경설정"
                }
            break;
        }
        dispatch(updateSettingsModalStatus(payload))
    }

    const logOutClick = () => {
        console.log("logOutClick!!")
        let value: string = "logOut"
        const payload: CommonModalInterface = {
              title: ModalConst[props.currentPage][value].title,
              content: ModalConst[props.currentPage][value].content,
              isConfirmMsg: ModalConst[props.currentPage][value]?.isConfirmMsg,
              isOpen: true,
              currentPage: props.currentPage,
        }
        dispatch(updateCommonModalStatus(payload))
    }

    return (
        <>
            <SettingsHeader/>
            <CommonModal currentPage={props.currentPage}/>
            <AccountModal currentPage={props.currentPage}/>
            <WrittenModal currentPage={props.currentPage}/>
            <SettingsWrapper>
                <UserSetting>
                    사용자설정
                    <SettingsOption value="계정 / 정보 관리" onClick={(e) => settingsOptionClick(e)}>
                        계정 / 정보 관리
                    </SettingsOption>
                    <SettingsOption value="작성한 글 이력" onClick={(e) => settingsOptionClick(e)}>
                        작성한 글 이력
                    </SettingsOption>
                </UserSetting>
                <Line/>
                <AndWhatNot>
                    기타
                    <SettingsOption value="공지사항" onClick={(e) => settingsOptionClick(e)}>
                        공지사항
                    </SettingsOption>
                    <SÏettingsOption onClick={() => logOutClick()}>
                        로그아웃
                    </SettingsOption>
                    <SettingsOption value="회원탈퇴" onClick={(e) => settingsOptionClick(e)}>
                        회원탈퇴
                    </SettingsOption>
                </AndWhatNot>
            </SettingsWrapper>
        </>
    )
}

export default SettingsPage