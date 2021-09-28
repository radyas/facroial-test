import React, { useEffect, useState, } from 'react';
import ContactHistoryTable from '../../components/Contacts/ContactHistoryTable';

import Table from '../../components/Table'
import { getContactHistory } from '../../services/contactServices';

function ContactHistory(props) {

    const headers = ['Previous Value', 'Current Value', 'Update At']
    const [data, setData] = useState([])

    useEffect(() => {
        let contact_id = props.match.params.id;
        let contact_history = getContactHistory(contact_id)
        setData(contact_history);
    }, [props.match.params.id]);

    return (
        <div className='w-100'>

            <div className="row justify-content-center mt-3">
                <div className="col-6">
                    <Table headers={headers} class='table table-responsive table-striped' body={<ContactHistoryTable data={data} />} />
                </div>
            </div>

        </div>
    )
    
}

export default ContactHistory
