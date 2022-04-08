import React from "react";
import styled from "../css/Introduce.module.css";
import Ability from "./introduce/Ability";
import Academy from "./introduce/Academy";
import Career from "./introduce/Career";
import Military from "./introduce/Military";
import PersonIntro from "./introduce/PersonIntro";
import SelfIntro from "./introduce/SelfIntro";

const Introduce = () => {
  return (
    <div className={styled.introJinmo}>
      <PersonIntro />
      <Academy styled={styled} />
      <Career styled={styled} />
      <Military styled={styled} />
      <Ability styled={styled} />
      <SelfIntro />
    </div>
  );
};

export default Introduce;
