import React, { useEffect, useState } from "react";
import styled from "../css/MainPage.module.css";
import { onAuthStateChanged } from "firebase/auth";
import { auth, dbService } from "../fbase";
import { collection, onSnapshot, query, where } from "firebase/firestore";
import Home from "./Home";
import About from "./About";
import Portfolio from "./Portfolio";
import Board from "./Board";
import Cheat from "./Cheat";
import Join from "./Join";
import Log from "./Log";
import Introduce from "./Introduce";
import Webtoons from "./Webtoons";
import Lotto from "./Lotto";

const MainPage = () => {
  const [flag, setFlag] = useState("home");
  const [loggingFlag, setLoggingFlag] = useState(false);
  const [logFlag, setLogFlag] = useState(false);
  const [joinFlag, setJoinFlag] = useState(false);
  const [nickName, setNickName] = useState(null);
  const [userId, setUserId] = useState(null);
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setLoggingFlag(true);
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
          setUserId(user.uid);
        });
      } else {
        setLoggingFlag(false);
      }
    });
  }, []);
  const logOut = () => {
    const ok = window.confirm("로그아웃 하시겠습니까?");
    if (ok) {
      auth.signOut();
      setNickName(null);
      setUserId(null);
    }
  };
  const openLog = () => {
    setJoinFlag(false);
    setLogFlag(true);
  };
  const openJoin = () => {
    setLogFlag(false);
    setJoinFlag(true);
  };
  const closeBtn = () => {
    setLogFlag(false);
    setJoinFlag(false);
  };
  return (
    <div className={styled.wrap}>
      <menu>
        <li
          onClick={() => {
            setFlag("home");
          }}
        >
          H<span>OME</span>
        </li>
        <li
          onClick={() => {
            setFlag("portfolio");
          }}
        >
          P<span>ORTFOLIO</span>
        </li>
        <li
          onClick={() => {
            setFlag("board");
          }}
        >
          B<span>OARD</span>
        </li>
        <li
          onClick={() => {
            setFlag("cheat");
          }}
        >
          C<span>HEAT</span>
        </li>
        <li
          onClick={() => {
            setFlag("introduce");
          }}
        >
          이<span>력서</span>
        </li>
        <li
          onClick={() => {
            setFlag("about");
          }}
        >
          A<span>BOUT</span>
        </li>
        <li
          onClick={() => {
            setFlag("webtoons");
          }}
        >
          W<span>ebtoons</span>
        </li>
        <li
          onClick={() => {
            setFlag("lotto");
          }}
        >
          L<span>otto</span>
        </li>
      </menu>
      <div className={styled.logJoin}>
        <ul>
          {loggingFlag ? (
            <>
              <li>{nickName}님 환영합니다.</li>
              <li onClick={logOut}>로그아웃</li>
            </>
          ) : (
            <>
              <li onClick={openJoin}>가입하기</li>
              <li onClick={openLog}>로그인</li>
            </>
          )}
        </ul>
        {logFlag && <Log closeBtn={closeBtn} />}
        {joinFlag && <Join closeBtn={closeBtn} />}
      </div>
      {flag === "home" && <Home />}
      {flag === "about" && <About />}
      {flag === "portfolio" && <Portfolio />}
      {flag === "board" && <Board nickName={nickName} />}
      {flag === "cheat" && <Cheat nickName={nickName} />}
      {flag === "introduce" && <Introduce />}
      {flag === "webtoons" && <Webtoons userId={userId} nickName={nickName} />}
      {flag === "lotto" && <Lotto />}
    </div>
  );
};

export default MainPage;
