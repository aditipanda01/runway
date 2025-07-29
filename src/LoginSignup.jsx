import React, { useState } from "react";
import UserDashboard from './UserDashboard';

const LoginSignup = () => {
  const [isSignup, setIsSignup] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoggedIn(true);
  };

  if (isLoggedIn) {
    return <UserDashboard />;
  }

  return (
    <div style={{ minHeight: '100vh', background: '#181818', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
      <div style={{ background: '#fff', borderRadius: 10, boxShadow: '0 2px 12px #0002', padding: 40, minWidth: 340, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <h2 style={{ marginBottom: 24 }}>{isSignup ? 'Sign Up' : 'Login'}</h2>
        <form onSubmit={handleSubmit} style={{ width: '100%' }}>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            style={{ marginBottom: 16, padding: 10, width: '100%', borderRadius: 5, border: '1px solid #ccc' }}
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            style={{ marginBottom: 24, padding: 10, width: '100%', borderRadius: 5, border: '1px solid #ccc' }}
            required
          />
          <button type="submit" style={{ background: '#222', color: '#fff', border: 'none', borderRadius: 5, padding: '10px 32px', fontWeight: 600, fontSize: 16, cursor: 'pointer', marginBottom: 12 }}>
            {isSignup ? 'Sign Up' : 'Login'}
          </button>
        </form>
        <div style={{ fontSize: 14, color: '#555' }}>
          {isSignup ? 'Already have an account?' : "Don't have an account?"}
          <button onClick={() => setIsSignup(!isSignup)} style={{ background: 'none', border: 'none', color: '#007bff', marginLeft: 6, cursor: 'pointer', textDecoration: 'underline' }}>
            {isSignup ? 'Login' : 'Sign Up'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default LoginSignup; 