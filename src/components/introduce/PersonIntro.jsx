import React from 'react'
import styled from "../../css/PersonIntro.module.css"

const PersonIntro = () => {
  return(
    <div className={styled.personIntro}>
      <h1>이력서</h1>
      <h2>즐기면서 일하고 싶은 유진모 입니다.</h2>
      <div className={styled.personInfo}>
        <div className={styled.image}>
          <a target="_blank" rel="noreferrer" href="http://test.ntnoop.com/dataserver/jinmo.jpg"
            >유진모사진</a
          >
        </div>
        <div className={styled.texts}>
          <h4>
            <strong>유진모</strong><span>1988년생(35세 / 만 34세)</span
            ><span>남</span><span>구직중</span>
          </h4>
          <h5>
            <span>e-mail</span> :
            <a href="mailto:jmryuart@naver.com">jmryuart@ naver.com</a>
          </h5>
          <h5>
            <span>phone</span> : <a href="tel:01023090650">010 - 2309 -0650</a>
          </h5>
          <h5><span>address</span>: 충북 충주시 대현5길 34 (입사 후 이사 예정)</h5>
          <h5>
            <span>homapage</span> :
            <a href="http://www.ntnoop.com">http://www.ntnoop.com</a> 포트폴리오
            재중
          </h5>
        </div>
        <div className={styled.texts_mobile}>
          <h4><strong>유진모</strong><span>1988년생(35세 / 만 34세)</span></h4>
          <h5>
            <span>e-mail</span> :
            <a href="mailto:jmryuart@naver.com">jmryuart@ naver.com</a>
          </h5>
          <h5>
            <span>phone</span> : <a href="tel:01023090650">010 - 2309 -0650</a>
          </h5>
          <h5><span>address</span>: 충북 충주시 대현5길 34</h5>
          <h5>
            <span>homapage</span> :
            <a target="_blank" rel="noreferrer" href="http://www.ntnoop.com"
              >http://www.ntnoop.com</a
            >
            포트폴리오 재중
          </h5>
        </div>
      </div>
    </div>
  )
}

export default PersonIntro;