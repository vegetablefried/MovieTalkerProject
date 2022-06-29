import React from "react";
import styles from "./css/Main_nav.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleUser } from "@fortawesome/free-solid-svg-icons";

const Main_nav = (props) => {
  return (
    <div className={styles.wrap}>
      <h2 className={styles.logo}>MovieTalker</h2>
      <FontAwesomeIcon
        className={styles.myPage}
        icon={faCircleUser}
      ></FontAwesomeIcon>
    </div>
  );
};

export default Main_nav;
