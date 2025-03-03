import axios from 'axios';

const api=axios.create({
    baseURL:"https://potterapi-fedeperin.vercel.app/en"
})

export default api;