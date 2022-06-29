import React from "react";
import FindId_success from "../component/FindId_success";
import styles from "../component/css/FindId.module.scss";

const FindPassword = (props) => {
  return (
    <div className={styles.wrap}>
      <p>비밀번호 찾기</p>

      <section className={styles.findId}>
        <div>
          <p>아이디</p>
          <input type="text" />
        </div>
        <div>
          <p>주민등록번호</p>
          <span>
            <input type="text" />
            <em>-</em>
          </span>
          <input type="text" />
        </div>
        <button className={styles.findBtn}>확인</button>
      </section>
      <p className={styles.FindId_fail}>
        해당 정보로 등록된 아이디가 없습니다.
      </p>
      <FindId_success mainText={"비밀번호"} />
    </div>
  );
};

export default FindPassword;
