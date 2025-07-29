import React, { useState } from "react";

const mockUser = {
  name: "Aditi Sharma",
  email: "aditi@example.com",
  designsSubmitted: 12,
  totalLikes: 340,
  totalSaved: 58,
  totalShared: 21,
  followers: 102,
};

const Profile = () => {
  const [isLogin, setIsLogin] = useState(false);
  const [isSignup, setIsSignup] = useState(false);
  const [user, setUser] = useState(mockUser); // Placeholder user

  // Simple login/signup UI logic
  if (!isLogin) {
    return (
      <div style={{ minHeight: '100vh', background: '#181818', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
        <div style={{ background: '#fff', borderRadius: 10, boxShadow: '0 2px 12px #0002', padding: 40, minWidth: 340, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <h2 style={{ marginBottom: 24 }}>{isSignup ? 'Sign Up' : 'Login'}</h2>
          <input type="email" placeholder="Email" style={{ marginBottom: 16, padding: 10, width: '100%', borderRadius: 5, border: '1px solid #ccc' }} />
          <input type="password" placeholder="Password" style={{ marginBottom: 24, padding: 10, width: '100%', borderRadius: 5, border: '1px solid #ccc' }} />
          <button onClick={() => setIsLogin(true)} style={{ background: '#222', color: '#fff', border: 'none', borderRadius: 5, padding: '10px 32px', fontWeight: 600, fontSize: 16, cursor: 'pointer', marginBottom: 12 }}>
            {isSignup ? 'Sign Up' : 'Login'}
          </button>
          <div style={{ fontSize: 14, color: '#555' }}>
            {isSignup ? 'Already have an account?' : "Don't have an account?"}
            <button onClick={() => setIsSignup(!isSignup)} style={{ background: 'none', border: 'none', color: '#007bff', marginLeft: 6, cursor: 'pointer', textDecoration: 'underline' }}>
              {isSignup ? 'Login' : 'Sign Up'}
            </button>
          </div>
        </div>
      </div>
    );
  }

  // Dashboard after login
  return (
    <div style={{ minHeight: '100vh', background: '#181818', color: '#fff', display: 'flex', flexDirection: 'column', alignItems: 'center', paddingTop: 60 }}>
      <div style={{ background: '#232323', borderRadius: 12, boxShadow: '0 2px 12px #0004', padding: 40, minWidth: 400, marginBottom: 40 }}>
        <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 32, marginBottom: 18 }}>Profile Dashboard</h2>
        <div style={{ marginBottom: 18 }}>
          <strong>Name:</strong> {user.name}
        </div>
        <div style={{ marginBottom: 18 }}>
          <strong>Email:</strong> {user.email}
        </div>
        <div style={{ display: 'flex', flexDirection: 'row', gap: 32, marginTop: 32, flexWrap: 'wrap' }}>
          <div style={{ background: '#333', borderRadius: 8, padding: 24, minWidth: 120, textAlign: 'center' }}>
            <div style={{ fontSize: 28, fontWeight: 700 }}>{user.designsSubmitted}</div>
            <div>Designs Submitted</div>
          </div>
          <div style={{ background: '#333', borderRadius: 8, padding: 24, minWidth: 120, textAlign: 'center' }}>
            <div style={{ fontSize: 28, fontWeight: 700 }}>{user.totalLikes}</div>
            <div>Total Likes</div>
          </div>
          <div style={{ background: '#333', borderRadius: 8, padding: 24, minWidth: 120, textAlign: 'center' }}>
            <div style={{ fontSize: 28, fontWeight: 700 }}>{user.totalSaved}</div>
            <div>Saved</div>
          </div>
          <div style={{ background: '#333', borderRadius: 8, padding: 24, minWidth: 120, textAlign: 'center' }}>
            <div style={{ fontSize: 28, fontWeight: 700 }}>{user.totalShared}</div>
            <div>Shared</div>
          </div>
          <div style={{ background: '#333', borderRadius: 8, padding: 24, minWidth: 120, textAlign: 'center' }}>
            <div style={{ fontSize: 28, fontWeight: 700 }}>{user.followers}</div>
            <div>Followers</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile; 