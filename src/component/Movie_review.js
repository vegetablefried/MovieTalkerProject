import React, { useState } from "react";
import styles from "./css/Movie.module.scss";

const Movie_review = (props) => {
  const [reviewText, setReviewText] = useState("");
  let time = new Date().toLocaleString();

  const reviewObject = [
    { unique_num: 1, id: "ddjjd", movie: "마녀", review: "재밌어요" },
    { unique_num: 2, id: "diidi", movie: "마녀2", review: "재밌어요요오" },
  ];

  const userReview = Array.from(reviewObject);
  console.log(userReview);
  console.log(time);
  return (
    <div className={styles.reviewWrap}>
      <div
        className={styles.writeReview}
        style={props.writeBtn ? { display: "block" } : { display: "none" }}
      >
        <div>
          <span>리뷰</span>
          <span>별점을 선택해주세요</span>
          <span>☆☆☆☆☆</span>
        </div>
        <form>
          <textarea
            name="reviewArea"
            id="review"
            cols="15"
            rows="10"
            placeholder="리뷰를 적어주세요."
            onChange={(e) => {
              setReviewText(e.target.value);
              console.log(reviewText);
            }}
          ></textarea>
          <button>등록</button>
        </form>
      </div>

      <div className={styles.readReview}>
        <nav>
          <button>최신순</button>
        </nav>
        {userReview.map((current, idx) => {
          return (
            <div className={styles.review} key={idx}>
              <div>☆☆☆☆☆</div>
              <p>{current.review}</p>
              <p>
                <span>{current.id}</span>
                {" | "}
                <span>{time}</span>
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Movie_review;
