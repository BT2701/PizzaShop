// src/components/LoginModal.js
import React from 'react';
import { Modal, Button } from 'react-bootstrap';
import { FaCheckCircle, FaExclamationCircle } from 'react-icons/fa';

function LoginModal({ show, onHide, content }) {
  return (
    <Modal show={show} onHide={onHide} centered>
      <Modal.Header closeButton>
        <Modal.Title>
          {content.success ? (
            <FaCheckCircle style={{ color: 'green' }} />
          ) : (
            <FaExclamationCircle style={{ color: 'red' }} />
          )}
          {' '}
          Notification
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>{content.message}</p>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onHide}>
          Đóng
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default LoginModal;
