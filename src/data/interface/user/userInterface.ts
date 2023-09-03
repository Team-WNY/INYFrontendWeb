export interface UserInfo {
    accountId: string,
    userPw?: string,
    pw?: string,
    name?: string,
    birth?: string,
    email?: string,
    phoneNumber?: string,
    heart?: Heart,
    address?: string,
    follower?: string,
    following?: string,
    amiCnt?: number,
    userProfileImg?: string,
    nickName:string,
}

export interface Heart {
    blackHeart: number,
    redHeart: number,
}
