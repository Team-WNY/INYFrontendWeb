export const isDev: boolean = process.env.NODE_ENV !== 'production'
const API_URL: string = isDev ? "http://localhost:8080/wny" : "/wny";

const URL_TEST = {
    TEST : `${API_URL}/test`
}

const URL_MAIN = {
    MAIN : `${API_URL}/main`
}

const URL_NEED_YOU = {
    LIST : `${API_URL}/need-you`
}

const URL_JOIN = {
    ID_CHECK : `${API_URL}/id-check`
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
        JOIN: {
            URL_JOIN
        }
    }
}

export default {
    API
}
