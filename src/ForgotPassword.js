import React, { useState } from 'react';
import { Button, Modal, Input } from 'antd';

const App = () => {
  const [email, setEmail] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showForgotPasswordModal, setShowForgotPasswordModal] = useState(false);
  const [showNewPasswordModal, setShowNewPasswordModal] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);

  const handleForgotPassword = () => {
    setShowForgotPasswordModal(true);
  };

  const handleForgotPasswordModalOk = () => {
    setShowForgotPasswordModal(false);
    setShowNewPasswordModal(true);
  };

  const handleForgotPasswordModalCancel = () => {
    setShowForgotPasswordModal(false);
  };

  const handleNewPasswordSubmit = () => {
    if (newPassword && newPassword === confirmPassword) {
      setShowNewPasswordModal(false);
      setShowSuccessModal(true);
      setNewPassword('');
      setConfirmPassword('');
    } else {
      alert('Passwords do not match. Please re-enter.');
    }
  };

  const handleNewPasswordModalCancel = () => {
    setShowNewPasswordModal(false);
    setNewPassword('');
    setConfirmPassword('');
  };

  const handleSuccessModalOk = () => {
    setShowSuccessModal(false);
  };

  return (
    <>
      <p>
        <a href="#" onClick={handleForgotPassword}>Forgot Password?</a>
      </p>

      <Modal
        title="Forgot Password"
        visible={showForgotPasswordModal}
        onOk={handleForgotPasswordModalOk}
        onCancel={handleForgotPasswordModalCancel}
      >
        <p>Enter your email to reset your password:</p>
        <Input
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </Modal>

      <Modal
        title="New Password"
        visible={showNewPasswordModal}
        onOk={handleNewPasswordSubmit}
        onCancel={handleNewPasswordModalCancel}
      >
        <p>Enter your new password:</p>
        <Input
          type="password"
          placeholder="New Password"
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
        />
        <p>Confirm your new password:</p>
        <Input
          type="password"
          placeholder="Confirm Password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
      </Modal>

      <Modal
        title="Password Reset Successful"
        visible={showSuccessModal}
        onOk={handleSuccessModalOk}
      >
        <p>Password reset has been done successfully!</p>
      </Modal>
    </>
  );
};

export default App;
