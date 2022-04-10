import React from "react";
import styled from "../../css/BoardDetail.module.css";
import { dbService } from "../../fbase";
import { doc, deleteDoc } from "firebase/firestore";

const BoardDetail = ({
  boardSet,
  setBoardFlag,
  nickName,
  setTitle,
  setText,
  setBoardId,
}) => {
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
  const write = () => {
    setBoardFlag("write");
  };
  const repairBoard = () => {
    setBoardId(boardSet.id)
    setTitle(boardSet.title);
    setText(boardSet.text);
    setBoardFlag("repair");
  };
  return (
    <div className={styled.boardDetail}>
      <div className={styled.boarderHeader}>
        <div className={styled.title}>
          <i>Title.</i>
          <span>{boardSet.title}</span>
        </div>
        <div className={styled.writer}>
          <span>{boardSet.creatorId}</span>
        </div>
      </div>
      <div className={styled.boarderSection}>
        <p>{boardSet.title}</p>
        <p>{boardSet.text}</p>
      </div>
      <div className={styled.boarderFooter}>
        <div className={styled.btns}>
          <span onClick={returnBoard}>리스트로</span>
          <span onClick={write}>글쓰기</span>
          {nickName === boardSet.creatorId && (
            <>
              <span onClick={removeBoard}>지우기</span>
              <span onClick={repairBoard}>수정하기</span>
            </>
          )}
        </div>
        <div className={styled.date}>
          <i>게시일 : </i>
          <span>{boardSet.date}</span>
        </div>
      </div>
    </div>
  );
};

export default BoardDetail;
