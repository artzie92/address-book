import React from 'react';
import ReacDOM from 'react-dom';
import AddressBookComponent from './components/address-book.component';

const WELCOME_MESSAGE = 'Address 2 book with ReactJS';

//entrypoint to your application

ReacDOM.render(
    <AddressBookComponent welcomeMessage={WELCOME_MESSAGE} />,
    document.getElementById("page")
);