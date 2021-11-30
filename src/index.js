import React from "react";
import ReactDOM from "react-dom";

import App from "./App";
import { useMode } from "./hooks/useMode";

import { Provider } from "react-redux";
import { store } from "store/store";
import { ThemeProvider } from "@emotion/react";

import { modeContext } from "context/modeContext";

const themeDark = {
  background: "#537895",
  backgroundImage: "linear-gradient(315deg, #537895 0%, #09203f 74%)"
};

const themeLight = {
  background: "#dadfe2",
  backgroundImage: "linear-gradient(315deg, #ffff 40%, #dfe9f5 78%)"
};

function Root() {
  const { isDark, changeIsDark } = useMode();

  return (
    <modeContext.Provider value={{ isDark, changeIsDark }}>
      <Provider store={store}>
        <ThemeProvider theme={isDark ? themeDark : themeLight}>
          <App />
        </ThemeProvider>
      </Provider>
    </modeContext.Provider>
  );
}

ReactDOM.render(
  <Root />,
  document.getElementById("root")
);

