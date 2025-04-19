// filepath: d:\doanweb\client\src\pages\Contact.js
import React from "react";

const Contact = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Contact Us</h1>
      <p style={styles.description}>
        We’d love to hear from you! Whether you have a question about our services, need assistance, 
        or just want to share your feedback, feel free to reach out to us. Our team is here to help.
      </p>
      <div style={styles.contactInfo}>
        <h2 style={styles.subHeading}>Get in Touch</h2>
        <p>Email: <a href="mailto:contact@doanwed.com" style={styles.link}>contact@doanwed.com</a></p>
        <p>Phone: <a href="tel:+1234567890" style={styles.link}>0912745623</a></p>
        <p>Address: 65 Chu Văn An P26 Bình Thạnh </p>
      </div>
      <div style={styles.formSection}>
        <h2 style={styles.subHeading}>Send Us a Message</h2>
        <form style={styles.form}>
          <input type="text" placeholder="Your Name" style={styles.input} />
          <input type="email" placeholder="Your Email" style={styles.input} />
          <textarea placeholder="Your Message" style={styles.textarea}></textarea>
          <button type="submit" style={styles.button}>Submit</button>
        </form>
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
  },
  heading: {
    fontSize: "32px",
    fontWeight: "bold",
    marginBottom: "10px",
    textAlign: "center",
  },
  description: {
    fontSize: "16px",
    lineHeight: "1.6",
    marginBottom: "20px",
    textAlign: "center",
  },
  contactInfo: {
    marginBottom: "30px",
    textAlign: "center",
  },
  subHeading: {
    fontSize: "24px",
    fontWeight: "bold",
    marginBottom: "10px",
  },
  link: {
    color: "#007BFF",
    textDecoration: "none",
  },
  formSection: {
    marginTop: "20px",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "10px",
  },
  input: {
    padding: "10px",
    fontSize: "16px",
    border: "1px solid #ccc",
    borderRadius: "5px",
  },
  textarea: {
    padding: "10px",
    fontSize: "16px",
    border: "1px solid #ccc",
    borderRadius: "5px",
    minHeight: "100px",
  },
  button: {
    padding: "10px 20px",
    fontSize: "16px",
    color: "#fff",
    backgroundColor: "#007BFF",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  },
};

export default Contact;