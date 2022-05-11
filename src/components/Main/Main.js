import "./Main.css";
import img from "../images/img.jpg";
import img1 from "../images/img1.jpg";
import img2 from "../images/img2.jpg";
import team1 from "../images/team1.jpg";
import team2 from "../images/team2.jpg";
import team3 from "../images/team3.jpg";
import team4 from "../images/team4.jpg";
import { ReactComponent as Envelope } from "../images/envelope.svg";
import { ReactComponent as PhoneSvg } from "../images/smartphone.svg";
import { ReactComponent as Antenna } from "../images/antenna.svg";
import { ReactComponent as Clock } from "../images/clock.svg";
import { ReactComponent as Diagram } from "../images/diagram.svg";
import { ReactComponent as Astronaut } from "../images/astronaut.svg";
import { ReactComponent as Instagram } from "../images/instagram.svg";
import { ReactComponent as Twitter } from "../images/twitter.svg";
import { ReactComponent as Facebook } from "../images/facebook.svg";
import { ReactComponent as Linkedin } from "../images/linkedin.svg";
import { ReactComponent as Logo_1 } from "../images/logo_1.svg";
import { ReactComponent as Logo_2 } from "../images/logo_2.svg";
import { ReactComponent as Logo_3 } from "../images/logo_3.svg";
import { ReactComponent as Logo_4 } from "../images/logo_4.svg";
import { ReactComponent as Logo_5 } from "../images/logo_5.svg";
import { ReactComponent as Logo_6 } from "../images/logo_6.svg";
import { ReactComponent as Send } from "../images/send.svg";

