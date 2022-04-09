import React from "react";
import PageNum from "./PageNum";

const BoardList = ({
  boardRead,
  dividePageNum,
  boardpage,
  readBoard,
  styled,
  pageNum,
  setBoardpage,
  writeNew,
}) => {
  return (
    <>
      {boardRead
        .slice(dividePageNum * (boardpage - 1), dividePageNum * boardpage)
        .map((list, index) => (
          <div key={index} className={styled.divideBoard}>
            <h4
              onClick={() => {
                readBoard(list);
              }}
            >
              {list.title}
            </h4>
            <h5>{list.creatorId}</h5>
            <h5>{list.date}</h5>
          </div>
        ))}
      <div className={styled.selectPage}>
        {pageNum.reverse().map((list, index) => (
          <span key={index}>
            <PageNum list={list} index={index} setBoardpage={setBoardpage} />
          </span>
        ))}
      </div>

      <h5 onClick={writeNew} className={styled.write}>
        글쓰기
      </h5>
    </>
  );
};

export default BoardList;
