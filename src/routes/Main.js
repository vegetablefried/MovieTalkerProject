import React from "react";
import { Link } from "react-router-dom";
import Nav from "../component/Main_nav";
import MovieRank from "../component/Main_movieRank";

const Main = (props) => {
  return (
    <div>
      <Nav></Nav>
      <MovieRank></MovieRank>
      <Link to={{ pathname: `/movie` }}>영화 클릭</Link>
    </div>
  );
};

export default Main;
