import axios from 'axios';
const baseUrl = ''

export default {
    postContact (url = baseUrl+'postContact/'){
        return {
            fetchAll: () => axios.get(url),
            fetchById: id => axios.get(url+id),
            create: newContact => axios.post(url,newContact),
            update: (id,updateContact) => axios.put(url+id,updateContact),
            delete: id => axios.delete(url+id)
        }
    }
}