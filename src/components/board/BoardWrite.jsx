import React, { useRef, useState } from "react";
import { dbService } from "../../fbase";
import { addDoc, collection } from "firebase/firestore";
import styled from "../../css/BaordWrite.module.css";

const BoardWrite = ({ setBoardFlag, nickName }) => {
  const titleRef = useRef("");
  const messageRef = useRef("");
  const onSubmit = async (event) => {
    event.preventDefault();
    let month = new Date().getMonth() + 1;
    let day = new Date().getDate();
    if (new Date().getMonth() + 1 < 10) {
      month = "0" + (new Date().getMonth() + 1);
    }
    if (new Date().getDate() < 10) {
      day = "0" + new Date().getDate();
    }
    const date = new Date().getFullYear() + " - " + month + " - " + day;
    if (titleRef.current.value !== "" && messageRef.current.value !== "") {
      await addDoc(collection(dbService, "board"), {
        date: date,
        title: titleRef.current.value,
        text: messageRef.current.value,
        createdAt: Date.now(),
        creatorId: nickName,
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
        <input type="text" ref={titleRef} />
      </div>
      <textarea ref={messageRef}></textarea>
      <div>
        <button onClick={onSubmit}>글쓰기</button>
        <button
          onClick={() => {
            setBoardFlag("board");
          }}
        >
          목록으로
        </button>
      </div>
    </div>
  );
};

export default BoardWrite;
