import ContactHistory from "../pages/Contacts/ContactHistory";

export default function handleContactSubmit(obj){
    console.log(obj);
}

export function getAllContacts(){

    const listContacts = [
        {
            "id": 1,
            "firstName": "Test",
            "lastName": "One",
            'phone': 12354,
            "email": "testone@test.com"
        },
        {
            "id": 2,
            "firstName": "Test",
            "lastName": "One",
            'phone': 12354,
            "email": "testone@test.com"
        }
    ]

    return listContacts;

}

export function getContact(contact_id){
    return {
        "id": 1,
        "firstName": "Test",
        "lastName": "One",
        'phone': 12354,
        "email": "testone@test.com"
    }
}

export function deleteContact(contact_id){
    return {
        "id": 1,
        "firstName": "Test",
        "lastName": "One",
        'phone': 12354,
        "email": "testone@test.com"
    }
}

export function getContactHistory(contact_id){
    return [
        {
            "id": 1,
            "contact_id": 1,
            "previous": "One",
            'current': 12354,
            "timestamp": "2021-05-10 00:02:21"
        },
        {
            "id": 2,
            "contact_id": 1,
            "previous": "One",
            'current': "12354",
            "timestamp": "2021-05-10 00:02:21"
        }
    ]
}

