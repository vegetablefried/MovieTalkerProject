import { useState, useEffect } from "react";
import styles from "./css/Main_movieRank.module.scss";
import { Link } from "react-router-dom";
import axios from "axios";
import { Cheerio } from "cheerio";

const Main_movieRank = (props) => {
  const [value, setValue] = useState("");
  const [loader, setLoader] = useState(false);
  const [movies, setMovies] = useState([]);
  const [Data, setData] = useState([]);
  // const cheerio = require("cheerio");
  // const parsing = require("../server/fetching.js");

  const [array, setArray] = useState([
    {
      rank: 1,
      title: "마녀(魔女) Part2. The Other One",
      image:
        "https://ssl.pstatic.net/imgmovie/mdi/mit110/1963/196367_P78_142829.jpg",
    },
    {
      rank: 2,
      title: "범죄도시2",
      image:
        "https://ssl.pstatic.net/imgmovie/mdi/mit110/1926/192608_P62_104337.jpg",
    },
    {
      rank: 3,
      title: "탑건:매버릭",
      image:
        "https://ssl.pstatic.net/imgmovie/mdi/mit110/0818/81888_P12_163834.jpg",
    },
    {
      rank: 4,
      title: "브로커",
      image:
        "https://ssl.pstatic.net/imgmovie/mdi/mit110/1968/196854_P26_153756.jpg",
    },
    {
      rank: 5,
      title: "버즈라이트이어",
      image:
        "https://ssl.pstatic.net/imgmovie/mdi/mit110/2146/214603_P12_160505.jpg",
    },
  ]);

  const getMovieInfo = async (e) => {
    setLoader(true);
    try {
      if (value === "") {
        setMovies([]);
      }
      const res = await axios.get(
        `http://www.movietalker.tk/api?query=${value}`
      );
      setMovies(res);
      console.log(movies);
    } catch (err) {
      console.log("find error =>", err);
    }
    setLoader(false);
  };
  const searching = (e) => {
    e.preventDefault();
    getMovieInfo();
    console.log("제출");
  };

  // const fetchRank = async () => {
  //   try {
  //     const { data } = await axios.get("/api/rank");
  //     // state에 담기
  //     setData(data);
  //   } catch (error) {
  //     let message = "Unknown Error";
  //     if (error instanceof Error) message = error.message;
  //     console.log(message);
  //   }
  //   console.log(Data);
  // };

  // 마운트 시 데이터 가져오는 함수 실행
  // useEffect(() => {
  //   fetchRank();
  // }, []);
  // useEffect(() => {
  //   parsing();
  // }, []);

  return (
    <div className={styles.mainWrap}>
      <form className={styles.searchArea}>
        <input
          type="text"
          placeholder="영화 제목을 입력해주세요."
          autoComplete="on"
          onChange={(e) => {
            setValue(e.target.value);
            console.log(value);
          }}
        />
        <input type="submit" value="검색" onClick={searching} />
      </form>
      <ul className={styles.chartWrap}>
        {array.map((current, idx) => {
          return (
            <li key={idx}>
              <Link to={{ pathname: `/movie` }}>
                <em>{current.rank}</em>
                <img
                  src={current.image}
                  alt="error There's no main Movie Image"
                />
                <span>{current.title}</span>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Main_movieRank;
