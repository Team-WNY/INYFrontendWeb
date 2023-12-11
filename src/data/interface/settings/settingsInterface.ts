export interface Notice {
    idx?: string,
    subject?: string,
    uploadDtm?: string,
    content?: string,
}

export interface PasswordConfirm {
    accountId: string,
    password: string,
}