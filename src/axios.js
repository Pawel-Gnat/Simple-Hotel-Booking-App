import axios from 'axios'

const instance = axios.create({
	baseURL: 'https://hotel-app-f39d0-default-rtdb.europe-west1.firebasedatabase.app',
})

export default instance
