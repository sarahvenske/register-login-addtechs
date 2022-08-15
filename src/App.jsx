import "./App.css";
import { Routes, Route } from "react-router-dom";
import MainRoutes from "./routes";
import Global from "./styles/global";

function App() {
  return (
        <main>
          <Global />
          <MainRoutes />
        </main>

  );
}

export default App;
