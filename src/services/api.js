import axios from 'axios' 
const url = 'http://127.0.0.1:3333/users'


// id here used for when edit request is done , so we show single data 
 export  const getUsers = async (id)=> {
    id = id || '';
    return axios.get(`${url}/${id}`)
}
export  const addUserToList = async (user)=> {
    return axios.post(url, user)
}
export  const deleteUserFromList = async (id)=> {
    return await axios.delete(`${url}/${id}`)
}

export  const editUserToList = async (id, user)=> {
    return await axios.put(`${url}/${id}` , user)
}
