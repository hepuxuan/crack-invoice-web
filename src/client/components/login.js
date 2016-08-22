import React from 'react';
import CINavBar from './nav-bar';
import QRCode from 'qrcode.react';
import { Modal } from 'react-bootstrap';

export function Login(props) {
    return (
        <div>
            <QRCode size={256} value={props.value} />
        </div>
    );
}

export default function LoginModal(props) {
    return (
        <Modal show={props.show}>
            <Modal.Header>
                <Modal.Title>请扫描二维码登陆</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Login value={props.value}/>
            </Modal.Body>
        </Modal>
    );
}