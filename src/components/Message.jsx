import React from "react";
import { dbService } from "../fbase";
import { doc, deleteDoc } from "firebase/firestore";

const Message = ({ list, nickName }) => {
  const messageRef = doc(dbService, "talkWith", `${list.id}`);
  const remove = async () => {
    const ok = window.confirm("지우시겠습니까?");
    if (ok) {
      await deleteDoc(messageRef);
    }
  };
  return (
    <>
      <i>{list.creatorId}</i>
      <span>{list.text}</span>
      <button onClick={remove}>
        <i className="icon-cancel-circle"></i>
      </button>
    </>
  );
};

export default Message;
