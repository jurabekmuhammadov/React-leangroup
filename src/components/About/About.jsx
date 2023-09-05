import React, { Component } from "react";
import style from "./About.module.scss";
export class About extends Component {
  render() {
    return (
      <section id={style.about}>
        <div className={`${style.about__container} container`}>
          <h1>
            О компании <span>LEANGROUP</span>
          </h1>
          <div className={style.body}>
            <div className={style.video}>
              <iframe
                height="300"
                src="https://www.youtube.com/embed/19u4NDOHE9w"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            </div>
            <div className={style.content}>
              <p>
                Компания ООО «ЛеанГрупп» начала свою деятельность в 1999 году и
                на сегодняшний день является ведущей компанией по производству
                ламинатных и экструзионных туб.
              </p>
              <p>
                Имея две технологии – для производства ламинатных и
                экструзионных туб, мы предлагаем вам широкий спектр
                возможностей. Большим преимуществом является собственный
                печатный цех в ламинате и in-line печать в экструзии с
                возможностью различных дополнительных опций декора. Особое
                внимание уделяется работе с поставщиками для контроля и
                поддержания качества производимой нами продукции.
              </p>
              <p>
                {" "}
                С января 2018 года компания стала членом Европейской Ассоциации
                производителей туб (ETMA), что подтверждает сильную позицию
                бренда и на рынке Европы.{" "}
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default About;
