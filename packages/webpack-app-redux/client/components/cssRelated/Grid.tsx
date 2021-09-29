import styled from 'styled-components'

const Wrap = styled.div`
  display: grid; /* 1.设置display为grid */
  width: 600px;
  height: 1250px;

  //显式网格
  /* grid-template-rows: 50px 1fr 30px;
  grid-template-columns: 150px 1fr;
  grid-template-areas:
    'nav head'
    'nav  main'
    'nav  foot'; */
  /* grid-template:
    [header-left] 'head head' 30px [header-right]
    [main-left] 'main  main' 1fr [main-right]
    [footer-left] 'nav  foot' 50px [footer-right]
    / 120px 1fr; */

  //隐式网格
  /* justify-items: center; //水平方向
  align-items: center; //竖直方向对齐 */
  /* justify-content: center;
  align-content: center; */
  /* gap: 10%; */
  grid-template-rows: 50px;
  grid-template-columns: 150px;
  grid-auto-rows: 20px;
  grid-auto-columns: 50px;
  grid-template-areas:
    'nav head .'
    'nav  main .'
    'nav  foot .'
    '. . w';
  & > header {
    grid-area: nav; //放置哪一块area
    background-color: #8ca0ff;
  }

  & > nav {
    grid-area: 1/2/2/3; //起始行/起始列/结束行/结束列
    background-color: #ffa08c;
    margin-left: auto;
    width: 85px;
  }

  & > main {
    grid-area: main;
    background-color: #ffff64;
  }

  & > footer {
    grid-area: foot;
    background-color: #8cffa0;
  }
  & > div {
    grid-area: 4/3/5/4;
    /* grid-column-start: 3;
    grid-column-end: 4;
    grid-row-start: 4;
    grid-row-end: 5; */
  }
`
export default function Grid() {
  return (
    <Wrap>
      <header>Header</header>
      <nav>Navigation</nav>
      <main>Main area</main>
      <footer>Footer</footer>
      <div>333</div>
    </Wrap>
  )
}
