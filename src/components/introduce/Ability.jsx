import React from "react";

const Ability = ({styled}) => {
  return (
    <>
      <div className={styled.ability}>
        <h3>🔷 컴퓨터 활용</h3>
        <table>
          <tbody>
            <tr>
              <th rowSpan="4">언어 능력</th>
              <td>사용 가능한 언어</td>
              <td>수준</td>
            </tr>
            <tr>
              <td>html</td>
              <td>시멘틱태그를 활용하여 체계적인 html 환경 구축 가능</td>
            </tr>
            <tr>
              <td>css</td>
              <td>scss를 활용하여 복잡적이고 다양한 속성 부여 가능</td>
            </tr>
            <tr>
              <td>javascript</td>
              <td>jQuery, React를 활용하여 홈페이지 제작 가능</td>
            </tr>
            <tr>
              <th rowSpan="4">활용 능력</th>
              <td>활용 프로그램</td>
              <td>활용수준</td>
            </tr>
            <tr>
              <td>Photoshop</td>
              <td>이미지 편집, 배치, 보정등 보조작업 가능</td>
            </tr>
            <tr>
              <td>hwp</td>
              <td>표를 제작하여 체계적으로 내용 구성 가능</td>
            </tr>
            <tr>
              <td>exel</td>
              <td>계산 서식을 활용하여 반복적인 업무 편의활용 가능</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className={styled.ability_mb}>
        <h3>🔷 컴퓨터 활용</h3>
        <ul>
          <li>
            <h4>html</h4>
            <h5>시멘틱태그를 활용하여 체계적인 html 환경 구축 가능</h5>
          </li>
          <li>
            <h4>css</h4>
            <h5>scss를 활용하여 복잡적이고 다양한 속성 부여 가능</h5>
          </li>
          <li>
            <h4>javascript</h4>
            <h5>jQuery, React를 활용하여 홈페이지 제작 가능</h5>
          </li>
        </ul>
        <ul>
          <li>
            <h4>Photoshop</h4>
            <h5>이미지 편집, 배치, 보정등 보조작업 가능</h5>
          </li>
          <li>
            <h4>hwp</h4>
            <h5>표를 제작하여 체계적으로 내용 구성 가능</h5>
          </li>
          <li>
            <h4>exel</h4>
            <h5>계산 서식을 활용하여 반복적인 업무 편의활용 가능</h5>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Ability;
