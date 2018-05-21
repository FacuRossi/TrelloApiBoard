import axios from 'axios'
import settings from '../config/settings'

const BASE_URL = settings.services_url

class ListService {

    getCardsFromList(id) {
        let url = BASE_URL + '/lists/' + id + '/cards'
        return axios.get(url)
    }

}

export default ListService
