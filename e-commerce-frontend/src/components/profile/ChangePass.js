import React, { useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';

const ChangePasswordModal = ({ show, handleClose }) => {
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmNewPassword, setConfirmNewPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Xử lý logic đổi mật khẩu ở đây
    console.log('Current Password:', currentPassword);
    console.log('New Password:', newPassword);
    console.log('Confirm New Password:', confirmNewPassword);
    handleClose();
  };

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Change Password</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="currentPassword">
            <Form.Label>Current Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="********"
              value={currentPassword}
              onChange={(e) => setCurrentPassword(e.target.value)}
            />
          </Form.Group>
          <Form.Group controlId="newPassword">
            <Form.Label>New Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="********"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
            />
          </Form.Group>
          <Form.Group controlId="confirmNewPassword">
            <Form.Label>Repeat</Form.Label>
            <Form.Control
              type="password"
              placeholder="********"
              value={confirmNewPassword}
              onChange={(e) => setConfirmNewPassword(e.target.value)}
            />
          </Form.Group>
          <Button variant="primary" type="submit" className='profile-change-btn'>
            Submit
          </Button>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

export default ChangePasswordModal;
