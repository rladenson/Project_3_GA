// AuthContext.js
import { createContext, useContext, useState } from 'react';

// Create a context to hold the authentication state
const AuthContext = createContext();

// Create a hook to access the authentication context
export const useAuth = () => {
  return useContext(AuthContext);
};

// Create a provider component to wrap the app and manage the authentication state
export const AuthProvider = ({ children }) => {
  // State to store the current authenticated user
  const [currentUser, setCurrentUser] = useState(null);

  // Function to handle user login
  const loginUser = async (username, password) => {
    try {
      // Make a POST request to the server to authenticate the user
      const response = await fetch('http://localhost:4000/sessions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });

      if (response.ok) {
        // Update the authenticated user in the context if login is successful
        setCurrentUser({ username });
      } else {
        // Handle authentication failure (e.g., display an error message)
        console.error('Authentication failed');
      }
    } catch (error) {
      // Handle network or other errors
      console.error('Authentication error:', error);
    }
  };

  // Function to handle user logout
  const logoutUser = () => {
    // Implement logic to clear session on the server-side
    setCurrentUser(null);
  };

  // Provide the authentication context to the app
  return (
    <AuthContext.Provider value={{ currentUser, loginUser, logoutUser }}>
      {children}
    </AuthContext.Provider>
  );
};
