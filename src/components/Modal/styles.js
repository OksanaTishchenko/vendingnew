import { css } from "@emotion/react";

export const styles = {
  overlay: css`
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    z-index: 10;
    background-color: rgba(37, 67, 102, 0.8)
  `,
  popup: css`
    position: fixed;
    width: 500px;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%); 
    padding: 20px;
    z-index: 11;
    background-color: #6a93cb;
    box-shadow: -2px -2px 6px #ffffff70, 4px 4px 9px rgb(0 0 0 / 40%);
    table {
      width: 100%;
      border-collapse: collapse;
      text-align: center;
      th {
        padding: 10px;
        font-weight: bold;
      }
      td {
        border: 1px solid white;
        padding: 10px;
      }
    }
  `,
  closeBtn: css`
    position: absolute;
    top: 5px;
    right: 10px;
    font-size: 2rem;
    cursor: pointer;
  `,
}