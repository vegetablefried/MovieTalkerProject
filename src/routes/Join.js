import React, { useState } from "react";
import styles from "../component/css/join.module.scss";

const Join = (props) => {
  const [userId, setUserId] = useState("");
  const [userName, setUserName] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [userSex, setUserSex] = useState("");
  const [userNumber, setUserNumber] = useState("");
  const [userEmail, setUserEmail] = useState("");

  return (
    <div className={styles.wrap}>
      <h3>MovieTalker 회원가입</h3>
      <section className={styles.form}>
        <p>이름</p>
        <input type="text" />
        <p>아이디</p>
        <input type="text" />
        <p>비밀번호</p>
        <input type="password" />
        <p>비밀번호 확인</p>
        <input type="password" />

        <p>성별</p>
        <div className={styles.inputDivision}>
          <input name="sex" id="male" type="radio" value="남" />
          <label htmlFor="male">남</label>
          <input name="sex" id="female" type="radio" value="여" />
          <label htmlFor="female">여</label>
        </div>

        <p>핸드폰 번호</p>
        <div className={styles.inputDivision}>
          <input type="number" />
          <span>-</span>
          <input type="number" />
        </div>

        <p>이메일</p>
        <div className={styles.inputDivision}>
          <input type="text" />
          <span>@</span>
          <input type="text" />
        </div>
      </section>
    </div>
  );
};

export default Join;
