import React, { useRef } from "react";
import { dbService } from "../../fbase";
import { addDoc, collection } from "firebase/firestore";

const SendMessage = ({ nickName, styled }) => {
  const messageRef = useRef("");
  const onSubmit = async (event) => {
    event.preventDefault();
    let month = new Date().getMonth() + 1;
    let day = new Date().getDate();
    if (new Date().getMonth() + 1 < 10)
      month = "0" + month;
    if (new Date().getDate() < 10) day = "0" + day;
    let hour = new Date().getHours();
    if (hour > 12) hour = "오후 " + (hour - 12) + ":";
    else hour = "오전 " + hour + ":";
    let minute = new Date().getMinutes();
    if (minute !== 0 && minute < 10) minute = "0"+minute;
    let date = new Date().getFullYear() + "년 " + month + "월 " + day + "일";
    let time = hour + minute;
    await addDoc(collection(dbService, "talkWith"), {
      text: messageRef.current.value,
      createdAt: Date.now(),
      creatorId: nickName,
      date: date,
      time: time,
    }).then(() => {
      messageRef.current.value = null;
    });
  };
  return (
    <div className={styled.sendMessage}>
      <form onSubmit={onSubmit}>
        <span>
          <i className="icon-bubble2"></i>
        </span>
        <input type="textarea" ref={messageRef} />
        <button>
          <i className="icon-compass"></i>
        </button>
      </form>
    </div>
  );
};

export default SendMessage;
