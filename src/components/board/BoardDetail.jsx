import React from "react";
import styled from "../../css/BoardDetail.module.css";
import { dbService } from "../../fbase";
import { doc, deleteDoc } from "firebase/firestore";

const BoardDetail = ({ boardSet, setBoardFlag, nickName }) => {
  const deleteRef = doc(dbService, "board", `${boardSet.id}`);
  const returnBoard = () => {
    setBoardFlag("board");
  };
  const removeBoard = async () => {
    const ok = window.confirm("지우시겠습니까?");
    if (ok) {
      await deleteDoc(deleteRef).then(() => {
        setBoardFlag("board");
      });
    }
  };
  return (
    <div className={styled.boardDetail}>
      <h4>
        <i>{boardSet.title}</i>
      </h4>
      <h5>{boardSet.date}</h5>
      <p>{boardSet.text}</p>
      <button onClick={returnBoard}>목록보기</button>
      {boardSet.creatorId === nickName && (
        <button onClick={removeBoard}>삭제하기</button>
      )}
    </div>
  );
};

export default BoardDetail;
