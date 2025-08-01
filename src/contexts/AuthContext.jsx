import React, { createContext, useContext, useState, useEffect } from 'react';
import axios from 'axios';

const AuthContext = createContext();

// Configure axios defaults
axios.defaults.baseURL = import.meta.env.VITE_API_URL || '/api';

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(localStorage.getItem('token'));
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Set up axios interceptor for authentication
  useEffect(() => {
    const requestInterceptor = axios.interceptors.request.use(
      (config) => {
        if (token) {
          config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
      },
      (error) => Promise.reject(error)
    );

    const responseInterceptor = axios.interceptors.response.use(
      (response) => response,
      (error) => {
        if (error.response?.status === 401) {
          // Token expired or invalid
          logout();
        }
        return Promise.reject(error);
      }
    );

    return () => {
      axios.interceptors.request.eject(requestInterceptor);
      axios.interceptors.response.eject(responseInterceptor);
    };
  }, [token]);

  // Load user profile on mount if token exists
  useEffect(() => {
    const loadUser = async () => {
      if (token) {
        try {
          const response = await axios.get('/users/profile');
          setUser(response.data.data);
        } catch (error) {
          console.error('Failed to load user:', error);
          // Token might be invalid, remove it
          localStorage.removeItem('token');
          setToken(null);
        }
      }
      setLoading(false);
    };

    loadUser();
  }, [token]);

  const login = async (email, password) => {
    try {
      setError(null);
      setLoading(true);

      const response = await axios.post('/auth/login', {
        email,
        password
      });

      const { user: userData, token: userToken } = response.data.data;
      
      setUser(userData);
      setToken(userToken);
      localStorage.setItem('token', userToken);
      
      return { success: true, user: userData };
    } catch (error) {
      const errorMessage = error.response?.data?.error?.message || 'Login failed';
      setError(errorMessage);
      return { success: false, error: errorMessage };
    } finally {
      setLoading(false);
    }
  };

  const register = async (userData) => {
    try {
      setError(null);
      setLoading(true);

      const response = await axios.post('/auth/register', userData);
      const { user: newUser, token: userToken } = response.data.data;
      
      setUser(newUser);
      setToken(userToken);
      localStorage.setItem('token', userToken);
      
      return { success: true, user: newUser };
    } catch (error) {
      const errorMessage = error.response?.data?.error?.message || 'Registration failed';
      setError(errorMessage);
      return { success: false, error: errorMessage };
    } finally {
      setLoading(false);
    }
  };

  const logout = () => {
    setUser(null);
    setToken(null);
    localStorage.removeItem('token');
    setError(null);
  };

  const updateProfile = async (profileData) => {
    try {
      setError(null);
      const response = await axios.put('/users/profile', profileData);
      const updatedUser = response.data.data;
      setUser(updatedUser);
      return { success: true, user: updatedUser };
    } catch (error) {
      const errorMessage = error.response?.data?.error?.message || 'Profile update failed';
      setError(errorMessage);
      return { success: false, error: errorMessage };
    }
  };

  const refreshProfile = async () => {
    try {
      const response = await axios.get('/users/profile');
      setUser(response.data.data);
      return response.data.data;
    } catch (error) {
      console.error('Failed to refresh profile:', error);
      return null;
    }
  };

  const value = {
    user,
    token,
    loading,
    error,
    login,
    register,
    logout,
    updateProfile,
    refreshProfile,
    isAuthenticated: !!user,
    isCompany: user?.userType === 'company',
    isIndividual: user?.userType === 'individual'
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;