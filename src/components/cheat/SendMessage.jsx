import React, { useRef, useState } from "react";
import { dbService } from "../../fbase";
import { addDoc, collection } from "firebase/firestore";

const SendMessage = ({ nickName, styled }) => {
  const messageRef = useRef("");
  const [enterFlag, setEnterFlag] = useState(true);
  const sendMessage = async () => {
    if (messageRef.current.value !== "") {
      let month = new Date().getMonth() + 1;
      let day = new Date().getDate();
      if (new Date().getMonth() + 1 < 10) month = "0" + month;
      if (new Date().getDate() < 10) day = "0" + day;
      let hour = new Date().getHours();
      if (hour > 12) hour = "오후 " + (hour - 12) + ":";
      else hour = "오전 " + hour + ":";
      let minute = new Date().getMinutes();
      if (minute !== 0 && minute < 10) minute = "0" + minute;
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
    }
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (messageRef.current.value !== null) sendMessage();
  };
  const reSize = (e) => {
    const target = e.currentTarget;
    target.style.height = "34px";
    target.style.height = target.scrollHeight + "px";
  };
  const onKeyDown = (e) => {
    if (enterFlag && messageRef.current.value !== null && e.keyCode === 13) {
      setEnterFlag(false);
      sendMessage();
      messageRef.current.value = null;
      messageRef.current.style.height = "34px";
    }
  };
  const onKeyUp = (e) => {
    if (e.keyCode === 13) {
      setEnterFlag(true);
      messageRef.current.value = null;
      messageRef.current.style.height = "34px";
    }
  };
  return (
    <div className={styled.sendMessage}>
      <form onSubmit={onSubmit}>
        <i className="icon-bubble2"></i>
        <textarea
          ref={messageRef}
          onKeyDown={onKeyDown}
          onKeyUp={onKeyUp}
          onInput={reSize}
        ></textarea>
        <button>
          <i className="icon-compass"></i>
        </button>
      </form>
    </div>
  );
};

export default SendMessage;
