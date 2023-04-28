import axios from "axios";
import { setupInterceptor } from "./setupInterceptor"
import { serverURL } from "./serverURL";

export const logout = async () => {
    const parsedToken = JSON.parse(localStorage.getItem('data'))
    const authToken = parsedToken.access_token;

    setupInterceptor();
    localStorage.removeItem("data");
    try{
        await axios.delete(`${serverURL()}/users/logout/${authToken}`)
    }catch(e){
        console.log(e)
    }
}