import axios from 'axios'
import settings from '../config/settings'

const BASE_URL = settings.services_url

class CardService {

    addNewCard(newCard) {
        let url = BASE_URL + '/cards'
        return axios.post(url, newCard)
    }

    moveCardFromList(cardId, listId) {
        let url = BASE_URL + '/cards/' + cardId + '/' + listId
        return axios.put(url, null)
    }

}

export default CardService
