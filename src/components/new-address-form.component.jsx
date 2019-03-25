import React from 'react';

//an initial component state
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

        //set initial state
        this.state = initalState;

        //context bindings
        this.updateState = this.updateState.bind(this);
        this.addNewAddress = this.addNewAddress.bind(this);

        //reference to props function which is invoking during on save event
        this.savePerson = this.props.savePersonCallback;
    }

    //state updating
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

        //data validation
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

        //state clean
        this.setState(initalState);
    }

    render() {
        const state = this.state;
        console.log(state);
        return (
            <div className="row top-padding">
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