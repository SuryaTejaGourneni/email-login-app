import React, { useState } from 'react';

function EmailLogin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [forgotPasswordEmail, setForgotPasswordEmail] = useState('');
  const [loggedIn, setLoggedIn] = useState(false);
  const [resetPasswordRequested, setResetPasswordRequested] = useState(false);

  const handleLogin = () => {
    // Perform login logic here, e.g., send a request to your server for authentication.
    // If the login is successful, set `loggedIn` to `true`.
    // For simplicity, we'll just log the login message.
    console.log(`Logged in with email: ${email}`);
    setLoggedIn(true);
  };

  const handleForgotPassword = () => {
    // Perform the logic to send a reset password link to the user's email.
    // For simplicity, we'll just log the request.
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
          {resetPasswordRequested ? (
            <p>A password reset link has been sent to your email.</p>
          ) : (
            <div>
              <label>Forgot Password?</label>
              <input
                type="email"
                value={forgotPasswordEmail}
                onChange={(e) => setForgotPasswordEmail(e.target.value)}
              />
              <button onClick={handleForgotPassword}>Request Reset</button>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default EmailLogin;
