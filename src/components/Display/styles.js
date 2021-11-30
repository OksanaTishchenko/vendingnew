import { css } from "@emotion/react";

export const styles = {
  miniDisplay: css`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    font-family: "Orbitron", sans-serif;
    width: calc(100% - 30px);
    height: 100px;
    border-radius: 10px;
    color: #ffffff85;
    text-align: center;
    white-space: pre-line;
    padding: 12px 8px;
    background: rgba(255, 222, 239, 0.09);
    box-shadow: inset -2px -2px 4px #ffffff20,
    inset 2px 2px 6px rgba(0, 0, 0, 0.4);
  `,
  mainText: css`
    font-size: 0.85em;
  `,
  subText: css`
    display: flex;
    justify-content: space-around;
    font-size: 0.8em;
  `
}