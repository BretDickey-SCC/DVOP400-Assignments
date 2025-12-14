import React, { useState, useEffect } from 'react';
import './DarkMode.css'; // Import the CSS file

const DarkModeToggle = () => {
  // Check localStorage for the initial theme, default to 'light'
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');

  // Function to toggle between 'light' and 'dark' themes
    const toggleTheme = () => {
        document.documentElement.classList.toggle("dark-mode");
        document.querySelectorAll(".inverted").forEach((result) => {
        result.classList.toggle("invert");
    })

    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme); // Persist the choice
  };

  // Use useEffect to apply the theme class to the document body
  useEffect(() => {
    document.body.className = theme;
  }, [theme]); // Reruns whenever the theme state changes

  return (
    <button onClick={toggleTheme} className="theme-toggle-button">
      {theme === 'dark' ? '☀️ Light' : '🌙 Dark'}
    </button>
  );
};

export default DarkModeToggle;
