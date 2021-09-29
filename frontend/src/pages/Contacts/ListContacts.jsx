import React, { useState, useEffect } from 'react';

import { Link } from "react-router-dom"
import ContactTable from '../../components/Contacts/ContactTable';
import Table from '../../components/Table'

import { getAllContacts, } from '../../services/contactServices'

function ListContacts() {

    const [data, setData] = useState([]);
    const headers = ['ID', 'First Name', "Last Name", "Email", "Phone", "Actions"]

    useEffect(() => {
        getAllContacts().then((response) => {
            setData(response.data);
        })
    }, [])

    return (
        <div className='w-100'>

            <div className="row justify-content-end">
                <div className="col-3">
                    <Link to='/contacts/add' className='btn btn-outline-dark'>Add Contact</Link>
                </div>
            </div>

            <div className="row justify-content-center mt-3">
                <div className="col-6">
                    <Table headers={headers} class='table table-responsive table-striped' body={<ContactTable data={data} />} />
                </div>
            </div>

        </div>
    )
}

export default ListContacts
