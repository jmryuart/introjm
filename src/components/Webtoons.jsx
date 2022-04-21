import React, { useState } from "react";
import styled from "../css/Webtoons.module.css";
import WTlist from "./webtoons/WTlist";

const Webtoons = ({ userId, nickName }) => {
  const [url, setUrl] = useState("");
  return (
    <div className={styled.webtoons}>
      {userId && <WTlist setUrl={setUrl} nickName={nickName} userId={userId} />}
      <section>
        {url !== "" ? (
          <iframe title="My Favorite Webtoons" src={url}></iframe>
        ) : (
          <>
            <h2>사용방법 설명하는 페이지 만들기</h2>
          </>
        )}
      </section>
    </div>
  );
};

export default Webtoons;
