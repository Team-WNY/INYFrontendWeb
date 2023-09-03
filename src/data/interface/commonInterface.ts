export interface ApiResponse {
    status: number,
    message: string,
    payload: any,
    accessToken?: string,
}
