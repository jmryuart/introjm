import React, { useRef, useState } from "react";
import { auth, dbService } from "../fbase";
import styled from "../css/Join.module.css";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
} from "firebase/auth";
import {
  addDoc,
  collection,
  where,
  query,
  onSnapshot,
} from "firebase/firestore";

const Join = ({closeBtn}) => {
  const emailRef = useRef("");
  const passwordRef = useRef("");
  const passwordCheckRef = useRef("");
  const nicknameRef = useRef("");
  const [checkPassword, setCheckPassword] = useState("Password Check");
  const [nickName, setNickName] = useState("NickName");
  const [joinFlag, setJoinFlag] = useState(false);
  const onSubmit = async (event) => {
    event.preventDefault();
    if (joinFlag) {
      try {
        await createUserWithEmailAndPassword(
          auth,
          emailRef.current.value,
          passwordRef.current.value
        )
          .then(() => {
            onAuthStateChanged(auth, (user) => {
              addDoc(collection(dbService, "nicknameTable"), {
                userid: user.uid,
                nickname: nicknameRef.current.value,
              });
            });
          })
          .then(() => {
            closeBtn();
          });
      } catch (error) {
        alert(error.message);
        // alert("이메일 형식 또는 비밀번호 6자리 이상을 확인해주세요.");
        emailRef.current.value = "";
        passwordRef.current.value = "";
        passwordCheckRef.current.value = "";
        nicknameRef.current.value = "";
      }
    } else {
      alert("양식을 다시 한번 확인해주세요.");
    }
    setJoinFlag(false);
  };
  const passwordCheck = () => {
    if (passwordCheckRef.current.value !== "") {
      if (passwordCheckRef.current.value === passwordRef.current.value) {
        setCheckPassword("비밀번호 일치");
      } else {
        setCheckPassword("비밀번호 불일치");
      }
    } else {
      setCheckPassword("Password Check");
    }
  };
  const nicknameCheck = () => {
    const checkNick = query(
      collection(dbService, "nicknameTable"),
      where("nickname", "==", nicknameRef.current.value)
    );
    onSnapshot(checkNick, (snapshot) => {
      const getNickname = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      if(nicknameRef.current.value.length < 9){
        if (getNickname[0]) {
          setNickName("중복된 nickname입니다.");
          setJoinFlag(false);
        } else {
          setNickName("NickName");
          setJoinFlag(true);
        }
      } else {
        setNickName("닉네임이 너무 깁니다.");
        setJoinFlag(false);
      }
      
    });
  };

  return (
    <div className={styled.join}>
      <form onSubmit={onSubmit}>
        <div className={styled.input}>
          <h4>E-mail</h4>
          <input type="email" required ref={emailRef} />
        </div>
        <div className={styled.input}>
          <h4>Password</h4>
          <input type="password" required ref={passwordRef} />
        </div>
        <div className={styled.input}>
          <h4>{checkPassword}</h4>
          <input
            type="password"
            required
            ref={passwordCheckRef}
            onChange={passwordCheck}
          />
        </div>
        <div className={styled.input}>
          <h4>{nickName}</h4>
          <input
            type="text"
            required
            ref={nicknameRef}
            onChange={nicknameCheck}
          />
        </div>
        <button type="submit">가입하기</button>
      </form>
      <span onClick={closeBtn}>닫기</span>
    </div>
  );
};

export default Join;
