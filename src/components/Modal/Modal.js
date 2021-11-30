/** @jsxImportSource @emotion/react */

import ReactDOM from "react-dom";
import { useSelector } from "react-redux";

import { styles } from "./styles";

function Modal({ close }) {
  const handover = useSelector(state => state.handover.handover);

  return ReactDOM.createPortal(
    <div>
      <div css={styles.overlay} onClick={close}></div>
      <div css={styles.popup}>
        <div css={styles.closeBtn} onClick={close}>&times;</div>
        <table>
          <thead>
            <tr>
              <th>Сurrency</th>
              <th>Quantity</th>
            </tr>
          </thead>
          <tbody>
            {handover.map(item => (
              <tr key={item.id}>
                <td>&#162;{item.coin}</td>
                <td>{item.quantity}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>,
    document.getElementById('modal')
  );
}

export default Modal;