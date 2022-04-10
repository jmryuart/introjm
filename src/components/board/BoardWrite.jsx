import React, { useRef } from "react";
import { dbService } from "../../fbase";
import { addDoc, collection } from "firebase/firestore";
import styled from "../../css/BaordWrite.module.css";

const BoardWrite = ({ setBoardFlag, nickName, setBoardpage }) => {
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
        setBoardpage(1);
      });
    } else {
      alert("제목 또는 내용이 비어있습니다.");
    }
  };
  const goList = () => {
    setBoardFlag("board");
    setBoardpage(1);
  };
  const setClear = () => {
    titleRef.current.value = "";
    messageRef.current.value = "";
  };
  return (
    <div className={styled.boardWrite}>
      <div className={styled.writeHeader}>
        <div className={styled.title}>
          <i>Title : </i>
          <input type="text" ref={titleRef} />
        </div>
        <div className={styled.writer}>
          <i>작성자 : </i>
          <span>{nickName}</span>
        </div>
      </div>
      <div className={styled.writeSection}>
        <textarea ref={messageRef}></textarea>
      </div>
      <div className={styled.writeFooter}>
        <div className={styled.goList}>
          <span onClick={goList}>리스트로</span>
        </div>
        <div className={styled.goWrite}>
          <span onClick={setClear}>처음부터</span>
          <span onClick={onSubmit}>작성</span>
        </div>
      </div>
    </div>
  );
};

export default BoardWrite;
