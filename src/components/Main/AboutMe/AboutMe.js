import React from "react";
import avatar from "../../../images/sergey.jpg";
import "./AboutMe.css";

function AboutMe() {
  return (
    <section className="about-me">
      <h2 className="about-me__title">Студент</h2>
      <div className="about-me__container">
        <div className="about-me__text-block">
          <h3 className="about-me__subtitle">Сергей</h3>
          <h4 className="about-me__info"> Фронтенд-разработчик, 41 год</h4>
          <p className="about-me__description">
            Я&nbsp;живу в&nbsp;Казани, закончил строительный факультет КГАСУ.
            У&nbsp;меня есть жена и&nbsp;двое детей. Я&nbsp;люблю слушать
            музыку, а&nbsp;ещё увлекаюсь бегом. Недавно поставил себе цель
            сменить профессию. С&nbsp;2018 года перепробовал много разных
            языков, пока не&nbsp;узнал про курс на&nbsp;Яндекс Практикуме. После
            того, как прошёл курс по&nbsp;веб-разработке, начал заниматься
            фриланс-заказами и&nbsp;ушёл с&nbsp;постоянной работы.
          </p>
          <a
            href="https://github.com/Alkafoy"
            className="about-me__link"
            target="_blank"
            rel="noreferrer"
          >
            Github
          </a>
        </div>
        <img src={avatar} alt="мое фото" className="about-me__photo" />
      </div>
    </section>
  );
}

export default AboutMe;
