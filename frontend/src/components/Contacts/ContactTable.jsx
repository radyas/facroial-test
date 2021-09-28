import { Link } from "react-router-dom"
import { deleteContact } from "../../services/contactServices";

const ContactTable = (props) => {
    const handleOnDelete = (e, contact_id) => {
        e.preventDefault();
        if (window.confirm('Are you sure you want to delete the contact?') === true) {
            deleteContact(contact_id);
        }
    }
    return (
        <tbody>
            {
                props.data.map(item => (
                    <tr key={item.id}>
                        <td>{item.id}</td>
                        <td>{item.firstName}</td>
                        <td>{item.lastName}</td>
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
