/** @jsxImportSource @emotion/react */

const Button = ({ text, onClick, style, disabled }) => (
  <button onClick={() => onClick(text)} css={style} disabled={disabled}>{text}</button>
)

export default Button;