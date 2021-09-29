import axios from "axios";

const baseUrl = 'http://localhost:3000/contacts/';

export default function handleContactSubmit(obj){
    console.log(obj);
}

export function getAllContacts(){
    return axios.get(baseUrl)
}

export function getContact(contact_id){
    return axios.get(baseUrl + contact_id)
}

export function deleteContact(contact_id){
    return axios.delete(baseUrl + contact_id)
}

export function getContactHistory(contact_id){
    return axios.get(baseUrl + contact_id + '/history')
}

export function addContact(contact){
    return axios.post(baseUrl, contact)
}

export function updateContact(contact){
    return axios.put(baseUrl + contact.id, contact)
}

