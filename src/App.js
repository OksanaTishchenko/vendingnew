import Machine from "./components/Machine/Machine";
import { useTheme } from "@emotion/react";
import { css, Global } from "@emotion/react";

function App() {
  const theme = useTheme();

  return (
    <div>
      <Global styles={css`
          * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
          }
          body {
            font-family: Arial, Helvetica, sans-serif;
            background-color: ${theme.background};
            background-image: ${theme.backgroundImage};
            height: calc(100vh - 17px);
            display: flex;
            justify-content: center;
            align-items: center;
          }
        `} />
      <Machine />
    </div>
  );
}

export default App;
