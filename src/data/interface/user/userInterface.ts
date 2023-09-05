export interface UserInfo {
    accountId: string,
    auth?: string,
    follower?: number,
    following?: number,
    heart?: Heart,
    // id?:string
    // password?: string,
    profile?: UserProfile,
    uploadAmiCount?: number,
}

export interface Heart {
    blackHeart: number,
    redHeart: number,
}

export interface UserProfile {
    address?: string,
    birthDay?: string,
    email?: string,
    name?: string,
    nickName: string,
    phoneNumber?: string,
}
