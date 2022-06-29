import React, { useState } from "react";
import FindId_success from "../component/FindId_success";
import styles from "../component/css/FindId.module.scss";

const FindId = (props) => {
  const [success, setSuccess] = useState(false);

  return (
    <div className={styles.wrap}>
      <p>아이디 찾기</p>

      <section className={styles.findId}>
        <div>
          <p>이름</p>
          <input type="text" />
        </div>
        <div>
          <p>이메일</p>
          <span>
            <input type="text" />
            <em>@</em>
          </span>
          <input type="text" />
        </div>
        <button className={styles.findBtn}>확인</button>
      </section>
      {success ? (
        <FindId_success />
      ) : (
        <p className={styles.FindId_fail}>
          해당 정보로 등록된 아이디가 없습니다.
        </p>
      )}
      <FindId_success mainText={"아이디"}></FindId_success>
    </div>
  );
};

export default FindId;
