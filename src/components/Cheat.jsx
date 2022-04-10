import React from "react";
import styled from "../css/Cheat.module.css";
import CheatArea from "./cheat/CheatArea";
import SendMessage from "./cheat/SendMessage";

const Cheat = ({nickName}) => {
  return (
    <div className={styled.cheat}>
      <CheatArea styled={styled} nickName={nickName} />
      {nickName && <SendMessage styled={styled} nickName={nickName} />}
    </div>
  );
};

export default Cheat;
