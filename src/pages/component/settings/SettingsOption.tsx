import styled from "styled-components";
import {updateSettingsModalStatus} from "../../saga/store/view/modal/modalViewStore";
import {useDispatch} from "react-redux";
import {SETTINGS_MODAL_STATUS} from "../../../data/const/settingsConst";

const SettingsOption = (props:{ optionValue: string }) => {

    const dispatch = useDispatch()

    const settingsOptionClick = (clickedValue:string) => {
        console.log("clickedValue  ", clickedValue )
        const payload = SETTINGS_MODAL_STATUS.find(status => status.title === clickedValue)
        console.log("payload  ", payload )
        dispatch(updateSettingsModalStatus(payload))
    }

    return (
        <>
            {
                <SettingsOptionList onClick={() => settingsOptionClick(props.optionValue)}>
                    { props.optionValue }
                </SettingsOptionList>
            }
        </>
    )
}

const SettingsOptionList = styled.div`
  width: 150px;
  height: 15px;
  flex-direction: column;
  margin: 40px 30px;
  font-size: 10pt;
  font-weight: 650;
`

export default SettingsOption