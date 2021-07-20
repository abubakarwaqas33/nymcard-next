import axios from 'axios'
import Link  from '../constants/urls'

const getMenuCategories = () => {
    return axios.get(Link.API_URL + 'categories?type=Website')
}

const getPostsByCategoryId = (categoryId:Number) => {
    return axios.get(Link.API_URL + `categories/${categoryId}`)
}


export {
    getMenuCategories,
    getPostsByCategoryId
}