import React, { useRef } from "react";

export default function PageNum({ list, setBoardpage, index }) {
  const thing = document.getElementsByClassName("pageNum");
  const bordRef = useRef("");
  const onClick = () => {
    setBoardpage(list);
    for (let i = 0; i < thing.length; i++) {
      thing[i].style.fontWeight = "300";
    }
    bordRef.current.style.fontWeight = "700";
  };
  if (index === 0) {
    // document.querySelector("pageNum").style.fontWeight = "700";
  }
  return (
    <>
      <i className="pageNum" ref={bordRef} onClick={onClick}>
        {list}
      </i>
    </>
  );
}
