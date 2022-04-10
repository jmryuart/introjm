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
    <div className={styled.boardList}>
      <div className={styled.boardName}>게시판</div>
      <div className={styled.boardArea}>
        <div className={styled.divideBoard}>
          <div className={styled.boardTitle}>
            <span>Title</span>
          </div>
          <div className={styled.boardCreator}>
            <span>Writer</span>
          </div>
          <div className={styled.boardCreatedAt}>
            <span>Date</span>
          </div>
        </div>
        {boardRead
          .slice(dividePageNum * (boardpage - 1), dividePageNum * boardpage)
          .map((list, index) => (
            <div key={index} className={styled.divideBoard}>
              <div
                className={styled.boardTitle}
                onClick={() => {
                  readBoard(list);
                }}
              >
                {list.title}
              </div>
              <div className={styled.boardCreator}>{list.creatorId}</div>
              <div className={styled.boardCreatedAt}>{list.date}</div>
            </div>
          ))}
      </div>
      <div className={styled.selectPage}>
        {pageNum.reverse().map((list, index) => (
          <span key={index}>
            <PageNum
              list={list}
              index={index}
              boardpage={boardpage}
              setBoardpage={setBoardpage}
            />
          </span>
        ))}
      </div>
      <div className={styled.writeNew}>
        <i onClick={writeNew}>글쓰기</i>
      </div>
    </div>
  );
};

export default BoardList;
