import React from "react";
import styled from "../../css/BoardDetail.module.css";

const BoardDetail = ({ boardSet, setBoardFlag }) => {
  const returnBoard = () => {
    setBoardFlag("board");
  };
  return (
    <div className={styled.boardDetail}>
      <h4><i>{boardSet.title}</i></h4>
      <h5>{boardSet.date}</h5>
      <p>{boardSet.text}</p>

      <button onClick={returnBoard}>목록보기</button>
    </div>
  );
};

export default BoardDetail;
