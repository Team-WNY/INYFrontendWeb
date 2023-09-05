import axios from "axios";

const fetchClient = () => {
    let instance = axios.create();

    instance.interceptors.request.use((config) => {
        let token:string = ``
        if(typeof window !== 'undefined') {

            token = localStorage.getItem('Authorization') as string
        }
        config.headers!.Authorization = token ? token : '';

        return config
    });

    return instance
}

export const xhr = fetchClient()
