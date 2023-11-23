import React from "react";
import "./contact.less";
import Container from "../../components/container/container";
export default function ContactNumber() {
  return (
    <React.Fragment>
      <section className="number">
        <Container>
          <div className="box">
            <div className="content">
              <p
                className="title"
                style={{
                  color: "#fff",
                  fontSize: "30px",
                  marginBottom: "20px",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                Qo'ng'iroq qiling{" "}
                {/* <i
                  className="fa-solid fa-phone"
                  style={{ marginLeft: "10px", paddingTop: "2px" }}
                ></i> */}
              </p>
              <p
                className="text"
                style={{
                  color: "#fff",
                  fontSize: "18px",
                  fontWeight: "300",
                  lineHeight: "35px",
                }}
              >
                "CLISE" tomonidan taklif qilinayotgan xizmatlar haqida qo'shimcha
                ma'lumot olish uchun biz bilan bog'laning va ko'proq ma'lumotga ega bo'ling. Hechham ikkilamang va albatta
                o'zingiz uchun eng muhim ma'lumotlarni bilib oling !
              </p>
            </div>
            <a href="tel:+998902033700" className="buttoni">
              Qo'ng'iroq qilish
            </a>
          </div>
        </Container>
      </section>
    </React.Fragment>
  );
}
