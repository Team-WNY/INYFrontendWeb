export const isDev: boolean = process.env.NODE_ENV !== 'production'
const API_URL: string = isDev ? "http://localhost:8080/wny" : "/wny";

const URL_TEST = {
    TEST : `${API_URL}/test`
}

const URL_MAIN = {
    MAIN : `${API_URL}/main`
}

const API = {
    URL: {
        TEST: {
            URL_TEST
        }
    }
}

export default {
    API
}
