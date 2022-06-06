import baseURL from "../util/constant/axios";
const axios = require('axios')


const Route =
    {
        registerPost: async (params)=>
        {
            let result = await axios.post(`${baseURL}/register`,params)
            return result.data
        },
        loginPost: async (params)=>
        {
            let result = await axios.post(`${baseURL}/login`,params)
            return result.data
        }
    }
export default Route