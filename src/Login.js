import React, { useState } from 'react';

function EmailLogin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [forgotPasswordEmail, setForgotPasswordEmail] = useState('');
  const [loggedIn, setLoggedIn] = useState(false);
  const [resetPasswordRequested, setResetPasswordRequested] = useState(false);

  const handleLogin = () => {
    console.log(`Logged in with email: ${email}`);
    setLoggedIn(true);
  };

  const handleForgotPassword = () => {
    console.log(`Password reset request for email: ${forgotPasswordEmail}`);
    setResetPasswordRequested(true);
  };

  return (
    <div>
      {loggedIn ? (
        <div>
          <p>You are logged in as {email}</p>
        </div>
      ) : (
        <div>
          <h2>Email Login</h2>
          <label>Email:</label>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
          <br />
          <label>Password:</label>
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
          <br />
          <button onClick={handleLogin}>Login</button>
          <br />
        </div>
      )}
    </div>
  );
}

export default EmailLogin;
