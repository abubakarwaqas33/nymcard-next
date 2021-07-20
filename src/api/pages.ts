import axios from 'axios'
import Link  from '../constants/urls'

const getPages = () => {
    return axios.get(Link.API_URL + 'pages')
}

const getPagesByCategory = (categoryId:Number) => {
    return axios.get(Link.API_URL + 'pages/' + categoryId)
 }

const getPageByUri = (uri:string) => {
    return axios.get(Link.API_URL + `pages?uri=${uri}`)
}

export {
    getPages,
    getPageByUri,
    getPagesByCategory
}
