type IApiStatus = {
    status: number
    message: string
}
export type IApiStatusObj = {
    INTERNAL_SERVER_ERROR: IApiStatus
    BAD_REQUEST: IApiStatus
    NOT_FOUND: IApiStatus
    OK: IApiStatus
    UNPROCESSABLE_ENTITY?: IApiStatus
    UNAUTHORIZED: IApiStatus
}
