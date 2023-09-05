import React, { Component } from "react";
import style from "./News.module.scss";

export class NewsCard extends Component {
  render() {
    const { img, date, content } = this.props;
    return (
      <div className={style.news__card}>
        <div className={style.img}>
          <img src={img} alt="img" />
        </div>
        <span>{date}</span>
        <p>{content}</p>
      </div>
    );
  }
}

export default NewsCard;
