import React from 'react'

export default class CurrentAddressValuesComponent extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { firstName, lastName, phoneNumber, address } = this.props;
        return (
            <div>
                <p>Current data: <strong>{`${firstName} ${lastName}, ${phoneNumber}, ${address}`}</strong></p>
            </div>
        )
    }
}