import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft } from "@fortawesome/free-solid-svg-icons";
import styles from "./css/Movie.module.scss";

const Movie_nav = (props) => {
  let navigate = useNavigate();
  return (
    <div className={styles.navWrap}>
      <span>
        <FontAwesomeIcon
          className={styles.backBtn}
          icon={faAngleLeft}
          onClick={() => navigate(-1)}
        />
      </span>
    </div>
  );
};

export default Movie_nav;
