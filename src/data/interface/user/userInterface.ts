export interface UserInfo {
    id: string,
    pw: string,
    name: string,
    birth: string,
    email: string,
    phoneNumber: string,
    heart: Heart,
    address: string,
    follower: string,
    following: string,
    amiCnt: number,
    userPw: string,

}

export interface Heart {
    blackHeart: number,
    redHeart: number,
}