const Main = () => {
  return (
    <div>
      <header className="header">
        <div className="container general-nav">
          <a href="./index.html" className="logo">
            <span className="logo-web">Web</span>
            <span className="logo-studio">Studio</span>
          </a>

          <nav className="nav">
            <ul className="nav-list">
              <li className="nav-item">
                <a href="./index.html" className="nav-link current">
                  Студия
                </a>
              </li>
              <li className="nav-item">
                <a href="./portfolio.html" className="nav-link">
                  Портфолио
                </a>
              </li>
              <li className="nav-item">
                <a href="" className="nav-link">
                  Контакты
                </a>
              </li>
            </ul>
          </nav>

          <address className="address">
            <ul className="address-list">
              <li className="address-item">
                <a href="mailto:info@devstudio.com" className="address-link">
                  <Envelope />
                  info@devstudio.com
                </a>
              </li>
              <li className="address-item">
                <a href="tel:=380961111111" className="address-link">
                  <PhoneSvg />
                  +38 096 111 11 11
                </a>
              </li>
            </ul>
          </address>
        </div>
      </header>

      <main>
        <section className="hero">
          <div className="container">
            <h1 className="hero-title">
              Эффективные решения <br />
              для вашего бизнеса
            </h1>
            <button className="hero-btn" data-modal-open>
              Заказать услугу
            </button>
          </div>
        </section>

        <section className="advantages">
          <div className="container">
            <h2 className="visually-hidden">Преимущества</h2>
            <ul className="advantages-list">
              <li className="advantages-item">
                <div className="advantages-icon">
                  <Antenna />
                </div>
                <h3 className="advantages-title">Внимание к деталям</h3>
                <p className="advantages-content">
                  Идейные соображения, а также начало повседневной работы по
                  формированию позиции.
                </p>
              </li>

              <li className="advantages-item">
                <div className="advantages-icon">
                  <Clock />
                </div>
                <h3 className="advantages-title">Пунктуальность</h3>
                <p className="advantages-content">
                  Задача организации, в особенности же рамки и место обучения
                  кадров влечет за собой.
                </p>
              </li>

              <li className="advantages-item">
                <div className="advantages-icon">
                  <Diagram />
                </div>
                <h3 className="advantages-title">Планирование</h3>
                <p className="advantages-content">
                  Равным образом консультация с широким активом в значительной
                  степени обуславливает.
                </p>
              </li>

              <li className="advantages-item">
                <div className="advantages-icon">
                  <Astronaut />
                </div>
                <h3 className="advantages-title">Современные технологии</h3>
                <p className="advantages-content">
                  Значимость этих проблем настолько очевидна, что реализация
                  плановых заданий.
                </p>
              </li>
            </ul>
          </div>
        </section>

        <section className="examples">
          <div className="container">
            <h2 className="examples-section-title">Чем мы занимаемся</h2>

            <ul className="examples-list">
              <li className="examples-item">
                <img src={img} alt="человек пишет код" width="370" />
                <h3 className="examples-title">Десктопные приложения</h3>
              </li>
              <li className="examples-item">
                <img
                  src={img1}
                  alt="человек синхронизирует телефон"
                  width="370"
                />
                <h3 className="examples-title">Мобильные приложения</h3>
              </li>
              <li className="examples-item">
                <img
                  src={img2}
                  alt="человек выбирает палитру на планшете"
                  width="370"
                />
                <h3 className="examples-title">Дизайнерские решения</h3>
              </li>
            </ul>
          </div>
        </section>

        <section className="team">
          <div className="container">
            <h2 className="team-title">Наша команда</h2>

            <ul className="team-list">
              <li className="team-item">
                <img src={team1} alt="Фото Игоря" width="270" />
                <h3 className="team-member">Игорь Демьяненко</h3>
                <p className="team-content">Product Designer</p>
                <ul className="network-list">
                  <li className="network-item">
                    <a href="" className="network-link">
                      <Instagram />
                    </a>
                  </li>

                  <li className="network-item">
                    <a href="" className="network-link">
                      <Twitter />
                    </a>
                  </li>

                  <li className="network-item">
                    <a href="" className="network-link">
                      <Facebook />
                    </a>
                  </li>

                  <li className="network-item">
                    <a href="" className="network-link">
                      <Linkedin />
                    </a>
                  </li>
                </ul>
              </li>

              <li className="team-item">
                <img src={team2} alt="Фото Ольги" width="270" />
                <h3 className="team-member">Ольга Репина</h3>
                <p className="team-content">Frontend Developer</p>
                <ul className="network-list">
                  <li className="network-item">
                    <a href="" className="network-link">
                      <Instagram />
                    </a>
                  </li>

                  <li className="network-item">
                    <a href="" className="network-link">
                      <Twitter />
                    </a>
                  </li>

                  <li className="network-item">
                    <a href="" className="network-link">
                      <Facebook />
                    </a>
                  </li>

                  <li className="network-item">
                    <a href="" className="network-link">
                      <Linkedin />
                    </a>
                  </li>
                </ul>
              </li>

              <li className="team-item">
                <img src={team3} alt="Фото Николая" width="270" />
                <h3 className="team-member">Николай Тарасов</h3>
                <p className="team-content">Marketing</p>
                <ul className="network-list">
                  <li className="network-item">
                    <a href="" className="network-link">
                      <Instagram />
                    </a>
                  </li>

                  <li className="network-item">
                    <a href="" className="network-link">
                      <Twitter />
                    </a>
                  </li>

                  <li className="network-item">
                    <a href="" className="network-link">
                      <Facebook />
                    </a>
                  </li>

                  <li className="network-item">
                    <a href="" className="network-link">
                      <Linkedin />
                    </a>
                  </li>
                </ul>
              </li>

              <li className="team-item">
                <img src={team4} alt="Фото Михаила" width="270" />
                <h3 className="team-member">Михаил Ермаков</h3>
                <p className="team-content">UI Designer</p>
                <ul className="network-list">
                  <li className="network-item">
                    <a href="" className="network-link">
                      <Instagram />
                    </a>
                  </li>

                  <li className="network-item">
                    <a href="" className="network-link">
                      <Twitter />
                    </a>
                  </li>

                  <li className="network-item">
                    <a href="" className="network-link">
                      <Facebook />
                    </a>
                  </li>

                  <li className="network-item">
                    <a href="" className="network-link">
                      <Linkedin />
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </section>

        <section className="clients">
          <div className="container">
            <h2 className="clients-title">Постоянные клиенты</h2>

            <ul className="clients-list">
              <li className="clients-item">
                <a href="" className="clients-link">
                  <Logo_1 />
                </a>
              </li>

              <li className="clients-item">
                <a href="" className="clients-link">
                  <Logo_2 />
                </a>
              </li>

              <li className="clients-item">
                <a href="" className="clients-link">
                  <Logo_3 />
                </a>
              </li>

              <li className="clients-item">
                <a href="" className="clients-link">
                  <Logo_4 />
                </a>
              </li>

              <li className="clients-item">
                <a href="" className="clients-link">
                  <Logo_5 />
                </a>
              </li>

              <li className="clients-item">
                <a href="" className="clients-link">
                  <Logo_6 />
                </a>
              </li>
            </ul>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="container footer-flex">
          <div className="footer-info">
            <a href="./index.html" className="logo under">
              <span className="logo-web">Web</span>
              <span className="logo-studio-footer">Studio</span>
            </a>

            <address className="address-footer">
              г. Киев, пр-т Леси Украинки, 26
            </address>

            <ul className="footer-list">
              <li className="footer-item">
                <a href="mailto:info@example.com" className="link">
                  info@example.com
                </a>
              </li>
              <li className="footer-item">
                <a href="tel:=380991111111" className="link">
                  +38 099 111 11 11
                </a>
              </li>
            </ul>
          </div>

          <div className="join">
            <h3 className="social-link-title">Присоединяйтесь</h3>
            <ul className="social-link-list">
              <li className="social-link-item">
                <a href="" className="social-link-ref">
                  <Instagram />
                </a>
              </li>

              <li className="social-link-item">
                <a href="" className="social-link-ref">
                  <Twitter />
                </a>
              </li>

              <li className="social-link-item">
                <a href="" className="social-link-ref">
                  <Facebook />
                </a>
              </li>

              <li className="social-link-item">
                <a href="" className="social-link-ref">
                  <Linkedin />
                </a>
              </li>
            </ul>
          </div>

          <div className="subscribe">
            <form>
              <h3 className="subscribe-title">Подпишитесь на рассылку</h3>
              <div className="subscribe-box">
                <label className="subscribe-label">
                  <input
                    className="subscribe-input"
                    type="email"
                    placeholder="E-mail"
                  />
                </label>
                <button type="submit" className="subscribe-btn">
                  Подписаться
                  <Send className="send-icon" />
                </button>
              </div>
            </form>
          </div>
        </div>
      </footer>

      {/* <div className="backdrop is-hidden" data-modal>
        <div className="modal">
          <button className="close-button" data-modal-close>
            <svg width="18" height="18">
              <use href="./images/symbol-defs.svg#icon-close"></use>
            </svg>
          </button>

          <form className="form">
            <h3 className="form-title">
              Оставьте свои данные, мы вам перезвоним
            </h3>

            <div>
              <div className="form-field">
                <label for="name" className="form-label">
                  Имя
                </label>
                <div className="iconbox">
                  <input
                    className="form-input"
                    type="text"
                    name="username"
                    id="name"
                    autofocus
                  />
                  <svg className="form-icon" width="12" height="12">
                    <use href="./images/symbol-defs.svg#icon-name"></use>
                  </svg>
                </div>
              </div>

              <div className="form-field">
                <label for="phone">Телефон</label>
                <div className="iconbox">
                  <input
                    className="form-input"
                    type="tel"
                    name="phone"
                    id="phone"
                  />
                  <svg className="form-icon" width="13" height="13">
                    <use href="./images/symbol-defs.svg#icon-tel"></use>
                  </svg>
                </div>
              </div>

              <div className="form-field">
                <label for="mail">Почта</label>
                <div className="iconbox">
                  <input
                    className="form-input"
                    type="email"
                    name="mail"
                    id="mail"
                  />
                  <svg className="form-icon" width="15" height="13">
                    <use href="./images/symbol-defs.svg#icon-mail"></use>
                  </svg>
                </div>
              </div>

              <div className="form-field">
                <label for="comment">Комментарий</label>
                <textarea
                  className="form-textarea"
                  name="comment"
                  id="comment"
                  cols="30"
                  rows="10"
                  placeholder="Введите текст"
                ></textarea>
              </div>

              <div className="checkbox-field">
                <label className="checkbox-label">
                  <input className="checkbox visually-hidden" type="checkbox" />
                  <span className="checkbox-icon"></span>
                  Соглашаюсь с рассылкой и принимаю
                  <a className="terms" href="./index.html">
                    Условия договора
                  </a>
                </label>
              </div>
            </div>

            <button type="submit" className="submit-btn">
              Отправить
            </button>
          </form>
        </div>
      </div>

      <script src="./js/modal.js"></script> */}
    </div>
  );
};

export default Main;
