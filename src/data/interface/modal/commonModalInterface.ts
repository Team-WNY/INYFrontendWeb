

export interface CommonModalInterface {
    isOpen: boolean,
    title?: string,
    content?: string,
    isConfirmMsg?: string,
    currentPage?: string,
    subPage?: string,
}

export interface RegModalInterface {
    isOpen: boolean,
    title?: string,
    content?: string,
    address?: string,
}

export interface SettingsModalInterface {
    isOpen: boolean,
    isShowNotice?: boolean,
    title?: string,
    settingsOptionList?: Array<string>,
}
