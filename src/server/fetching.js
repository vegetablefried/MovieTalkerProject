const axios = require("axios");
const cheerio = require("cheerio");

// axios를 활용해 AJAX로 HTML 문서를 가져오는 함수 구현
async function getHTML() {
  try {
    return await axios.get(
      "https://movie.naver.com/movie/sdb/rank/rmovie.naver"
    );
  } catch (error) {
    console.error(error);
  }
}

// getHTML 함수 실행 후 데이터에서
// body > main > div > section > ul > li > article > h2 > a
// 에 속하는 제목을 titleList에 저장
const parsing = async () => {
  // 위에서 추출한 HTML 전체 가져오기
  const html = await getHTML();
  // JQuery처럼 사용하기 위해 '$'에 cheerio를 로드한다.
  const $ = cheerio.load(html.data);

  // 개발자 모드에서 확인해보면
  // .list_ranking 아래 tr들이 있고 그 안에 하나씩 타이틀 존재
  // 반복문을 돌릴 수 있어야 하니 병렬로 있는 요소까지만 찾는다.
  const $trs = $("#old_content > .list_ranking > tbody > tr");

  // 파싱한 데이터를 담을 배열
  let dataArr = [];

  // 찾은 tr 개수 만큼 반복문을 돌린다.
  $trs.each((idx, node) => {
    const title = $(node).find(".tit3 a").text();
    const link = $(node).find(".tit3 a").attr("href");

    // 빈 값 리턴
    if (title === "") {
      return;
    }

    // 오브젝트 형식으로 배열에 담기
    dataArr.push({
      title: title,
      link: link,
    });
  });

  axios.post("/odd", dataArr).then((res) => console.log(res));
};

parsing();

module.exports = parsing;
