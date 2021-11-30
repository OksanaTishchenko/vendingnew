import { useState } from "react";

export const useMode = () => {
  const [isDark, setIsDark] = useState(true);

  const changeIsDark = () => {
    setIsDark(!isDark)
  }

  return { isDark, changeIsDark }
}
