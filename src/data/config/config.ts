export const isDev: boolean = process.env.NODE_ENV !== 'production'
const API_URL: string = isDev ? "http://localhost:8080" : "/wny";

const URL_TEST = {
    TEST : `${API_URL}/test`
}

const URL_MAIN = {
    MAIN : `${API_URL}/main`
}

const URL_NEED_YOU = {
    LIST : `${API_URL}/need-you`
}

const URL_LOGIN = {
    LOGIN : `${API_URL}/login`,
    LOGOUT : `${API_URL}/logout`,
}

const URL_JOIN = {
    ID_CHECK : `${API_URL}/api/v1/account/nt/check/accountId`,
    EMAIL_CHECK : `${API_URL}/api/v1/account/nt/auth/code-request`
}

const API = {
    URL: {
        TEST: {
            URL_TEST
        },
        MAIN: {
            URL_MAIN
        },
        NEED_YOU: {
            URL_NEED_YOU
        },
        LOGIN: {
            URL_LOGIN
        },
        JOIN: {
            URL_JOIN
        }
    }
}

export default {
    API
}
