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
                }}
              >
                Qo'ng'iroq qiling
              </p>
              <p
                className="text"
                style={{ color: "#fff", fontSize: "18px", fontWeight: "400" }}
              >
                Clise tomonindan taklif qilinayotgan ximatlar haqida qo'shimcha
                ma'lumot olish uchun qong'iroq qiling , ko'proq ma'lumot oling
                hechham ikkilamang albatta o'zingiz uchun eng muhim
                ma'lumotlarni bilib olasiz !
              </p>
            </div>
            <a
              href="tel:+998902033700" 
              className="buttoni"
              
            >
              Qo'ng'iroq qilish
            </a>
          </div>
        </Container>
      </section>
    </React.Fragment>
  );
}
