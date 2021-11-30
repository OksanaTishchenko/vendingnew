import { css } from "@emotion/react";

export const styles = {
  container: css`
    height: 520px;
  `,
  vendingMachine: css`
    width: 900px;
    height: 520px;
    position: relative;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 20px;
    background-color: #6a93cb;
    margin: 0 auto;
    position: relative;
    border-radius: 15px;
    box-shadow: -3px -3px 5px #ffffff70, 3px 3px 5px rgba(0, 0, 0, 0.5);
  `,
  glassPanel: css`
    position: absolute;
    width: calc(65% - 8px);
    height: calc(100% - 40px);
    z-index: 4;
    top: 19px;
    left: 19px;
    border-radius: 15px;
    background: rgba(0, 0, 0, 0.0525);
    border: 2px solid rgba(0, 0, 0, 0.15);
  `,
  glassShine: css`
    width: 100%;
    height: 100%;
    position: relative;
    overflow: hidden;
    border-radius: 15px;
    &::before,
    &::after {
      content: "";
      position: absolute;
      z-index: 1;
    }
    &::before {
      top: -125%;
      right: 0;
      bottom: -108%;
      left: -30%;
      transform-origin: 100% 50%;
      background-image: linear-gradient(
          to left,
          transparent 10%,
          rgba(white, 0.04) 10%,
          rgba(white, 0.07) 15%,
          transparent 15%,
          transparent 20%,
          rgba(white, 0.06) 20%,
          rgba(white, 0.1) 25%,
          transparent 25%
        ),
        linear-gradient(to left, rgba(black, 0) 0.5%, rgba(black, 0.4) 130%);

      transform: translate(0%, #{(100% / 6)}) rotate(45deg);
      transition: transform 550ms cubic-bezier(0.68, -0.55, 0.265, 1.55);
    }
  `,
  controls: css`
    width: calc(35% - 40px);
    display: flex;
    flex-direction: column;
  `,
}