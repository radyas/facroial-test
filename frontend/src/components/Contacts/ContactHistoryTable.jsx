const ContactHistoryTable = (props) => {
    function formatDate(date){
        return date.toISOString().slice(0, 10) + ' ' + date.toISOString().slice(11, 19)
    }

    function formatField(field){
        switch (field) {
            case 'first_name':
                return 'First Name'
            case 'last_name':
                return 'Last Name'
            case 'email':
                return 'Email'
            case 'phone':
                return 'Phone'

            default:
                return field;
        }
    }

    return (
        <tbody>
            {
                props.data?.map(item => (
                    <tr key={item.id}>
                        <td>{formatField(item.attr)}</td>
                        <td>{item.previous}</td>
                        <td>{item.current}</td>
                        <td>{formatDate(new Date(item.updated_at))}</td>
                    </tr>
                ))
            }
        </tbody>
    )
}

export default ContactHistoryTable
