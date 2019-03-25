import React from 'react';

const initalState = {
    firstName: '',
    lastName: '',
    phoneNumber: '',
    address: '',
    validationError: ''
};

export default class NewAddressFormComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = initalState;
        this.updateState = this.updateState.bind(this);
        this.addNewAddress = this.addNewAddress.bind(this);
        this.savePerson = this.props.savePersonCallback;
    }

    updateState(sender) {
        const state = this.state;
        const { name, value } = sender.target;

        this.setState({
            ...state,
            [name]: value
        });
    }

    addNewAddress() {
        const state = this.state;
        const { firstName, lastName, phoneNumber, address } = state;

        if (firstName == '' || lastName == '' || phoneNumber == '' || address == '') {
            this.setState({
                ...state,
                validationError: 'Incorrect values!'
            })
            return;
        }

        this.savePerson({
            firstName, lastName, phoneNumber, address
        })
        this.setState(initalState);
    }

    render() {
        const state = this.state;
        console.log(state);
        return (
            <div className="row" >
                <div className="col-md-12">
                    <strong>{this.state.validationError}</strong>
                </div>
                <div className="col-md-3">
                    <input className="form-control" value={state.firstName} placeholder="First name"
                        name="firstName" onChange={this.updateState} />
                </div>
                <div className="col-md-3">
                    <input className="form-control" value={state.lastName} placeholder="Last name"
                        name="lastName" onChange={this.updateState} />
                </div>
                <div className="col-md-3">
                    <input className="form-control" value={state.phoneNumber} placeholder="Phone number"
                        name="phoneNumber" onChange={this.updateState} />
                </div>
                <div className="col-md-3">
                    <input className="form-control" value={state.address} placeholder="Address"
                        name="address" onChange={this.updateState} />
                </div>
                <div className="col-md-12 text-right top-padding">
                    <button onClick={this.addNewAddress} className="btn btn-success">Add new address</button>
                </div>
            </div>
        );
    }
}