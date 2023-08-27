export interface NeedYou {
    idx?: string,
    subject?: string,
    content?: string,
    uploadDtm?: string,
    needYouImg?: string,
    address?: string,
    comment?: Array<Comment>,
}

export interface Comment {
    userId: number,
    nickName: string,
    comment: string,
    userProfileImg?: string,
}

// Array<NeedYou>

