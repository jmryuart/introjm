import React from "react";

const Academy = ({ styled }) => {
  return (
    <>
      <div className={styled.academy}>
        <h3>πΆ νλ ₯μ¬ν­</h3>
        <table>
          <tbody>
            <tr>
              <th rowSpan="3">νλ ₯</th>
              <td>μ¬νκΈ°κ°</td>
              <td>νκ΅λͺ</td>
              <td>μ κ³΅</td>
              <td>μ‘Έμμ¬λΆ</td>
              <td>μμ¬μ§</td>
            </tr>
            <tr>
              <td>2006.03~2012.02</td>
              <td>μμλνκ΅</td>
              <td>μνμμνκ³Ό</td>
              <td>μ‘Έμ</td>
              <td>μΆ©λΆ μ²­μ£Όμ</td>
            </tr>
            <tr>
              <td>2003.03~2006.02</td>
              <td>λ¨λμ κ³ λ±νκ΅</td>
              <td>μ΄κ³΅κ³</td>
              <td>μ‘Έμ</td>
              <td>λμ κ΄μ­μ</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className={styled.academy_mb}>
        <h3>πΆ νλ ₯μ¬ν­</h3>
        <ul>
          <li>
            <h4>μμλνκ΅</h4>
            <h5>μ¬νκΈ°κ° : 2006.03~2012.02</h5>
            <h5>μ κ³΅ : μνμμνκ³Ό μ‘Έμ</h5>
          </li>
          <li>
            <h4>λ¨λμ κ³ λ±νκ΅</h4>
            <h5>μ¬νκΈ°κ° : 2003.03~2006.02</h5>
            <h5>μ κ³΅ : μ΄κ³΅κ³</h5>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Academy;
