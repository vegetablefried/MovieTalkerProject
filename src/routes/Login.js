import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "../component/css/Login.module.scss";

const Login = (props) => {
  const [login, setLogin] = useState(false);

  const loginSuccess = () => {
    return <Link to={{ pathname: `/main` }}></Link>;
  };

  return (
    <div className={styles.wrap}>
      <h2 className={styles.logo}>MovieTalker</h2>
      <form className={styles.inputArea}>
        <div className={styles.loginWrap}>
          <p>id</p>
          <input type="text" />
          <p>password</p>
          <input type="text" />
        </div>
        <button className={styles.loginBtn}>로그인</button>
        <div className={styles.findjoinWrap}>
          <Link to={{ pathname: `/login/id` }}>아이디 찾기</Link>
          <Link to={{ pathname: `/login/password` }}>비밀번호 찾기</Link>
          <Link to={{ pathname: `/login/join` }}>회원가입</Link>
        </div>

        <div className={styles.snsLoginWrap}>
          <span></span>
          <p>SNS 계정으로 로그인</p>
          <span></span>
        </div>
        <div className={styles.snsBtn}>
          <button>네이버 로그인</button>
        </div>
      </form>
    </div>
  );
};

export default Login;

//movietalker.myvnc.com
