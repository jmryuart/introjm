import React from "react";

const Academy = ({ styled }) => {
  return (
    <>
      <div className={styled.academy}>
        <h3>🔶 학력사항</h3>
        <table>
          <tbody>
            <tr>
              <th rowSpan="3">학력</th>
              <td>재학기간</td>
              <td>학교명</td>
              <td>전공</td>
              <td>졸업여부</td>
              <td>소재지</td>
            </tr>
            <tr>
              <td>2006.03~2012.02</td>
              <td>서원대학교</td>
              <td>식품영양학과</td>
              <td>졸업</td>
              <td>충북 청주시</td>
            </tr>
            <tr>
              <td>2003.03~2006.02</td>
              <td>남대전고등학교</td>
              <td>이공계</td>
              <td>졸업</td>
              <td>대전광역시</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className={styled.academy_mb}>
        <h3>🔶 학력사항</h3>
        <ul>
          <li>
            <h4>서원대학교</h4>
            <h5>재학기간 : 2006.03~2012.02</h5>
            <h5>전공 : 식품영양학과 졸업</h5>
          </li>
          <li>
            <h4>남대전고등학교</h4>
            <h5>재학기간 : 2003.03~2006.02</h5>
            <h5>전공 : 이공계</h5>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Academy;
