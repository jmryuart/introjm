import React from "react";
import styled from "../css/About.module.css";

const About = () => {
  return (
    <div className={styled.about}>
      <div className={styled.background}>
        <div className={styled.image}></div>
      </div>
      <div className={styled.header}>
        <h2>About me</h2>
        <h4>Ryu jin mo</h4>
        <h5>
          <span>Since</span>1988
        </h5>
      </div>
      <div className={styled.section}>
        <p>
          자고 일어났더니 세상이 변했다면 정말 신기한 일이겠죠? 저는 세상이
          변한건 아니지만 제가 살아가는 환경이 한순간에 변한 경험을 했습니다. 그
          환경이 변하니 세상이 변한것과는 다르지 않게 느껴지더라구요. 그 변화된
          세상을 당신들과 함께 할 수 있을까요?
        </p>
        <ul>
          <li>
            <a href="mailto:jmryuart@naver.com">E-mail : jmryuart@ naver.com</a>
          </li>
          <li>
            <a href="tel:01023090650">Tel : 010 - 2309 - 0650</a>
          </li>
          <li>kakaotalk : kinderjm</li>
          <li>
            <a target="_blank" href="http://test.ntnoop.com/jinmo.pdf">
              이력서및 자기소개서 다운로드
            </a>
          </li>
          <li>
            <a target="_blank" href="http://test.ntnoop.com/jinmo_mbti.pdf">
              유진모의 MBTI 확인하기
            </a>
          </li>
        </ul>
      </div>
      <div className={styled.footer}>
        <h4>에필로그...</h4>
        <p>
          처음 웹퍼블리싱을 접했을때 참 제 감각이 많이 부족하다는 것을
          느꼈습니다. 그래서 계속 배워도 되는걸까? 고민이 많았습니다. 그런데
          배우면 배울수록 시각적으로 보이는 이미지도 중요하지만 그것이 보여지는
          방식을 구현하는 것도 중요하다는 것을 알게됐습니다. 그리고 구현하기
          위해서는 코딩이 매우 중요하며 코딩에 관심이 많았던 저로서는 이 분야를
          파고들어야 겠다고 생각했습니다. 그렇게 시작한 웹퍼블리셔로서의
          준비과정. 가끔씩 원하는데로 코딩이 되지 않을때가 있으면 밤새 코딩을
          하며 스트레스를 받기도 했지만 그런 고생을 한 뒤에 도출된 결과를
          마주할때 느끼는 그 쾌감이 다시 또 저를 컴퓨터 앞에 앉혀 밤새게 만들고
          있네요.
        </p>
      </div>
    </div>
  );
};

export default About;
