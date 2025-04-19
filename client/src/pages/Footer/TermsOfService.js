import React from "react";

const TermsOfService = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Terms of Service</h1>
      <p style={styles.text}>
        By using our services, you agree to comply with the following terms and conditions. Please read them carefully before using our services.
      </p>
      <div style={styles.section}>
        <h2 style={styles.subHeading}>1. Acceptance of Terms</h2>
        <p style={styles.text}>
          By accessing or using our services, you agree to be bound by these terms and conditions.
        </p>
      </div>
      <div style={styles.section}>
        <h2 style={styles.subHeading}>2. User Responsibilities</h2>
        <p style={styles.text}>
          You are responsible for providing accurate information and complying with all applicable laws while using our services.
        </p>
      </div>
      <div style={styles.section}>
        <h2 style={styles.subHeading}>3. Our Rights</h2>
        <p style={styles.text}>
          We reserve the right to modify, suspend, or terminate our services at any time without prior notice.
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

export default TermsOfService;