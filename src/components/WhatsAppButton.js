import React from 'react';

const WhatsAppButton = () => {
  const phoneNumber = "56983479764"; // Número de WhatsApp sin el símbolo '+'
  const message = "¡Hola! Quisiera saber más sobre los productos de KatanStore.";

  return (
    <a
      href={`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`}
      target="_blank"
      rel="noopener noreferrer"
      style={{
        position: "fixed",
        bottom: "20px",
        right: "20px",
        backgroundColor: "#25D366",
        color: "#fff",
        padding: "10px",
        borderRadius: "50%",
        textAlign: "center",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.3)",
      }}
    >
      <img 
        src="/icons.png" 
        alt="WhatsApp"
        style={{
          width: "48px",
          height: "48px",
        }}
      />
    </a>
  );
};

export default WhatsAppButton;
