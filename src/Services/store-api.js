import axios from 'axios'

const api = axios.create({
    baseURL:`https://api-dio-shop.herokuapp.com`
})
export default api