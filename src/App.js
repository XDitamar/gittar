import React, { useContext, useEffect, useState } from 'react';
import Register from './pages/Register';
import Login from './pages/Login';
import Chat from './pages/Home';
import Serch from './pages/BandsSearch';
import Home from './pages/Home';
import About from './pages/About'; // Import the About component
import './style.scss';
import { BrowserRouter, Routes, Route, Navigate, Link } from 'react-router-dom';
import { AuthContext } from './context/AuthContext';
import { auth } from './firebase';

const App = () => {
  const { currentUser } = useContext(AuthContext);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setLoading(false);
    });

    return unsubscribe;
  }, []);

  const ProtectedRoute = ({ children }) => {
    if (loading) {
      // You might want to add a loading indicator or message here
      return <div>Loading...</div>;
    }

    if (!currentUser) {
      return <Navigate to="/login" />;
    }

    return children;
  };

  return (
    <BrowserRouter>
      <div className="navbar">
        <Link to="/">Home</Link>
        <Link to="/search">Search Professionals</Link>
        <Link to="/about">About</Link>
        {/* Add more links as needed */}
      </div>
      <Routes>
        <Route path="/">
          <Route index element={<ProtectedRoute><Home /></ProtectedRoute>} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="search" element={<Serch />} />
          <Route path="chat" element={<Chat />} />
          <Route path="about" element={<About />} /> {/* Add the route for the About page */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
