import axios from 'axios'
import Link  from '../constants/urls'
import { EmailSubscriptionEntity, LeadEntity } from '../models/email-subscription'


const createEmailSubscription = (formData: EmailSubscriptionEntity) => {
    return axios.post(Link.API_URL + `/email-subscriptions`, formData)
}

const submitContactusForm = (formData:LeadEntity) => {
    return axios.post(Link.API_URL + `leads`, formData)
}

export {
    createEmailSubscription,
    submitContactusForm
}