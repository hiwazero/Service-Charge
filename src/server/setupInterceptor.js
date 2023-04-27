import axios from "axios"

export const setupInterceptor = () => {
    const parsedToken = JSON.parse(localStorage.getItem('data'))
    const authToken = parsedToken.access_token;
    console.log(authToken)

    axios.interceptors.request.use(config => {
        if(authToken){
            config.headers['Authorization'] = `Bearer ${authToken}`;
        }
        return config
    })
}