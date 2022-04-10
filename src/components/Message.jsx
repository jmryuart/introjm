import React, { useState } from "react";
import { dbService } from "../fbase";
import { doc, deleteDoc } from "firebase/firestore";

const Message = ({ list, nickName, index, array }) => {
  const [flag, setFlag] = useState(false);
  const messageRef = doc(dbService, "talkWith", `${list.id}`);
  const remove = async () => {
    const ok = window.confirm("지우시겠습니까?");
    if (ok) {
      await deleteDoc(messageRef);
    }
  };
  const mouseEnter = () => {
    if (nickName === list.creatorId) setFlag(true);
  };
  console.log();
  return (
    <>
      {(array[index + 1] === undefined && <h5>{list.date}</h5>) ||
        (array[index + 1].date !== list.date && <h5>{list.date}</h5>)}
      <div onMouseEnter={mouseEnter}>
        <i>{list.creatorId}</i>
        <span>{list.text}</span>
        {flag && (
          <button onClick={remove}>
            <i className="icon-cancel-circle"></i>
          </button>
        )}
        {(array[index - 1] === undefined && <h6>{list.time}</h6>) ||
          (array[index - 1].time !== list.time && <h6>{list.time}</h6>)}
      </div>
    </>
  );
};

export default Message;
