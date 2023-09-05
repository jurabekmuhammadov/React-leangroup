/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from "react";
import logo from "../../assets/images/logo.svg";
import "./MenuToggle.scss";
import style from "./Header.module.scss";

export class Header extends Component {
  constructor(props) {
    super(props);

    this.state = {
      mode: true,
    };
  }
  render() {
    const themeMode = () => {
      document.body.classList.toggle("dark");
      this.setState({ mode: !this.state.mode });
    };
    return (
      <header>
        <div className={`${style.header__container} container`}>
          <div className={style.logo}>
            <a href="#">
              <img src={logo} alt="brand-logo" />
            </a>
          </div>
          <div className={style.menu}>
            <ul>
              <li className={style.menu_item}>
                <a className={style.menu_link} href="#">
                  Продукция
                </a>
              </li>
              <li className={style.menu_item}>
                <a className={style.menu_link} href="#">
                  Сертификаты
                </a>
              </li>
              <li className={style.menu_item}>
                <a className={style.menu_link} href="#">
                  Наша команда
                </a>
              </li>
              <li className={style.menu_item}>
                <a className={style.menu_link} href="#">
                  О нас
                </a>
              </li>
              <li className={style.menu_item}>
                <a className={style.menu_link} href="#">
                  Новости
                </a>
              </li>
              <li className={style.menu_item}>
                <a className={style.menu_link} href="#">
                  Вакансии
                </a>
              </li>
              <li className={style.menu_item}>
                <a className={style.menu_link} href="#">
                  Контакты
                </a>
              </li>
            </ul>
          </div>
          <div className={style.mode}>
            <label className="switch">
              <span className="sun" onClick={themeMode}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                  <g fill="#ffd43b">
                    <circle r="5" cy="12" cx="12"></circle>
                    <path d="m21 13h-1a1 1 0 0 1 0-2h1a1 1 0 0 1 0 2zm-17 0h-1a1 1 0 0 1 0-2h1a1 1 0 0 1 0 2zm13.66-5.66a1 1 0 0 1 -.66-.29 1 1 0 0 1 0-1.41l.71-.71a1 1 0 1 1 1.41 1.41l-.71.71a1 1 0 0 1 -.75.29zm-12.02 12.02a1 1 0 0 1 -.71-.29 1 1 0 0 1 0-1.41l.71-.66a1 1 0 0 1 1.41 1.41l-.71.71a1 1 0 0 1 -.7.24zm6.36-14.36a1 1 0 0 1 -1-1v-1a1 1 0 0 1 2 0v1a1 1 0 0 1 -1 1zm0 17a1 1 0 0 1 -1-1v-1a1 1 0 0 1 2 0v1a1 1 0 0 1 -1 1zm-5.66-14.66a1 1 0 0 1 -.7-.29l-.71-.71a1 1 0 0 1 1.41-1.41l.71.71a1 1 0 0 1 0 1.41 1 1 0 0 1 -.71.29zm12.02 12.02a1 1 0 0 1 -.7-.29l-.66-.71a1 1 0 0 1 1.36-1.36l.71.71a1 1 0 0 1 0 1.41 1 1 0 0 1 -.71.24z"></path>
                  </g>
                </svg>
              </span>
              <span className="moon" onClick={themeMode}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
                  <path d="m223.5 32c-123.5 0-223.5 100.3-223.5 224s100 224 223.5 224c60.6 0 115.5-24.2 155.8-63.4 5-4.9 6.3-12.5 3.1-18.7s-10.1-9.7-17-8.5c-9.8 1.7-19.8 2.6-30.1 2.6-96.9 0-175.5-78.8-175.5-176 0-65.8 36-123.1 89.3-153.3 6.1-3.5 9.2-10.5 7.7-17.3s-7.3-11.9-14.3-12.5c-6.3-.5-12.6-.8-19-.8z"></path>
                </svg>
              </span>
              <input type="checkbox" className="input"></input>
              <span className="slider" onClick={themeMode}></span>
            </label>
          </div>
          <div className={style.burger}>
            <button id={style.open_menu}>
              <div id="menuToggle">
                <input id="checkbox" type="checkbox"></input>
                <label className="toggle" htmlFor="checkbox">
                  <div className="bar bar--top"></div>
                  <div className="bar bar--middle"></div>
                  <div className="bar bar--bottom"></div>
                </label>
              </div>
            </button>
          </div>
        </div>
      </header>
    );
  }
}

export default Header;
