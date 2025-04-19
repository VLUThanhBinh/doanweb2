import React from "react";

const About = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>ABOUT US</h1>
      <p style={styles.description}>
        Chào mừng đến với <strong>DOANWED</strong>, đối tác đáng tin cậy của bạn trong việc mang đến những món ăn và đồ uống tuyệt vời ngay tại nhà. 
        Sứ mệnh của chúng tôi là mang lại niềm vui cho trải nghiệm ẩm thực của bạn bằng cách cung cấp những bữa ăn tươi ngon, chất lượng cao.
      </p>
      <div style={styles.section}>
        <h2 style={styles.subHeading}>Thông Tin Công Ty</h2>
        <p style={styles.text}>
          <strong>DO AN WEB </strong>
        </p>
        <p style={styles.text}>
          <strong>Địa chỉ:</strong> Tầng 26, Tòa nhà CII Tower, số 152 Điện Biên Phủ, Phường 25, Quận Bình Thạnh, Thành phố Hồ Chí Minh, Việt Nam
        </p>
        <p style={styles.text}>
          <strong>Điện thoại:</strong> (028) 39309168
        </p>
        <p style={styles.text}>
          <strong>Tổng đài:</strong> 1900-1533
        </p>
        <p style={styles.text}>
          <strong>Mã số thuế:</strong> 0303883266
        </p>
        <p style={styles.text}>
          <strong>Ngày cấp:</strong> 15/07/2008 – <strong>Nơi cấp:</strong> Cục Thuế Hồ Chí Minh
        </p>
        <p style={styles.text}>
          <strong>Hộp thư góp ý:</strong> <a href="mailto:jbvnfeedback@jollibee.com.vn" style={styles.link}>jbvnfeedback@jollibee.com.vn</a>
        </p>
      </div>
      <div style={styles.section}>
        <h2 style={styles.subHeading}>Tại Sao Chọn Chúng Tôi?</h2>
        <p style={styles.text}>
          Với đội ngũ đầu bếp tận tâm, chuyên gia giao hàng và nhân viên chăm sóc khách hàng, chúng tôi đảm bảo rằng mọi đơn hàng đều được xử lý cẩn thận. 
          Cho dù bạn đang lên kế hoạch cho một bữa tối gia đình, một buổi hẹn hò lãng mạn, hay một bữa ăn đơn giản, DOANWED luôn sẵn sàng làm cho nó trở nên đặc biệt.
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
  description: {
    fontSize: "18px",
    marginBottom: "30px",
    textAlign: "center",
  },
  section: {
    marginBottom: "30px",
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
  link: {
    color: "#007BFF",
    textDecoration: "none",
  },
};

export default About;