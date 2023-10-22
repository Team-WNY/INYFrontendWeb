import styled from "styled-components";
import SettingsHeader from "./SettingsHeader";
import {useDispatch} from "react-redux";
import {CommonModalInterface} from "../../../data/interface/modal/commonModalInterface";
import {updateCommonModalStatus, updateSettingsModalStatus} from "../../saga/store/view/modal/modalViewStore";
import {ModalConst} from "../../../data/const/modalConst";
import CommonModal from "../modal/CommonModal";
import AccountModal from "../settings/modal/AccountModal";
import WrittenModal from "../settings/modal/WrittenModal";
import NoticeModal from "../settings/modal/NoticeModal";
import {SETTINGS_MODAL_STATUS} from "../../../data/const/settingsConst";

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

    const settingsOptionClick = (clickedValue:string) => {
        console.log("clickedValue  ", clickedValue )
        const payload = SETTINGS_MODAL_STATUS.find(status => status.title === clickedValue)
        console.log("payload  ", payload )
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
            <NoticeModal currentPage={props.currentPage}/>
            {/*기존에 태그에 value 속성에 상수로 박힌 값을 즉시 상수값으로 함수의 파라미터로 줬음 */}
            <SettingsWrapper>
                <UserSetting>
                    사용자설정
                    <SettingsOption onClick={() => settingsOptionClick("계정 / 정보 관리")}>
                        계정 / 정보 관리
                    </SettingsOption>
                    <SettingsOption onClick={() => settingsOptionClick("작성 이력")}>
                        작성한 글 이력
                    </SettingsOption>
                </UserSetting>
                <Line/>
                <AndWhatNot>
                    기타
                    <SettingsOption onClick={() => settingsOptionClick("NOTICE")}>
                        공지사항
                    </SettingsOption>
                    <SettingsOption onClick={() => logOutClick()}>
                        로그아웃
                    </SettingsOption>
                    <SettingsOption>
                        회원탈퇴
                    </SettingsOption>
                </AndWhatNot>
            </SettingsWrapper>
        </>
    )
}

export default SettingsPage
