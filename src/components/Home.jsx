import React from "react";
import styled from "../css/Home.module.css";

const Home = () => {
  return (
    <div className={styled.home}>
      <div className={styled.page}>
        <div className={styled.header}>
          <h3>Web Front End Developer</h3>
          <h6>
            이렇게 유진모의 포트폴리오 페이지를 방문해주셔서 진심으로
            감사드립니다. 게시판 또는 채팅을 이용하여 부족한점, 개선했으면
            싶은점, 추가해볼 기능 등을 추천해 주시면 감사하겠습니다.
          </h6>
        </div>
        <div>
          <ul>
            <li>
              <h5>메뉴 리스트 설명</h5>
            </li>
            <li>
              <i>H</i> <span className="icon-arrow-right-solid1"></span> Home
              현재 페이지를 보여줍니다.
            </li>
            <li>
              <i>P</i> <span className="icon-arrow-right-solid1"></span>{" "}
              Portfolio 포트폴리오 안내 페이지를 보여줍니다.{" "}
              <span>Portfolio</span>페이지 에서는 Renewal Site 를 누르시면 제가
              제작한 페이지로 이동하실수 있습니다. Original Site 를 누르시면
              원래 제작된 기업의 페이지로 이동하실수 있습니다.
            </li>
            <li>
              <i>B</i> <span className="icon-arrow-right-solid1"></span> Board
              게시판 페이지를 보여줍니다. 우측 상단에 가입하기를 눌러 편하게
              가입해보시고 간략하게 기능을 사용해보세요
            </li>
            <li>
              <i>C</i> <span className="icon-arrow-right-solid1"></span> Cheat
              대화를 할수 있는 페이지를 보여줍니다. 역시 로그인이 되어 있어야
              사용 가능합니다.
            </li>
            <li>
              <i>이</i> <span className="icon-arrow-right-solid1"></span> 이력서
              & 자기소개서를 열람하실수 있습니다.
            </li>
            <li>
              <i>A</i> <span className="icon-arrow-right-solid1"></span> About
              Me 저에게 연락 할 수단을 알려주며 후기도 간략히 남겼습니다.
            </li>
            <li>
              <i>L</i> <span className="icon-arrow-right-solid1"></span> Lotto
              이번주에 한번 도전해보고 싶으시다면?
            </li>
          </ul>
        </div>
        <div>
          <ul>
            <li>
              코드소스보기 : <a
                target="_blank"
                rel="noreferrer"
                href="https://github.com/jmryuart/introjm"
              >
                https://github.com/jmryuart/introjm
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Home;
