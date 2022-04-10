import React, { useEffect, useState } from "react";
import { dbService } from "../fbase";
import { collection, onSnapshot, query, orderBy } from "firebase/firestore";
import Message from "./Message";
import styled from "../css/Cheat.module.css";
<<<<<<< HEAD
import CheatArea from "./cheat/CheatArea";
import SendMessage from "./cheat/SendMessage";
=======
import SendMessage from "./SendMessage";
>>>>>>> c9ae211078ac682b5f8b74a8533e26324eb243e8

const Cheat = ({ nickName }) => {
  const [myMessage, setMyMessage] = useState([]);
  useEffect(() => {
    const q = query(
      collection(dbService, "talkWith"),
      orderBy("createdAt", "desc")
    );
    onSnapshot(q, (snapshot) => {
      const talking = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setMyMessage(talking);
    });
  }, []);
  return (
    <div className={styled.cheat}>
      <ul>
        {myMessage.map((list, index, array) => (
          <li key={list.id}>
            <>
              {nickName === list.creatorId ? (
                <div className={styled.mymessage}>
                  <Message
                    nickName={nickName}
                    list={list}
                    index={index}
                    array={array}
                  />
                </div>
              ) : (
                <div className={styled.othermessage}>
                  <Message
                    nickName={nickName}
                    list={list}
                    index={index}
                    array={array}
                  />
                </div>
              )}
            </>
          </li>
        ))}
      </ul>
      {nickName && (
        <SendMessage
          styled={styled}
          nickName={nickName}
          firstMessage={myMessage[0]}
        />
      )}
    </div>
  );
};

export default Cheat;
