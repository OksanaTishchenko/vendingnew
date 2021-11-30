// /** @jsxImportSource @emotion/react */;

import { FaDollarSign, FaMoon, FaSun } from "react-icons/fa";

import { styles } from "./styles";

const Icons = ({ openModal, changeMode, isDark }) => {

  return (
    <div css={styles.icons}>
      <FaDollarSign css={styles.modal} onClick={openModal} />

      {isDark &&
        <FaMoon css={styles.night} onClick={changeMode} />}

      {!isDark &&
        <FaSun css={styles.day} onClick={changeMode} />}

    </div>
  );
}

export default Icons;