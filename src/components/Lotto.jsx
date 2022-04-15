import React, { useRef, useState } from "react";
import styled from "../css/Lotto.module.css";

const Lotto = () => {
  const [lottoNum, setLottoNum] = useState([]);
  const [lottoFlag, setLottoFlag] = useState(false);
  const [randomFlag, setRandomFlag] = useState(true);
  const lottoListRef = useRef("");
  const getLottoNum = () => {
    setRandomFlag(false);
    if (randomFlag) {
      let ball = 0,
        count = 0,
        lNum = [],
        flag = true;
      while (count < 6) {
        ball = Math.ceil(Math.random() * 45);
        for (let i = 0; i < count; i++) {
          if (lNum[i] === ball) flag = false;
        }
        if (flag) {
          lNum[count] = ball;
          count++;
        }
        flag = true;
      }
      setLottoNum(lNum);
      setLottoFlag(true);
      for (let i = 0; i < lottoNum.length; i++) {
        lottoListRef.current.children[i].style.opacity = "0";
        lottoListRef.current.children[i].style.transition = "none";
      }
      newNumber();
    }
  };
  const newNumber = () => {
    setTimeout(() => {
      setTimeout(() => {
        lottoListRef.current.children[0].style.transition = "all 0.3s";
        lottoListRef.current.children[0].style.opacity = "1";
        setTimeout(() => {
          lottoListRef.current.children[1].style.transition = "all 0.3s";
          lottoListRef.current.children[1].style.opacity = "1";
          setTimeout(() => {
            lottoListRef.current.children[2].style.transition = "all 0.3s";
            lottoListRef.current.children[2].style.opacity = "1";
            setTimeout(() => {
              lottoListRef.current.children[3].style.transition = "all 0.3s";
              lottoListRef.current.children[3].style.opacity = "1";
              setTimeout(() => {
                lottoListRef.current.children[4].style.transition = "all 0.3s";
                lottoListRef.current.children[4].style.opacity = "1";
                setTimeout(() => {
                  lottoListRef.current.children[5].style.transition =
                    "all 0.3s";
                  lottoListRef.current.children[5].style.opacity = "1";
                  setRandomFlag(true);
                }, 500);
              }, 500);
            }, 500);
          }, 500);
        }, 500);
      }, 500);
    }, 100);
  };
  return (
    <div className={styled.lotto} id="aaaf">
      {lottoFlag && (
        <div className={styled.shape} ref={lottoListRef}>
          <div className={styled.ball}>
            <span>{lottoNum[0]}</span>
          </div>
          <div className={styled.ball}>
            <span>{lottoNum[1]}</span>
          </div>
          <div className={styled.ball}>
            <span>{lottoNum[2]}</span>
          </div>
          <div className={styled.ball}>
            <span>{lottoNum[3]}</span>
          </div>
          <div className={styled.ball}>
            <span>{lottoNum[4]}</span>
          </div>
          <div className={styled.ball}>
            <span>{lottoNum[5]}</span>
          </div>
        </div>
      )}
      <div className={styled.button}>
        {randomFlag && <h4 onClick={getLottoNum}>추첨하기</h4>}
      </div>
    </div>
  );
};

export default Lotto;
