// const express = require("express");
// const app = express();
// const port = process.env.PORT || 3000;
// require("dotenv").config();
// // CORS
// const cors = require("cors");
// const parsing = require("./fetching.js");

// // body-parser
// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));

// // CORS 허용
// let corsOptions = {
//   origin: "http://movietalker.tk",
//   credentials: true,
// };
// let corsOptions2 = {
//   origin: "http://localhost:3000",
//   credentials: true,
// };
// app.use(cors(corsOptions));
// app.use(cors(corsOptions2));

// // api/rank로 get 요청이 들어오면
// // parsing() 실행해서 요청 결괏값 client로 내보내기
// app.get("/api/rank", (req, res) => {
//   parsing().then((response) => {
//     res.send(response);
//     console.log(response);
//   });
// });

// app.listen(port, () => {
//   console.log(`Example app listening on port ${port}`);
// });
