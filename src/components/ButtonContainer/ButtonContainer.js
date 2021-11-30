/** @jsxImportSource @emotion/react */

import Button from "components/Button/Button";

import { styles } from "./styles";

const ButtonContainer = ({ changeLetter, changeNumber, disabled, pushCancel, purchaseHandler, changeCoin }) => {
  return (
    <div css={styles.keyboard}>
      <Button style={styles.button} onClick={changeLetter} text={"A"}></Button>
      <Button style={styles.button} onClick={changeLetter} text={"B"}></Button>
      <Button style={styles.button} onClick={changeLetter} text={"C"}></Button>
      <Button style={styles.button} disabled={disabled} onClick={changeNumber} text={1}></Button>
      <Button style={styles.button} disabled={disabled} onClick={changeNumber} text={2}></Button>
      <Button style={styles.button} disabled={disabled} onClick={changeNumber} text={3}></Button>
      <Button style={styles.button} disabled={disabled} onClick={changeNumber} text={4}></Button>
      <Button style={styles.button} disabled={disabled} onClick={changeNumber} text={5}></Button>
      <Button style={styles.button} disabled={disabled} onClick={changeNumber} text={6}></Button>
      <Button style={[styles.button, styles.smallButton]} onClick={changeCoin} text={25}></Button>
      <Button style={[styles.button, styles.smallButton]} onClick={changeCoin} text={10}></Button>
      <Button style={[styles.button, styles.smallButton]} onClick={changeCoin} text={5}></Button>
      <Button style={[styles.button, styles.cancel, styles.bigButton]} onClick={pushCancel} text={"Cancel"}></Button>
      <Button style={[styles.button, styles.purchase, styles.bigButton]} onClick={purchaseHandler} text={"Purchase"}></Button>
    </div>
  );
}

export default ButtonContainer;