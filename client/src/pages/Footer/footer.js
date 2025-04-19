import React from "react";

const Footer = () => {
  return (
    <footer style={styles.footer}>
      <div style={styles.container}>
        <div style={styles.logoSection}>
          <h2 style={styles.logo}>DOANWED</h2>
          <p style={styles.description}>
            Delivering the best food and drinks to your doorstep.
          </p>
        </div>
        <div style={styles.linksSection}>
          <ul style={styles.links}>
            <li>
              <a
                href="/about"
                style={styles.link}
                onMouseEnter={(e) => (e.target.style.color = styles.linkHover.color)}
                onMouseLeave={(e) => (e.target.style.color = styles.link.color)}
              >
                About Us
              </a>
            </li>
            <li>
              <a
                href="/contact"
                style={styles.link}
                onMouseEnter={(e) => (e.target.style.color = styles.linkHover.color)}
                onMouseLeave={(e) => (e.target.style.color = styles.link.color)}
              >
                Contact
              </a>
            </li>
            <li>
              <a
                href="/privacy"
                style={styles.link}
                onMouseEnter={(e) => (e.target.style.color = styles.linkHover.color)}
                onMouseLeave={(e) => (e.target.style.color = styles.link.color)}
              >
                Privacy Policy
              </a>
            </li>
            <li>
              <a
                href="/terms"
                style={styles.link}
                onMouseEnter={(e) => (e.target.style.color = styles.linkHover.color)}
                onMouseLeave={(e) => (e.target.style.color = styles.link.color)}
              >
                Terms of Service
              </a>
            </li>
          </ul>
        </div>
        <div style={styles.socialSection}>
          <p>Follow us:</p>
          <div style={styles.socialIcons}>
            <a
              href="https://facebook.com"
              style={styles.icon}
              onMouseEnter={(e) => (e.target.style.color = styles.iconHover.color)}
              onMouseLeave={(e) => (e.target.style.color = styles.icon.color)}
            >
              Facebook
            </a>
            <a
              href="https://twitter.com"
              style={styles.icon}
              onMouseEnter={(e) => (e.target.style.color = styles.iconHover.color)}
              onMouseLeave={(e) => (e.target.style.color = styles.icon.color)}
            >
              Twitter
            </a>
            <a
              href="https://instagram.com"
              style={styles.icon}
              onMouseEnter={(e) => (e.target.style.color = styles.iconHover.color)}
              onMouseLeave={(e) => (e.target.style.color = styles.icon.color)}
            >
              Instagram
            </a>
          </div>
        </div>
      </div>
      <div style={styles.copyright}>
        <p>&copy; 2025 Your Website. All rights reserved.</p>
      </div>
    </footer>
  );
};

const styles = {
  footer: {
    backgroundColor: "#222",
    color: "#fff",
    padding: "20px 0",
    textAlign: "center",
    position: "relative",
    bottom: 0,
    width: "100%",
  },
  container: {
    maxWidth: "1200px",
    margin: "0 auto",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "20px",
  },
  logoSection: {
    textAlign: "center",
  },
  logo: {
    fontSize: "24px",
    fontWeight: "bold",
    margin: "0",
  },
  description: {
    fontSize: "14px",
    marginTop: "5px",
    color: "#aaa",
  },
  linksSection: {
    textAlign: "center",
  },
  links: {
    listStyle: "none",
    padding: 0,
    margin: 0,
    display: "flex",
    gap: "15px",
  },
  link: {
    color: "#fff",
    textDecoration: "none",
    fontSize: "14px",
    transition: "color 0.3s ease",
  },
  linkHover: {
    color: "#00f", // Bright blue color on hover
  },
  socialSection: {
    textAlign: "center",
  },
  socialIcons: {
    display: "flex",
    gap: "10px",
    justifyContent: "center",
    marginTop: "10px",
  },
  icon: {
    color: "#fff",
    textDecoration: "none",
    fontSize: "14px",
    border: "1px solid #fff",
    padding: "5px 10px",
    borderRadius: "5px",
    transition: "color 0.3s ease",
  },
  iconHover: {
    color: "#00f", // Bright blue color on hover
  },
  copyright: {
    marginTop: "20px",
    fontSize: "12px",
    color: "#aaa",
  },
};

export default Footer;