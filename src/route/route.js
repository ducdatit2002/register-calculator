const axios = require('axios')
const url = "http://localhost:5000"

export const route= {
    register: async(params) => {
        let result = await axios.post(`${url}/register`, params)
        return result.data
    },
    login: async (params) => {
        let result = await axios.post(`${url}/login`,params)
        return result.data
    }
}
