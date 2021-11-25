import ReactDOM from "react-dom";
import { useSelector } from "react-redux";

import { css } from "@emotion/css";
import styled from "@emotion/styled";

function Modal({ close }) {
  const handover = useSelector(state => state.handover.handover);

  const Td = styled.td`
    border: 1px solid white;
    padding: 10px;
  `;

  const Th = styled.td`
    padding: 10px;
    font-weight: bold;
  `;

  return ReactDOM.createPortal(
    <div>
      <div className={css`
        	position: fixed;
          left: 0;
          top: 0;
          width: 100%;
          height: 100%;
          z-index: 10;
          background-color: rgba(37, 67, 102, 0.8)
      `} onClick={close}></div>
      <div className={css` 
        	position: fixed;
          width: 500px;
          left: 50%;
          top: 50%;
          transform: translate(-50%, -50%); 
          padding: 20px;
          z-index: 11;
          background-color: #6a93cb;
          box-shadow: -2px -2px 6px #ffffff70, 4px 4px 9px rgb(0 0 0 / 40%);
      `}>
        <div className={css`
          position: absolute;
          top: 5px;
          right: 10px;
          font-size: 2rem;
          cursor: pointer;
        `} onClick={close}>&times;</div>
        <table className={css`
          width: 100%;
          border-collapse: collapse;
          text-align: center;
        `}>
          <thead>
            <tr>
              <Th>Сurrency</Th>
              <Th>Quantity</Th>
            </tr>
          </thead>
          <tbody>
            {handover.map(item => (
              <tr key={item.id}>
                <Td>&#162;{item.coin}</Td>
                <Td>{item.quantity}</Td>
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