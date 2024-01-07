import axios from 'axios'
import { baseUrl, config } from '../../Utils/Utils'

const logout = async()=>{
    const response = await axios.get(`${baseUrl}/logout`,config)
    //to clear the local storage
    localStorage.clear()
    window.href="/"
    return response.data
}






export const UserService = {
    logout,
   
   
}