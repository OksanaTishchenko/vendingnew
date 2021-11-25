import { useState } from "react";

export const useMode = () => {
  const [mode, setMode] = useState(false);

  const changeMode = () => {
    setMode(!mode)
  }

  return { mode, changeMode }
}
