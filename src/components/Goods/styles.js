import { css } from "@emotion/react";

export const styles = {
  display: css`
  width: 65%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  border-radius: 10px;
  padding: 10px;
  background: rgba(255, 255, 255, 0.02);
  box-shadow: inset -2px -2px 7px #ffffff25,
    inset 3px 3px 6px rgba(0, 0, 0, 0.4);
`,
  product: css`
  width: calc(16.667% - 25px);
  height: 130px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  margin: 10px;
  color: #ffffff90;
  background-color: #6a93cb;
  border-radius: 5px;
  border: none;
  box-shadow: -2px -2px 3px #ffffff35, 4px 4px 5px rgba(0, 0, 0, 0.3);
  font-weight: 500;
  font-size: 16px;
  outline: none;
  transition: all 200ms;
`,
  active: css`
  background: #1b62c460;
  box-shadow: -4px -5px 10px #ffffff35, 5px 6px 10px rgba(0, 0, 0, 0.3);
  width: calc(16.667% - 15px);
  height: 140px;
`,
  image: css`
  width: auto;
  height: 60%;
`,
}