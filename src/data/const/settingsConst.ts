import {SettingsModalInterface} from "../interface/modal/commonModalInterface";
import {Notice} from "../interface/settings/settingsInterface";

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
        title: "NOTICE",
        isShowNotice: false
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

export const noticeList: Array<Notice> = [
    {
       subject: "INY 서비스 오픈 안내",
       uploadDtm: "2023-11-01 21:23:42.224",
       content: "우리 이제 오픈합니다. 많이 이용해주세요.",
    },
    {
       subject: "[11월 하트데이] 하트왕 TOP 10 선발 공지",
       uploadDtm: "2023-11-15 12:33:05.214",
       content: "1등(2000하트) : 타마마 <br> 2등(1300하트) : 케로로 <br> 3등(1000하트) : 기로로",
    },
    {
       subject: "12월 25(월) INY 정기점검 안내",
       uploadDtm: "2023-11-21 13:48:26.112",
       content: "우리 이제 점검합니다. 나중에 이용해주세요.",
    },
]