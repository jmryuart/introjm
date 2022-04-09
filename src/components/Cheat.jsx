import React from "react";
import styled from "../css/Cheat.module.css";
import CheatArea from "./CheatArea";
import SendMessage from "./SendMessage";

const Cheat = ({nickName}) => {
  return (
    <div className={styled.cheat}>
      <CheatArea styled={styled} nickName={nickName} />
      {nickName && <SendMessage styled={styled} nickName={nickName} />}
    </div>
  );
};

export default Cheat;
