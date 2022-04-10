import React from "react";
import { dbService } from "../../fbase";
import { doc, updateDoc } from "firebase/firestore";
import styled from "../../css/BaordWrite.module.css";

const BoardRepair = ({
  nickName,
  setBoardFlag,
  setBoardId,
  setTitle,
  setText,
  title,
  text,
  boardId,
}) => {
  const repairRef = doc(dbService, "board", boardId);
  const onSubmit = async (event) => {
    event.preventDefault();
    if (title !== "" && text !== "") {
      await updateDoc(repairRef, {
        title: title,
        text: text,
      }).then(() => {
        setTitle("");
        setText("");
        setBoardId("");
        setBoardFlag("board");
      });
    } else {
      alert("제목 또는 내용이 비어있습니다.");
    }
  };
  const onChangeTitle = (event) => {
    const {
      target: { value },
    } = event;
    setTitle(value);
  };
  const onChangeText = (event) => {
    const {
      target: { value },
    } = event;
    setText(value);
  };
  const goList = () => {
    setTitle("");
    setText("");
    setBoardId("");
    setBoardFlag("board");
  };
  return (<div className={styled.boardWrite}>
    <div className={styled.writeHeader}>
      <div className={styled.title}>
        <i>Title : </i>
        <input onChange={onChangeTitle} type="text" value={title} />
      </div>
      <div className={styled.writer}>
        <i>작성자 : </i>
        <span>{nickName}</span>
      </div>
    </div>
    <div className={styled.writeSection}>
      <textarea onChange={onChangeText} value={text}></textarea>
    </div>
    <div className={styled.writeFooter}>
      <div className={styled.goList}>
        <span onClick={goList}>리스트로</span>
      </div>
      <div className={styled.goWrite}>
        <span onClick={onSubmit}>수정하기</span>
      </div>
    </div>
  </div>
  );
};

export default BoardRepair;
