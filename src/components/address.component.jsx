import React from 'react';

//the component which is responsible to view single address item 
const AddressComponent = (item, key) => {
    const { firstName, lastName, phoneNumber, address } = item;
    return (
        <tr key={key}>
            <td>{firstName}</td>
            <td>{lastName}</td>
            <td>{phoneNumber}</td>
            <td>{address}</td>
        </tr>
    );
}

export default AddressComponent;