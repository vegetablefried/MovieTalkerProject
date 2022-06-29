import React, { useState } from "react";
import Nav from "../component/Movie_nav";
import Info from "../component/Movie_info";
import Movie_review from "../component/Movie_review";
import styles from "../component/css/Movie.module.scss";

const Movie = (props) => {
  const [writeBtn, setWriteBtn] = useState(false);

  return (
    <div className={styles.movieWrap}>
      <Nav />
      <div>
        <Info />
        <button
          onClick={(e) => setWriteBtn(true)}
          style={writeBtn ? { display: "none" } : {}}
        >
          리뷰 쓰기
        </button>
        <Movie_review writeBtn={writeBtn} />
      </div>
    </div>
  );
};

export default Movie;
