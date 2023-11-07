import React, { useState } from "react";
import Container from "../../components/container/container";
import "./c.less";
import Title from "./../title/title";
export default function Contact() {
  const [text, setText] = useState("");
  const [number, setNumber] = useState("");
  const [mes, setMes] = useState("");
  const botToken = "6525876222:AAGyEMBRnk50aBfPfj_4ZdHL6tlMLrZlM1I";
  const ChanelID = "-1002012355212";
  let DATA = `O'quvchining ismi: ${text} \nTelefon raqami: ${number} \nxabari ${mes}\n{@izzatillodev};`;
  const url = `https://api.telegram.org/bot${botToken}/sendMessage?chat_id=${ChanelID}&text=${encodeURI(
    DATA
  )}`;
  async function sendMessage() {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
  }
  return (
    <React.Fragment>
      <Title>Bog'lanish</Title>
      <section className="aloqa" id="contact">
        <Container>
          <div className="aloqa__box">
            <div className="aloqa__left">
              <div className="aloqa__left__top">
                <div className="aloqa__top__l">
                  <a href="https://www.google.com/maps/dir//Clise+IT+center+Q964%2BPV5+Andijan+170100/@40.7617597,72.3571541,16z/data=!4m8!4m7!1m0!1m5!1m1!1s0x38bced0e41f46b41:0xac7c8e4225f82962!2m2!1d72.3571541!2d40.7617597?entry=ttu" className="aloqa__location__logo">
                    <i className="fa-solid fa-location-dot f"></i>
                  </a>
                  <div className="aloqa__location__box">
                    <p className="aloqa__location__title">Manzil</p>
                    <p className="aloqa__location__text">
                      Andijon shahar , Istiqlol ko'chasi , 27-uy .
                    </p>
                  </div>
                </div>
                <div className="aloqa__top__l">
                  <a href="info@clise.uz" className="aloqa__top__logo">
                    <i className="fa-solid fa-envelope f"></i>
                  </a>
                  <div className="aloqa__email__box">
                    <p className="aloqa__email__title">Email</p>
                    <p className="aloqa__email__text">info@clise.uz</p>
                  </div>
                </div>
                <div className="aloqa__top__l">
                  <a href="tel:+998902033700" className="aloqa__number__logo">
                    <i className="fa-solid fa-phone f"></i>
                  </a>
                  <div className="aloqa__number__box">
                    <p className="aloqa__number__title">Qo'ng'iroq qiling</p>
                    <p className="aloqa__number__text">+998 90 203 37 00</p>
                  </div>
                </div>
              </div>
              <div className="aloqa__left__bottom">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3022.01183178435!2d72.354574!3d40.7617645!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38bced0e41f46b41%3A0xac7c8e4225f82962!2sClise%20IT%20center!5e0!3m2!1sru!2s!4v1699272682323!5m2!1sru!2s"
                  width="100%"
                  height="450"
                  loading="lazy"
                  referrerpolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
            <form className="aloqa__right" >
              <div className="aloqa__right__box">
                <div className="aloqa__inp__box">
                  <label htmlFor="name">Ismingiz</label>
                  <input
                    type="text"
                    id="name"
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                    required
                  />
                </div>
                <div className="aloqa__inp__box">
                  <label htmlFor="number">Telefon raqamingiz</label>
                  <input
                    type="text"
                    id="number"
                    onChange={(e) => setNumber(e.target.value)}
                    value={number}
                    required
                  />
                </div>
                <div className="aloqa__inp__box">
                  <label htmlFor="area">Xabar</label>
                  <textarea
                    id="area"
                    cols="30"
                    rows="10"
                    value={mes}
                    onChange={(e) => setMes(e.target.value)}
                    required
                  ></textarea>
                </div>
                <button
                  type="submit"
                  onClick={sendMessage}
                  aria-required
                  className="aloqa__btn"
                >
                  Yuborish
            
                </button>
              </div>
            </form>
          </div>
        </Container>
      </section>
    </React.Fragment>
  );
}
