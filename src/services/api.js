import axios from 'axios'

const api = axios.create({
  baseURL :  'https://designhopedev.000webhostapp.com/wp-json'

})

export default api
