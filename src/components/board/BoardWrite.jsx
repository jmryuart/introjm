import React, { useRef } from "react";
import { dbService } from "../../fbase";
import { addDoc, collection } from "firebase/firestore";
import styled from "../../css/BaordWrite.module.css";

const BoardWrite = ({ setBoardFlag, nickName }) => {
  const titleRef = useRef("");
  const messageRef = useRef("");
  const onSubmit = async (event) => {
    event.preventDefault();
    if (titleRef.current.value !== "" && messageRef.current.value !== "") {
      await addDoc(collection(dbService, "board"), {
        date:
          new Date().getFullYear() +
          " - " +
          (new Date().getMonth() + 1) +
          " - " +
          new Date().getDate(),
        title: titleRef.current.value,
        text: messageRef.current.value,
        createdAt: Date.now(),
        creatorId: nickName,
        // boardNum: 1,
      }).then(() => {
        titleRef.current.value = null;
        messageRef.current.value = null;
        setBoardFlag("board");
      });
    } else {
      alert("제목 또는 내용이 비어있습니다.");
    }
  };
  return (
    <div className={styled.boardWrite}>
      <h4>게시물 작성하기</h4>
      <div>
        <i>Title : </i>
        <input type="text" />
      </div>
      <textarea></textarea>
      <div>
        <button onClick={onSubmit}>글쓰기</button>
        <button onClick={()=>{setBoardFlag("board")}}>목록으로</button>
      </div>
    </div>
  );
};

export default BoardWrite;
