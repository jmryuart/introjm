import React, { useRef, useState } from "react";
import styled from "../../css/WTlist.module.css";
import WTpage from "./WTpage";

const WTlist = ({ setUrl, userId, nickName }) => {
  const [openFlag, setOpenFlag] = useState(false);
  const openBtn = useRef("");
  const btnSwitch = () => {
    setOpenFlag(!openFlag);
    if (openFlag) {
      openBtn.current.style.left = "100%";
    } else {
      closeList();
    }
  };
  const closeList = () => {
    openBtn.current.style.left = "calc(100% - 360px)";
  };

  let titleList1 = [
    { id: 1, wtName: "1111", memo: "1부 1회" },
    { id: 2, wtName: "1111", memo: "1부 1회" },
    { id: 3, wtName: "1111", memo: "1부 1회" },
    { id: 4, wtName: "1111", memo: "1부 1회" },
    { id: 5, wtName: "1111", memo: "1부 1회" },
  ];
  let titleList2 = [
    { id: 1, wtName: "1111", memo: "1부 1회" },
    { id: 2, wtName: "1111", memo: "1부 1회" },
    { id: 3, wtName: "1111", memo: "1부 1회" },
    { id: 4, wtName: "1111", memo: "1부 1회" },
    { id: 5, wtName: "1111", memo: "1부 1회" },
  ];
  let titleList3 = [
    { id: 1, wtName: "1111", memo: "1부 1회" },
    { id: 2, wtName: "1111", memo: "1부 1회" },
    { id: 3, wtName: "1111", memo: "1부 1회" },
    { id: 4, wtName: "1111", memo: "1부 1회" },
    { id: 5, wtName: "1111", memo: "1부 1회" },
  ];
  let titleList4 = [
    { id: 1, wtName: "1111", memo: "1부 1회" },
    { id: 2, wtName: "1111", memo: "1부 1회" },
    { id: 3, wtName: "1111", memo: "1부 1회" },
    { id: 4, wtName: "1111", memo: "1부 1회" },
    { id: 5, wtName: "1111", memo: "1부 1회" },
  ];

  let titleList = [
    { id: 1, titleName: "네이버", list: titleList1 },
    { id: 2, titleName: "카카오", list: titleList2 },
    { id: 3, titleName: "밥", list: titleList3 },
    { id: 4, titleName: "줘", list: titleList4 },
  ];
  return (
    <div className={styled.wTlist} ref={openBtn}>
      <div className={styled.openBtn}>
        {openFlag ? (
          <span className="icon-circle-right1" onClick={btnSwitch}></span>
        ) : (
          <span className="icon-circle-left1" onClick={btnSwitch}></span>
        )}
      </div>
      <div className={styled.sitelist}>
        <h3>{nickName}의 최애 웹툰들</h3>
        <ul>
          {titleList.map((list) => (
            <li key={list.id}>
              <div className={styled.title}>
                <h4>{list.titleName}</h4>
                <div className={styled.titlebtn}>
                  <span>+</span>
                  <span>-</span>
                </div>
              </div>
              <ol>
                <WTpage styled={styled} />
              </ol>
            </li>
          ))}
          {/* <li>
            <div className={styled.title}>
              <h4>네이버</h4>
              <div className={styled.titlebtn}>
                <span>+</span>
                <span>-</span>
              </div>
            </div>
            <ol>
              <li>
                <i>111111</i>
                <span>1부 1회</span>
              </li>
              <li>
                <i>111111</i>
                <span>1부 1회</span>
              </li>
              <li>
                <i>111111</i>
                <span>1부 1회</span>
              </li>
              <li>
                <i>111111</i>
                <span>1부 1회</span>
              </li>
              <li>
                <i>111111</i>
                <span>1부 1회</span>
              </li>
            </ol>
          </li>
          <li>
            <h4>카카오</h4>
            <ol>
              <li>
                <i>111111</i>
                <span>1부 1회</span>
              </li>
              <li>
                <i>111111</i>
                <span>1부 1회</span>
              </li>
              <li>
                <i>111111</i>
                <span>1부 1회</span>
              </li>
              <li>
                <i>111111</i>
                <span>1부 1회</span>
              </li>
              <li>
                <i>111111</i>
                <span>1부 1회</span>
              </li>
            </ol>
          </li>
          <li>
            <h4>밥</h4>
            <ol>
              <li>
                <i>111111</i>
                <span>1부 1회</span>
              </li>
              <li>
                <i>111111</i>
                <span>1부 1회</span>
              </li>
              <li>
                <i>111111</i>
                <span>1부 1회</span>
              </li>
              <li>
                <i>111111</i>
                <span>1부 1회</span>
              </li>
              <li>
                <i>111111</i>
                <span>1부 1회</span>
              </li>
            </ol>
          </li>
          <li>
            <h4>밥</h4>
            <ol>
              <li>
                <i>111111</i>
                <span>1부 1회</span>
              </li>
              <li>
                <i>111111</i>
                <span>1부 1회</span>
              </li>
              <li>
                <i>111111</i>
                <span>1부 1회</span>
              </li>
              <li>
                <i>111111</i>
                <span>1부 1회</span>
              </li>
              <li>
                <i>111111</i>
                <span>1부 1회</span>
              </li>
            </ol>
          </li> */}
        </ul>
        <div className={styled.addBtn}>
          <button>+</button>
          <button>-</button>
        </div>
      </div>
    </div>
  );
};

export default WTlist;
