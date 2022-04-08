import React, { useEffect, useRef, useState } from "react";
import styled from "../css/MainPage.module.css";
import { Route, NavLink } from "react-router-dom";
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

const MainPage = () => {
  const [loggingFlag, setLoggingFlag] = useState(false);
  const [logFlag, setLogFlag] = useState(false);
  const [joinFlag, setJoinFlag] = useState(false);
  const [nickName, setNickName] = useState(null);
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
      setNickName(null)
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
        <li>
          <NavLink to="/">
            H<span>OME</span>
          </NavLink>
        </li>
        <li>
          <NavLink to="/about">
            A<span>BOUT</span>
          </NavLink>
        </li>
        <li>
          <NavLink to="/portfolio">
            P<span>ORTFOLIO</span>
          </NavLink>
        </li>
        <li>
          <NavLink to="/board">
            B<span>OARD</span>
          </NavLink>
        </li>
        <li>
          <NavLink to="/cheat">
            C<span>HEAT</span>
          </NavLink>
        </li>
        <li>
          <NavLink to="/introJinmo">
            자<span>기소개서</span>
          </NavLink>
        </li>
      </menu>
      <div className={styled.logJoin}>
        <ul>
          {loggingFlag ? (
            <li onClick={logOut}>로그아웃</li>
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
      <Route path="/introJinmo" exact>
        <Introduce />
      </Route>
      <Route path="/" exact>
        <Home />
      </Route>
      <Route path="/about" exact>
        <About />
      </Route>
      <Route path="/portfolio" exact>
        <Portfolio />
      </Route>
      <Route path="/board" exact>
        <Board />
      </Route>
      <Route path="/cheat" exact>
        <Cheat />
      </Route>
    </div>
  );
};

export default MainPage;
