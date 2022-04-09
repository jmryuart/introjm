import React, { useEffect, useState } from "react";
import styled from "../css/Board.module.css";
import BoardDetail from "./board/BoardDetail";
import BoardWrite from "./board/BoardWrite";
import { dbService } from "../fbase";
import { collection, onSnapshot, query, orderBy } from "firebase/firestore";
import BoardList from "./board/BoardList";

const Board = ({ nickName }) => {
  const dividePageNum = 10;
  const [boardFlag, setBoardFlag] = useState("board");
  const [boardSet, setBoardSet] = useState([]);
  const [boardRead, setBoardRead] = useState([]);
  let pageNum = [];
  const [boardpage, setBoardpage] = useState(1);
  useEffect(() => {
    const q = query(
      collection(dbService, "board"),
      orderBy("createdAt", "desc")
    );
    onSnapshot(q, (snapshot) => {
      const nweetArr = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setBoardRead(nweetArr);
    });
  }, []);

  const writeNew = () => {
    if(nickName !== null) setBoardFlag("write");
    else alert('글을 작셩하려면 로그인을 해주세요. ')
  };
  const readBoard = (list) => {
    setBoardFlag("detail");
    setBoardSet(list);
  };

  for (let i = Math.ceil(boardRead.length / dividePageNum); i > 0; i--) {
    pageNum.push(i);
  }
  return (
    <div className={styled.board}>
      {boardFlag === "board" && (
        <BoardList
          boardRead={boardRead}
          dividePageNum={dividePageNum}
          boardpage={boardpage}
          readBoard={readBoard}
          styled={styled}
          pageNum={pageNum}
          setBoardpage={setBoardpage}
          writeNew={writeNew}
        />
      )}
      {boardFlag === "write" && (
        <BoardWrite setBoardFlag={setBoardFlag} nickName={nickName} />
      )}
      {boardFlag === "detail" && (
        <BoardDetail boardSet={boardSet} setBoardFlag={setBoardFlag} />
      )}
    </div>
  );
};

export default Board;
