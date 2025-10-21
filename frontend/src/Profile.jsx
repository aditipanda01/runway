import React, { useState, useEffect } from "react";
import { useAuth } from "./contexts/AuthContext";
import { useNavigate } from "react-router-dom";
import DesignSubmissionForm from "./components/DesignSubmissionForm";

const Profile = () => {
  const { user, logout, isAuthenticated } = useAuth();
  const navigate = useNavigate();
  const [stats, setStats] = useState({
    designsCount: 0,
    totalLikes: 0,
    totalSaved: 0,
    totalShared: 0,
    followers: 0,
  });
  const [myDesigns, setMyDesigns] = useState([]);
  const [showSubmitForm, setShowSubmitForm] = useState(false);
  const [refreshTrigger, setRefreshTrigger] = useState(0);

  useEffect(() => {
    if (!isAuthenticated) {
      navigate("/login-signup");
    } else {
      loadStats();
      loadMyDesigns();
    }
  }, [isAuthenticated, refreshTrigger]); // Added refreshTrigger dependency

  const loadStats = async () => {
    const token = localStorage.getItem("token");
    try {
      const response = await fetch("http://localhost:5000/api/users/profile", {
        headers: { Authorization: `Bearer ${token}` },
      });
      const data = await response.json();
      if (data.success) {
        setStats(data.data.stats || stats);
      }
    } catch (error) {
      console.error("Failed to load stats:", error);
    }
  };

  const loadMyDesigns = async () => {
    if (!user) return;
    const token = localStorage.getItem("token");
    try {
      const response = await fetch(`http://localhost:5000/api/designs?userId=${user._id}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      const data = await response.json();
      if (data.success) {
        setMyDesigns(data.data.designs);
      }
    } catch (error) {
      console.error("Failed to load designs:", error);
    }
  };

  // Handle successful design submission with real-time refresh
  const handleDesignSuccess = (newDesign) => {
    console.log('✅ New design submitted:', newDesign);
    
    // Trigger immediate refresh
    setRefreshTrigger(prev => prev + 1);
    
    // Also manually update the designs list for instant feedback
    setMyDesigns(prev => [newDesign, ...prev]);
    
    // Update stats count
    setStats(prev => ({
      ...prev,
      designsCount: prev.designsCount + 1
    }));
    
    // Close the form
    setShowSubmitForm(false);
    
    // Show success message
    alert('🎉 Design submitted successfully! Your design is now visible in your profile and category page.');
  };

  if (!user) return null;

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#181818",
        color: "#fff",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        paddingTop: 60,
        paddingBottom: 60,
      }}
    >
      {/* Profile Dashboard */}
      <div
        style={{
          background: "#232323",
          borderRadius: 12,
          boxShadow: "0 2px 12px #0004",
          padding: 40,
          minWidth: 400,
          marginBottom: 40,
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: 24,
          }}
        >
          <h2
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: 32,
              margin: 0,
            }}
          >
            Profile Dashboard
          </h2>
          <button
            onClick={() => {
              logout();
              navigate("/");
            }}
            style={{
              background: "#dc3545",
              color: "#fff",
              border: "none",
              borderRadius: 6,
              padding: "0.5rem 1rem",
              cursor: "pointer",
              fontWeight: 600,
            }}
          >
            Logout
          </button>
        </div>

        <div style={{ marginBottom: 18 }}>
          <strong>Name:</strong>{" "}
          {user.firstName ? `${user.firstName} ${user.lastName}` : user.companyName}
        </div>
        <div style={{ marginBottom: 18 }}>
          <strong>Email:</strong> {user.email}
        </div>
        <div style={{ marginBottom: 18 }}>
          <strong>Type:</strong>{" "}
          {user.userType === "individual" ? "Individual Designer" : "Company"}
        </div>
        {user.username && (
          <div style={{ marginBottom: 18 }}>
            <strong>Username:</strong> @{user.username}
          </div>
        )}

        <div
          style={{
            display: "flex",
            flexDirection: "row",
            gap: 32,
            marginTop: 32,
            flexWrap: "wrap",
          }}
        >
          <div
            style={{
              background: "#333",
              borderRadius: 8,
              padding: 24,
              minWidth: 120,
              textAlign: "center",
            }}
          >
            <div style={{ fontSize: 28, fontWeight: 700 }}>{stats.designsCount}</div>
            <div>Designs Submitted</div>
          </div>
          <div
            style={{
              background: "#333",
              borderRadius: 8,
              padding: 24,
              minWidth: 120,
              textAlign: "center",
            }}
          >
            <div style={{ fontSize: 28, fontWeight: 700 }}>{stats.totalLikes}</div>
            <div>Total Likes</div>
          </div>
          <div
            style={{
              background: "#333",
              borderRadius: 8,
              padding: 24,
              minWidth: 120,
              textAlign: "center",
            }}
          >
            <div style={{ fontSize: 28, fontWeight: 700 }}>{stats.totalSaved}</div>
            <div>Saved</div>
          </div>
          <div
            style={{
              background: "#333",
              borderRadius: 8,
              padding: 24,
              minWidth: 120,
              textAlign: "center",
            }}
          >
            <div style={{ fontSize: 28, fontWeight: 700 }}>{stats.totalShared}</div>
            <div>Shared</div>
          </div>
          <div
            style={{
              background: "#333",
              borderRadius: 8,
              padding: 24,
              minWidth: 120,
              textAlign: "center",
            }}
          >
            <div style={{ fontSize: 28, fontWeight: 700 }}>{stats.followers}</div>
            <div>Followers</div>
          </div>
        </div>
      </div>

      {/* Submit New Design Button */}
      <button
        onClick={() => setShowSubmitForm(true)}
        style={{
          background: "#007bff",
          color: "#fff",
          border: "none",
          borderRadius: 6,
          padding: "0.75rem 1.5rem",
          cursor: "pointer",
          fontWeight: 600,
          marginBottom: "2rem",
        }}
      >
        + Submit New Design
      </button>

      {/* My Submitted Designs */}
      <div style={{ width: "100%", maxWidth: 1200 }}>
        <h3 style={{ marginBottom: 16 }}>My Submitted Designs ({myDesigns.length})</h3>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
            gap: "1rem",
          }}
        >
          {myDesigns.map((design) => (
            <div
              key={design._id}
              style={{
                background: "#333",
                borderRadius: 8,
                overflow: "hidden",
              }}
            >
              <div
                style={{
                  height: 200,
                  background: design.images[0]
                    ? `url(${design.images[0].url})`
                    : "#444",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              />
              <div style={{ padding: "1rem" }}>
                <div style={{ fontWeight: 600, marginBottom: "0.5rem" }}>
                  {design.title}
                </div>
                <div
                  style={{
                    fontSize: "0.8rem",
                    color: "#ccc",
                    textTransform: "capitalize",
                  }}
                >
                  {design.category}
                </div>
                {design.tags && design.tags.length > 0 && (
                  <div style={{ 
                    fontSize: "0.7rem", 
                    color: "#aaa", 
                    marginTop: "0.5rem" 
                  }}>
                    {design.tags.slice(0, 2).map(tag => `#${tag}`).join(' ')}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Design Submission Modal */}
      {showSubmitForm && (
        <DesignSubmissionForm
          onClose={() => setShowSubmitForm(false)}
          onSuccess={handleDesignSuccess}
        />
      )}
    </div>
  );
};

export default Profile;