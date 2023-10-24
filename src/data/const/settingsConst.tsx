import {SettingsModalInterface} from "../interface/modal/commonModalInterface";

/**
 * 필요한 상수값을 Array<SettingsModalStatus>의 타입으로 정리함. (타입은 payload 형태로.)
 * 이렇게 정리해두면 find 함수로 원하는 조건에 일치하는 SettingsModalStatus를 찾아 payload 로 던져줄 수 있음
 * 원하는 객체에 접근해서 상수로 활용 할 수 있음.
 */
export const SETTINGS_MODAL_STATUS: Array<SettingsModalInterface> = [
    {
        isOpen: false,
        title: "환경설정"
    },
    {
        isOpen: true,
        title: "계정 / 정보 관리",
        settingsOptionList: ["비밀번호 변경하기", "이메일 인증확인", "연락처 입력하기"]
    },
    {
        isOpen: true,
        title: "작성 이력",
        settingsOptionList: ["HELP", "HELPER", "GOOD"]
    },
    {
        isOpen: true,
        title: "NOTICE"
    },
    {
        isOpen: true,
        title: "비밀번호 변경하기"
    },
    {
        isOpen: true,
        title: "이메일 인증확인"
    },
    {
        isOpen: true,
        title: "연락처 입력하기"
    },
    {
        isOpen: true,
        title: "HELP"
    },
    {
        isOpen: true,
        title: "HELPER"
    },
    {
        isOpen: true,
        title: "GOOD"
    },
]
