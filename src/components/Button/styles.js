import { css } from "@emotion/react";

export const classes = {
  button: css`
    width: calc(33% - 20px);
    height: 60px;
    margin: 10px;
    color: #ffffff85;
    background: #6786bf4f;
    border-radius: 10px;
    border: none;
    box-shadow: -2px -2px 6px #ffffff70, 4px 4px 9px rgba(0, 0, 0, 0.4);
    font-weight: 500;
    font-size: 16px;
    outline: none;
    cursor: pointer;

    &:active {
      font-size: 13px;
      box-shadow: inset -3px -3px 7px #ffffff45,
        inset 3px 3px 5px rgba(0, 0, 0, 0.4);
    }

    &:disabled {
      cursor: not-allowed;
    }

    &.cancel {
      background: #ff6d6d4f;
    }
  `,
  cancel: css`
   background: #ff6d6d4f;
  `,
  purchase: css`
  background: #4eadb24f;
  `,
}