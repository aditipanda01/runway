import React, { useState, useEffect } from "react";
import { useAuth } from "./contexts/AuthContext";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const { user, logout, isAuthenticated } = useAuth();
  const navigate = useNavigate();
  const [stats, setStats] = useState({
    designsSubmitted: 0,
    totalLikes: 0,
    totalSaved: 0,
    totalShared: 0,
    followers: 0,
  });

  useEffect(() => {
    if (!isAuthenticated) {
      navigate('/login-signup');
    } else {
      loadStats();
    }
  }, [isAuthenticated]);

  const loadStats = async () => {
    // Load actual stats from API
    const token = localStorage.getItem('token');
    try {
      const response = await fetch('/api/users/profile', {
        headers: { Authorization: `Bearer ${token}` }
      });
      const data = await response.json();
      if (data.success) {
        setStats(data.data.stats || stats);
      }
    } catch (error) {
      console.error('Failed to load stats:', error);
    }
  };

  if (!user) return null;

  return (
    <div style={{ minHeight: '100vh', background: '#181818', color: '#fff', display: 'flex', flexDirection: 'column', alignItems: 'center', paddingTop: 60 }}>
      <div style={{ background: '#232323', borderRadius: 12, boxShadow: '0 2px 12px #0004', padding: 40, minWidth: 400, marginBottom: 40 }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 24 }}>
          <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 32, margin: 0 }}>Profile Dashboard</h2>
          <button
            onClick={() => {
              logout();
              navigate('/');
            }}
            style={{ background: '#dc3545', color: '#fff', border: 'none', borderRadius: 6, padding: '0.5rem 1rem', cursor: 'pointer', fontWeight: 600 }}
          >
            Logout
          </button>
        </div>
        
        <div style={{ marginBottom: 18 }}>
          <strong>Name:</strong> {user.firstName ? `${user.firstName} ${user.lastName}` : user.companyName}
        </div>
        <div style={{ marginBottom: 18 }}>
          <strong>Email:</strong> {user.email}
        </div>
        <div style={{ marginBottom: 18 }}>
          <strong>Type:</strong> {user.userType === 'individual' ? 'Individual Designer' : 'Company'}
        </div>
        {user.username && (
          <div style={{ marginBottom: 18 }}>
            <strong>Username:</strong> @{user.username}
          </div>
        )}
        
        <div style={{ display: 'flex', flexDirection: 'row', gap: 32, marginTop: 32, flexWrap: 'wrap' }}>
          <div style={{ background: '#333', borderRadius: 8, padding: 24, minWidth: 120, textAlign: 'center' }}>
            <div style={{ fontSize: 28, fontWeight: 700 }}>{stats.designsSubmitted}</div>
            <div>Designs Submitted</div>
          </div>
          <div style={{ background: '#333', borderRadius: 8, padding: 24, minWidth: 120, textAlign: 'center' }}>
            <div style={{ fontSize: 28, fontWeight: 700 }}>{stats.totalLikes}</div>
            <div>Total Likes</div>
          </div>
          <div style={{ background: '#333', borderRadius: 8, padding: 24, minWidth: 120, textAlign: 'center' }}>
            <div style={{ fontSize: 28, fontWeight: 700 }}>{stats.totalSaved}</div>
            <div>Saved</div>
          </div>
          <div style={{ background: '#333', borderRadius: 8, padding: 24, minWidth: 120, textAlign: 'center' }}>
            <div style={{ fontSize: 28, fontWeight: 700 }}>{stats.totalShared}</div>
            <div>Shared</div>
          </div>
          <div style={{ background: '#333', borderRadius: 8, padding: 24, minWidth: 120, textAlign: 'center' }}>
            <div style={{ fontSize: 28, fontWeight: 700 }}>{stats.followers}</div>
            <div>Followers</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;