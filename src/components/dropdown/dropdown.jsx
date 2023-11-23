import React, { useState } from "react";
import "./dropdown.less";
import { Drop } from "../../data/if-drop-data";
export default function dropdown() {
  const [bar, setBar] = useState(true);
  const [bar2, setBar2] = useState(true);
  const [bar3, setBar3] = useState(true);
  const OpenBar = () => setBar(!bar);
  const OpenBar2 = () => setBar2(!bar2);
  const OpenBar3 = () => setBar3(!bar3);
  return (
    <React.Fragment>
      <div className="dropdown">

          <div
            className={bar === false ? "dropdown__box" : " dropdown__box close"}
            onClick={OpenBar}
          >
            <div className="dropdown__top">
              <li className="dropdown__title">Poydevor kurslar</li>
              <div className="dropdown__logo">
                <i className="fa-solid fa-angle-down"></i>
              </div>
            </div>
            <div className="dropdown__content">
              <p className="dropdown__text">
                Boshlang'ich kompyuter savodxonligi va boshlang'ich
                dasturlashdan tushunchalar
              </p>
            </div>
          </div>
          <div
            className={
              bar2 === false ? "dropdown__box2" : " dropdown__box2 close"
            }
            onClick={OpenBar2}
          >
            <div className="dropdown__top">
              <li className="dropdown__title">Dasturlash kurslari</li>
              <div className="dropdown__logo">
                <i className="fa-solid fa-angle-down"></i>
              </div>
            </div>
            <div className="dropdown__content">
              <p className="dropdown__text">
                Mobil telefonlar , kompyuterlar uchun ilova qilish va veb ilovalar
                yaratish !
              </p>
            </div>
          </div>

        <div
          className={
            bar3 === false ? "dropdown__box3" : " dropdown__box3 close"
          }
          onClick={OpenBar3}
        >
          <div className="dropdown__top">
            <li className="dropdown__title">Til kurslari</li>
            <div className="dropdown__logo">
              <i className="fa-solid fa-angle-down"></i>
            </div>
          </div>
          <div className="dropdown__content">
            <p className="dropdown__text">
              Bolalar hamda kattalar uchun rus va ingliz tillarini 0 dan boshlab o'rgatish
            </p>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
