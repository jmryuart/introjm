import React, { useEffect, useState } from "react";
import styled from "../css/Cheat.module.css";
import CheatArea from "./CheatArea";
import SendMessage from "./SendMessage";
import { onAuthStateChanged } from "firebase/auth";
import { auth, dbService } from "../fbase";
import { collection, onSnapshot, query, where } from "firebase/firestore";

const Cheat = () => {
  const [nickName, setNickName] = useState()
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const q = query(
          collection(dbService, "nicknameTable"),
          where("userid", "==", user.uid)
        );
        onSnapshot(q, (snapshot) => {
          const getNickname = snapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
          }));
          setNickName(getNickname[0].nickname);
        });
      } else{
        setNickName(null);
      }
    });
  }, []);
  return (
    <div className={styled.cheat}>
      <CheatArea styled={styled} nickName={nickName} />
      {nickName && <SendMessage styled={styled} nickName={nickName} />}
    </div>
  );
};

export default Cheat;
