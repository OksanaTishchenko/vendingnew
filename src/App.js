import { modeContext } from "context/modeContext";
import { useMode } from "hooks/useMode";

import Machine from "components/Machine/Machine";

import { css, Global } from "@emotion/react";

function App() {

  const { changeMode, mode } = useMode();

  return (
    <modeContext.Provider value={{ changeMode, mode }}>
      <div>
        <Global styles={css`
          * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
          }
          body {
            font-family: Arial, Helvetica, sans-serif;
            background-color: #537895;
            background-image: linear-gradient(315deg, #537895 0%, #09203f 74%);
            height: calc(100vh - 17px);
            display: flex;
            justify-content: center;
            align-items: center;
            &.sun {
              background-color: #dadfe2;
              background-image: linear-gradient(315deg, #ffff 40%, #dfe9f5 78%);
            }
          }
        `} />
        <Machine />
      </div>
    </modeContext.Provider>
  );
}

export default App;
