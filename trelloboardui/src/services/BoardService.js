import axios from 'axios'
import settings from '../config/settings'

const BASE_URL = settings.services_url

class BoardService {

    getBoards() {
        let url = BASE_URL + '/boards'
        return axios.get(url)
    }

    getBoardById(id) {
        let url = BASE_URL + '/boards/' + id
        return axios.get(url)
    }

}

export default BoardService
