import React from "react";

const PrivacyPolicy = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Privacy Policy</h1>
      <p style={styles.text}>
        We are committed to protecting your privacy. This Privacy Policy explains how we collect, use, and safeguard your personal information when you use our services.
      </p>
      <div style={styles.section}>
        <h2 style={styles.subHeading}>1. Information We Collect</h2>
        <p style={styles.text}>
          We may collect personal information such as your name, email address, phone number, and delivery address when you use our services.
        </p>
      </div>
      <div style={styles.section}>
        <h2 style={styles.subHeading}>2. How We Use Your Information</h2>
        <p style={styles.text}>
          Your information is used to process orders, provide customer service, and improve your experience on our platform.
        </p>
      </div>
      <div style={styles.section}>
        <h2 style={styles.subHeading}>3. Information Security</h2>
        <p style={styles.text}>
          We implement strict security measures to protect your personal information from unauthorized access, loss, or disclosure.
        </p>
      </div>
    </div>
  );
};

const styles = {
  container: {
    padding: "20px",
    maxWidth: "800px",
    margin: "0 auto",
    fontFamily: "Arial, sans-serif",
    color: "#333",
    lineHeight: "1.6",
  },
  heading: {
    fontSize: "36px",
    fontWeight: "bold",
    marginBottom: "20px",
    textAlign: "center",
  },
  subHeading: {
    fontSize: "24px",
    fontWeight: "bold",
    marginBottom: "10px",
  },
  text: {
    fontSize: "16px",
    marginBottom: "10px",
  },
  section: {
    marginBottom: "30px",
  },
};

export default PrivacyPolicy;