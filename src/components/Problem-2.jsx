import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Problem2 = () => {
    const [contacts, setContats] = useState([]);
    const [usContacts, setUSContacts] = useState([]);

    useEffect(() => {
        axios.get('https://contact.mediusware.com/api/contacts/')
            .then(response => {
                setContats(response.data.results);
            })
            .catch(error =>{
                console.log(error);
            });

        axios.get('https://contact.mediusware.com/api/country-contacts/United States/')
            .then(response => {
                setUSContacts(response.data.results);
            })
            .catch(error => {
                console.log(error);
            });
    }, []);

    const renderContacts = (contacts) => {
        return contacts.map(item => {
            console.log(item);
            return (
            <li key={item.id}>
                {item.id} - {item.phone}
            </li>
        )})
    }

    const openUSContactsModal = () => {
        const allContactsModal = document.getElementById('allContactsModal');
        const usContactsModal = document.getElementById('usContactsModal');
        allContactsModal.classList.remove('show');
        usContactsModal.classList.add('show');
    };
    
    const openAllContactsModal = () => {
        const allContactsModal = document.getElementById('allContactsModal');
        const usContactsModal = document.getElementById('usContactsModal');
        usContactsModal.classList.remove('show');
        allContactsModal.classList.add('show');
    };


    return (

        <div className="container">
            <div className="row justify-content-center mt-5">
                <h4 className='text-center text-uppercase mb-5'>Problem-2</h4>
                
                <div className="d-flex justify-content-center gap-3">
                <button className="btn btn-lg btn-outline-primary" type="button" data-bs-toggle="modal" data-bs-target="#allContactsModal">
                    All Contacts
                </button>
                <button className="btn btn-lg btn-outline-warning" type="button" data-bs-toggle="modal" data-bs-target="#usContactsModal">
                    US Contacts
                </button>
            </div>
                
            </div>

            <div
                className="modal fade"
                id="allContactsModal"
                tabIndex="-1"
                aria-labelledby="allContactsModalLabel"
                aria-hidden="true"
            >
            <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="allContactsModalLabel">
                            All Contacts
                        </h5>
                    <button
                        type="button"
                        className="btn-close"
                        data-bs-dismiss="modal"
                        aria-label="Close"
                    ></button>
                    </div>
                    <div className="modal-body">
                        <ul>
                            {renderContacts(contacts)}
                        </ul>
                    </div>
                    <div className="modal-footer">
                        <button
                            type="button"
                            className="btn btn-outline-warning"
                            onClick={openAllContactsModal}
                        >
                            Show All Contacts
                        </button>
                    </div>
                    <div className="modal-footer">
                            <button
                                type="button"
                                className="btn btn-outline-warning"
                                onClick={openUSContactsModal}
                            >
                                Show US Contacts
                            </button>
                    </div>

                </div>
            </div>
        </div>

            <div
                className="modal fade"
                id="usContactsModal"
                tabIndex="-1"
                aria-labelledby="usContactsModalLabel"
                aria-hidden="true"
            >
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="usContactsModalLabel">
                                US Contacts
                            </h5>
                            <button
                                type="button"
                                className="btn-close"
                                data-bs-dismiss="modal"
                                aria-label="Close"
                            ></button>
                        </div>
                        <div className="modal-body">
                            <ul>
                                {renderContacts(usContacts)}
                            </ul>
                        </div>
                        <div className="modal-footer">
                        <button
                            type="button"
                            className="btn btn-outline-warning"
                            onClick={openAllContactsModal}
                        >
                            Show All Contacts
                        </button>
                        </div>
                        <div className="modal-footer">
                            <button
                                type="button"
                                className="btn btn-outline-warning"
                                onClick={openUSContactsModal}
                            >
                                Show US Contacts
                            </button>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Problem2;

