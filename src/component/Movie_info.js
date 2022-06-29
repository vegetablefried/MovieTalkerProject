import React from "react";
import styles from "./css/Movie.module.scss";

const Movie_info = (props) => {
  const movieinfo = {
    title: "<b>마녀</b>(魔女) Part2. The Other One",
    image:
      "https://ssl.pstatic.net/imgmovie/mdi/mit110/1963/196367_P78_142829.jpg",
    subtitle: "The Witch : Part2. The Other One",
    pubDate: "2021",
    director: "박훈정|",
    actor: "신시아|박은빈|서은수|진구|성유빈|조민수|이종석|김다미|",
    userRating: "6.67",
  };
  return (
    <div>
      <ul className={styles.infoWrap}>
        <li>
          <img src={movieinfo.image} alt="error There's no main Movie Image" />
        </li>
        <li>
          <h4>
            {movieinfo.title?.replace(/<b>/gi, "").replace(/<\/b>/gi, "")}
          </h4>
          <p>
            개봉년도:<span>{movieinfo.pubDate + "년"}</span>
          </p>
          <p>
            배우:
            <span>{movieinfo.actor?.replaceAll("|", " | ")}</span>
          </p>
          <p>
            평점:<span>{movieinfo.userRating}</span>
          </p>
          <button>영화추천</button>
        </li>
      </ul>
    </div>
  );
};

export default Movie_info;
