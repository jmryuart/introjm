import React, { useState } from "react";
import { Route } from "react-router-dom";
import styled from "../css/Lotto.module.css";

const Lotto = () => {
  const numLength = [1, 2, 3, 4, 5];
  const [lottoNum, setLottoNum] = useState([]);
  const [selectNum, setSelectNum] = useState([]);
  const [sliceNum, setSliceNum] = useState(0);
  const [lottoFlag, setLottoFlag] = useState(false);
  const getEaCheck = () => {
    setSliceNum(document.getElementById("eaCheck").value);
    setLottoFlag(false);
  };
  const createLottoNum = () => {
    let ball = 0,
      count = 0,
      lNum = [],
      flag = true;
    while (count < 6 - sliceNum) {
      ball = Math.ceil(Math.random() * 45);
      for (let k = 0; k < count; k++) {
        if (lNum[k] === ball) flag = false;
      }
      if (flag) {
        lNum[count] = ball;
        count++;
      }
      flag = true;
    }
    lNum.sort((a, b) => {
      return a - b;
    });
    setLottoNum(lNum);
    setLottoFlag(true);
  };
  if (lottoNum.length !== 0) {
    for (let i = 0; i < selectNum.length; i++) {
      for (let j = 0; j < lottoNum.length; j++) {
        if (selectNum[i] === lottoNum[j]) {
          createLottoNum();
        }
      }
    }
  }
  const getFixedNum = () => {
    let getNum = document.getElementById("checkNum").children;
    let sNum = [];
    if (getNum.length !== 0) {
      for (let i = 0; i < getNum.length; i++) {
        sNum[i] = Number(getNum[i].value);
        if (i === getNum.length - 1) setSelectNum(sNum);
        for (let j = 0; j < getNum.length; j++) {
          if (i !== j && getNum[i].value === getNum[j].value) {
            alert("같은 숫자가 들어가 있습니다 다시 입력해주세요.");
            setLottoFlag(false);
            return;
          }
        }
        if (getNum[i].value > 0 && getNum[i].value < 46) {
          createLottoNum();
        } else {
          setLottoFlag(false);
          alert("빈칸 없이 1~45의 숫자를 넣어주세요.");
          return;
        }
      }
    } else if (getNum.length === 0) createLottoNum();
  };
  return (
    <Route path="/lotto">
      <div className={styled.lotto}>
        <h3>당신에게 행운이 가득하기를 바라며......</h3>
        <div className={styled.fixedNum}>
          <h5>몇개의 고정숫자를 선택하시겠습니까?</h5>
          <select name="eaCheck" id="eaCheck" onChange={getEaCheck}>
            <option value="0">고정번호 없음</option>
            <option value="1">1개</option>
            <option value="2">2개</option>
            <option value="3">3개</option>
            <option value="4">4개</option>
            <option value="5">5개</option>
          </select>
        </div>
        <div className={styled.checkNum} id="checkNum">
          {numLength.slice(5 - sliceNum).map((num) => (
            <input type="text" key={num} />
          ))}
        </div>
        <button onClick={getFixedNum}>번호받기</button>
        {lottoFlag && (
          <div className={styled.shape}>
            {lottoNum.map((list, index) => (
              <div className={styled.ball} key={index}>
                <span>{list}</span>
              </div>
            ))}
          </div>
        )}
      </div>
    </Route>
  );
};

export default Lotto;
