import React from "react";

const Military = ({styled}) => {
  return (
    <>
      <div className={styled.military}>
        <h3>🔶 병역사항</h3>
        <table>
          <tbody>
            <tr>
              <th rowSpan="2">병역</th>
              <td>군종</td>
              <td>병과</td>
              <td>복무기간</td>
              <td>전역사유</td>
            </tr>
            <tr>
              <td>육군</td>
              <td>조리병</td>
              <td>2007.09.11 ~ 2009.08.11</td>
              <td>병장 만기 전역</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className={styled.military_mb}>
        <h3>🔶 병역사항</h3>
        <ul>
          <li>
            <h4>대한민국 육군</h4>
            <h5>주특기 : 조리병</h5>
            <h5>병역기간 : 2007.09.11 ~ 2009.08.11</h5>
            <h5>병장 만기 전역</h5>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Military;
