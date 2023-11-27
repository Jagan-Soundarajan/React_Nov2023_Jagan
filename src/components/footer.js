import React from 'react';

const Footer = () => {
  const footerStyle = {
    backgroundColor: '#333',
    color: '#fff',
    padding: '10px',
    textAlign: 'center',
    position: 'fixed',
    marginBottom:"0px",
    bottom: '0',
    width: '100%',
    Index: '1000', // Adjust the z-index if necessary

  };

  return (
    <div style={footerStyle} >
      <p>&copy; 2023 Your Company. All rights reserved.</p>
    </div>
  );
};

export default Footer;
