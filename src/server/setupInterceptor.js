import axios from "axios"

export const setupInterceptor = () => {
    const authToken = localStorage.getItem('authToken')

    axios.interceptors.request.use(config => {
        if(authToken){
            config.headers['Authorization'] = `Bearer ${authToken}`;
        }

        return config
    })
}