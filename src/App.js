import logo from "./logo.svg";
import "./App.css";
import Main from "./routes/Main";
import Login from "./routes/Login";
import FindId from "./routes/FindId";
import FindPassword from "./routes/FindPassword";
import Movie from "./routes/Movie";
import Join from "./routes/Join";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path={`/`} element={<Main />}></Route>
        <Route exact path={`/movie`} element={<Movie />}></Route>
        <Route exact path={`/login`} element={<Login />}></Route>
        <Route exact path={`/login/id`} element={<FindId />}></Route>
        <Route
          exact
          path={`/login/password`}
          element={<FindPassword />}
        ></Route>
        <Route exact path={`/login/join`} element={<Join />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
