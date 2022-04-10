import React, { useState } from "react";
import { dbService } from "../fbase";
import { doc, deleteDoc } from "firebase/firestore";

const Message = ({ list, nickName }) => {
  const [flag, setFlag] = useState(false);
  const messageRef = doc(dbService, "talkWith", `${list.id}`);
  const remove = async () => {
    const ok = window.confirm("지우시겠습니까?");
    if (ok) {
      await deleteDoc(messageRef);
    }
  };
  const mouseEnter = () => {
    if(nickName === list.creatorId)
    setFlag(true);
  };
  return (
    <>
      <i>{list.creatorId}</i>
      <span onMouseEnter={mouseEnter}>{list.text}</span>
      {flag && (
        <button onClick={remove}>
          <i className="icon-cancel-circle"></i>
        </button>
      )}
    </>
  );
};

export default Message;
