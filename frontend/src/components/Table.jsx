import React from 'react';
const Table = (props) => {

    return (
        <div>
            <table className={props.class}>
                <thead>
                    <tr>
                        {
                            props.headers.map(item => (
                                <th key={item}>{item}</th>
                            ))
                        }
                    </tr>
                </thead>
                
                {/* table body will get rendered from passed component */}
                {props.body}

            </table>
        </div>
    );

}

export default Table

