import React from 'react';
import AddressComponent from './address.component';
import NewAddressFormComponent from './new-address-form.component';

export default class AddressBookComponent extends React.Component {
    constructor(props) {
        super(props);

        //set the component state
        this.state = {
            addresses: []
        }

        //context binding
        this.savePersonCallback = this.savePersonCallback.bind(this);
    }

    //method which save address to array in the component state
    savePersonCallback(obj) {
        console.log('savePersonCallback');
        console.log(obj);

        const state = this.state;
        const addresses = state.addresses;
        const { firstName, lastName, phoneNumber, address } = obj;
        addresses.push({
            firstName, lastName, phoneNumber, address
        })

        this.setState({
            ...state,
            addresses
        })
    }

    //method which render view, the method is always updated after state changing
    render() {
        const { welcomeMessage } = this.props;
        const state = this.state;
        console.log(state);
        return (
            <div className="address-book-component">
                <h2>{welcomeMessage}</h2>
                <NewAddressFormComponent savePersonCallback={this.savePersonCallback} />
                <hr />
                <table className="table">
                    <thead>
                        <tr>
                            <td>First name</td>
                            <td>Last name</td>
                            <td>Phone number</td>
                            <td>Address</td>
                        </tr>
                    </thead>
                    <tbody>
                        {state.addresses.map((item, key) => new AddressComponent(item, key))}
                    </tbody>
                </table>

            </div>
        );
    }
}