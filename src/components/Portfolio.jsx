import React from "react";
import styled from "../css/Portfolio.module.css";

const Portfolio = () => {
  return (
    <div className={styled.portfolio}>
      <ul>
        <li>
          <h3>project1</h3>
          <h4>
            유진모의 <span>Portfolio</span>
          </h4>
          <h6>제작기간 : 2022. 04.07 ~</h6>
          <p>
            제 현재 이 포트폴리오 사이트가 하나의 프로젝트 입니다! 이 사이트를
            제작 하기 위해 배운것들을 생각해 보면 프로젝트가 아니다(?)라 할 수가
            없겠네요.
            <br />
            제작기간이 짧은것이지 제작하기 위해 들어간 노력은 그동안 배운 모은
            것들이 포함 되어 있다는 점 알아 주셨으면 합니다.
            <br />
            사용되어진것들을 알아보면
            <br />
            프레임 워크 - React.js
            <br />
            Database - Firebase.google
            <br />
            Styiling - SCSS
            <br />
            그리고 모든 디자인와 구성을 직접 한 제 두뇌가 있습니다.
            <br />
            앞으로 새로운 프로젝트는 이 홈페이지에 기능을 추가하게 될 것
            같습니다.
            <br />
            취업이 될 때까지 취업이 된 이후에도 새로운 기술을 습득하면
            추가하겠습니다.
          </p>
        </li>
        <li>
          <h3>project2</h3>
          <h4>Louis Poulsen 리뉴얼</h4>
          <div className={styled.btns}>
            <div className={styled.renewal}>
              <a
                href="http://test.ntnoop.com/louispoulsen"
                target="_blank"
                rel="noreferrer"
              >
                Renewal Site
              </a>
            </div>
            <div className={styled.original}>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://www.louispoulsen.com/ko-kr/private"
              >
                Original Site
              </a>
            </div>
          </div>
          <h6>제작기간 : 2021. 08.11 ~ 2021. 09.26</h6>
          <p>
            반응형 사이트를 제작하기 위해 많은 생각을 갖을 수 있었던 사이트
            입니다.
            <br />
            jQuery를 처음 사용해 보면서 프론트엔드 개발의 꿈을 키울수
            있었습니다.
            <br />
            언제나 그렇듯 디자인 부분에서는 많이 부족하지만 javascript/jQuery가
            들어 가면서 기능! Function 에 많은 생각을 갖게 된 사이트입니다.
          </p>
        </li>
        <li>
          <h3>project3</h3>
          <h4>효성중공업 리뉴얼</h4>
          <div className={styled.btns}>
            <div className={styled.renewal}>
              <a
                href="http://test.ntnoop.com/hyosung"
                target="_blank"
                rel="noreferrer"
              >
                Renewal Site
              </a>
            </div>
            <div className={styled.original}>
              <a
                target="_blank"
                rel="noreferrer"
                href="http://www.hyosungheavyindustries.com/kr/main.do"
              >
                Original Site
              </a>
            </div>
          </div>
          <h6>제작기간 : 2021. 07.11 ~ 2021. 07.31</h6>
          <p>
            UX/UI를 배우고 제일 처음 직접 디자인 하고 Html / Scss 를 사용하여
            직접 제작해본 페이지 입니다.
            <br />이 사이트를 제작 하면서 공통요소를 어떻게 만들고 어떻게
            적용시키는지에 대해 많은 생각을 갖을 수 있었습니다.
          </p>
        </li>
      </ul>
    </div>
  );
};

export default Portfolio;
