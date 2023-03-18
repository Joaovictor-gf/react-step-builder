import { render } from "react-dom";
import { StepsProvider } from "react-step-builder";

import App from "./App";

const rootElement = document.getElementById("root");
render(
  <StepsProvider>
    <App />
  </StepsProvider>,
  rootElement
);
