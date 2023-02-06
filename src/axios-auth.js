import axios from 'axios'

const instance = axios.create({
	baseURL: 'https://identitytoolkit.googleapis.com/v1',
	params: {
		key: 'AIzaSyDa18KtN4lpm4mDN7M9KN3onq9lRebI0o4',
	},
})

export default instance
