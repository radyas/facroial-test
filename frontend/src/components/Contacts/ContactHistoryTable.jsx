const ContactHistoryTable = (props) => {
    return (
        <tbody>
            {
                props.data.map(item => (
                    <tr key={item.id}>
                        <td>{item.previous}</td>
                        <td>{item.current}</td>
                        <td>{item.timestamp}</td>
                    </tr>
                ))
            }
        </tbody>
    )
}

export default ContactHistoryTable
