import React from "react";
import styles from "./css/FindId.module.scss";
import { Link } from "react-router-dom";

const FindId_success = (props) => {
  return (
    <section className={styles.successWrap}>
      <p>조성진님의 {props.mainText}는</p>
      <p>
        <span>jsj3063</span> 입니다.
      </p>
      <div>
        <Link to={{ pathname: `/login` }}>로그인 하러가기</Link>
        <Link to={{ pathname: `/login/password` }}>비밀번호 찾기</Link>
      </div>
    </section>
  );
};

export default FindId_success;
