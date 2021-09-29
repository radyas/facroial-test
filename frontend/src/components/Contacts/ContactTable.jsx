import { Link, useHistory } from "react-router-dom"
import { deleteContact } from "../../services/contactServices";

const ContactTable = (props) => {
    const handleOnDelete = (e, contact_id) => {
        e.preventDefault();
        if (window.confirm('Are you sure you want to delete the contact?') === true) {
            deleteContact(contact_id)
            .then((response) => {
                if (response.status === 204)
                    window.location.reload()
                else
                    alert('Unable to delete the contact.')
            })
        }
    }
    return (
        <tbody>
            {
                props.data?.map(item => (
                    <tr key={item.id}>
                        <td>{item.id}</td>
                        <td>{item.first_name}</td>
                        <td>{item.last_name}</td>
                        <td>{item.email}</td>
                        <td>{item.phone}</td>
                        <td>
                            <Link to={`/contacts/edit/${item.id}`} className='btn btn-outline-dark mx-2'>Edit</Link>
                            <Link to={`/contacts/history/${item.id}`} className='btn btn-outline-dark mx-2'>Edit History</Link>
                            <button onClick={(e) => handleOnDelete(e, item.id)} className='btn btn-outline-danger'>Delete</button>
                        </td>
                    </tr>
                ))
            }
        </tbody>
    )
}

export default ContactTable
