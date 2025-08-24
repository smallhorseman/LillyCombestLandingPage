import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx'; // Ensure this path is correct

// Find the root DOM element where the React app will be mounted
const rootElement = document.getElementById('root');

// Check if the root element exists before rendering
if (rootElement) {
  // Create a React root and render the App component inside it
  ReactDOM.createRoot(rootElement).render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
} else {
  console.error('Root element with ID "root" not found in the document.');
}
