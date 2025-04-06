import React from "react";
import { toast } from "react-toastify";

const PaymentSuccessModal = ({ downloadUrl, expiresAt, onClose }) => {
  const copyToClipboard = () => {
    navigator.clipboard.writeText(downloadUrl);
    toast.success("Download link copied to clipboard!");
  };

  const formattedExpiry = new Date(expiresAt).toLocaleString();

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        zIndex: 1000,
        padding: "1rem",
      }}
    >
      <div
        style={{
          backgroundColor: "#fff",
          borderRadius: "12px",
          maxWidth: "400px",
          width: "100%",
          padding: "24px",
          textAlign: "center",
          boxShadow: "0 10px 25px rgba(0,0,0,0.2)",
        }}
      >
        <h2
          style={{
            fontSize: "22px",
            fontWeight: "bold",
            color: "#2B3513",
            marginBottom: "10px",
          }}
        >
          Payment Successful
        </h2>

        <p style={{ color: "#444", marginBottom: "20px", fontSize: "15px" }}>
          Your payment was successful! Here is your download link. This link is
          valid until <strong>{formattedExpiry}</strong>.
        </p>

        <button
          onClick={() => window.open(downloadUrl, "_blank")}
          style={{
            backgroundColor: "#2B3513",
            color: "#fff",
            border: "none",
            borderRadius: "8px",
            padding: "10px 16px",
            fontSize: "14px",
            cursor: "pointer",
            marginBottom: "10px",
            width: "100%",
          }}
        >
          Download PDF
        </button>

        <button
          onClick={copyToClipboard}
          style={{
            backgroundColor: "#fff",
            color: "#2B3513",
            border: "2px solid #2B3513",
            borderRadius: "8px",
            padding: "10px 16px",
            fontSize: "14px",
            cursor: "pointer",
            width: "100%",
            marginBottom: "10px",
          }}
        >
          Copy Download Link
        </button>

        <button
          onClick={onClose}
          style={{
            background: "none",
            border: "none",
            color: "#888",
            fontSize: "13px",
            marginTop: "10px",
            textDecoration: "underline",
            cursor: "pointer",
          }}
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default PaymentSuccessModal;
