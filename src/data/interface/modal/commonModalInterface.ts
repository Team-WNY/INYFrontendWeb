

export interface CommonModalInterface {
    isOpen: boolean,
    title?: string,
    content?: string,
    isConfirmMsg?: string,
    currentPage?: string,
    nextPage?: string,
}

export interface RegModalInterface {
    isOpen: boolean,
    title?: string,
    content?: string,
    address?: string,
}

export interface SettingsModalInterface {
    isOpen: boolean,
    title?: string,
}
