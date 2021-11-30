/** @jsxImportSource @emotion/react */

import { styles } from "./styles";

const Display = ({ message, letter, number, userCash }) => {
  return (
    <div css={styles.miniDisplay}>
      <div css={styles.mainText}> {message}</div>
      <div css={styles.subText}>
        <div>
          Item : {letter}{number}
        </div>
        <div>Amount Inserted : $ {userCash.toFixed(2)} </div>
      </div>
    </div>
  );
}

export default Display;