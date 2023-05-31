import React from "react";
import { Router } from "./routes/Routes";
import "./styles/globals.css";
import { ApiProvider } from "./context/Api/index.jsx";
import { FunctionsProvider } from "./context/Functions";

function App() {
  return (
    <>
      <ApiProvider>
        <FunctionsProvider>
          <Router />
        </FunctionsProvider>
      </ApiProvider>
    </>
  );
}
export default App;
