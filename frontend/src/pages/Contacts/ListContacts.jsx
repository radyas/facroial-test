import { Link } from "react-router-dom"

function ListContacts() {
    return (
        <div className='w-100'>
            <div className='row justify-content-end mb-5'>
                <div className="col-3">
                    <Link to='/contacts/add' className='btn btn-outline-dark'>Add Contact</Link>
                </div>            
            </div>
            <div className='row justify-content-center mb-5'>
                <div className="col-6">
                    <Link to='/contacts/add' className='btn btn-outline-dark'>Add Contact</Link>
                </div>            
            </div>
        </div>
    )
}

export default ListContacts
