// src/Popup.js
import React from 'react';
import './Popup.css'; // We'll create this CSS file next

const Popup = ({ images, onClose }) => {
  return (
    <div className="popup-overlay">
      <div className="popup-content">
        <button className="close-button" onClick={onClose}>
          &times;
        </button>
        {images.map((image, index) => (
          <img
            key={index}
            src={image.src}
            alt={image.alt}
            className="popup-image"
          />
        ))}
      </div>
    </div>
  );
};

export default Popup;