<<<<<<< HEAD:src/components/cheat/CheatArea.jsx
import React, { useEffect, useState } from "react";
import { dbService } from "../../fbase";
import { collection, onSnapshot, query, orderBy } from "firebase/firestore";
import Message from "./Message";

const CheatArea = ({ nickName, styled }) => {
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
    <ul>
      {myMessage.map((list) => (
        <li key={list.id}>
          <>
            {nickName === list.creatorId ? (
              <div className={styled.mymessage}>
                <Message nickName={nickName} list={list} />
              </div>
            ) : (
              <div className={styled.othermessage}>
                <Message nickName={nickName} list={list} />
              </div>
            )}
          </>
        </li>
      ))}
    </ul>
  );
};

export default CheatArea;
=======
>>>>>>> c9ae211078ac682b5f8b74a8533e26324eb243e8:src/components/CheatArea.jsx
