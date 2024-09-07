import React, { useState } from 'react';
import './offersCardModal.css'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap'; import { useTranslation } from 'react-i18next';
import OffersCardCarousel from './../offersCardCarousel/offersCardCarousel'
function OfferCardModal(props) {
    const [t, i18n] = useTranslation("global");
    const changeLange = (lang) => {
        i18n.changeLanguage(lang)
    }
    const [modal, setModal] = useState(false);

    const toggle = () => setModal(!modal);
    return (
        <div className="CardsOff">
            <Button onClick={toggle}>
                <img src={props.img} alt="" />
            </Button>
            <Modal isOpen={modal} toggle={toggle} >
                <ModalHeader toggle={toggle}></ModalHeader>
                <ModalBody>
                    <OffersCardCarousel />
                </ModalBody>
                <ModalFooter>
                </ModalFooter>
            </Modal>
        </div>
    )
}

export default OfferCardModal;