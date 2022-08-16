import "./App.css";
import { Routes, Route } from "react-router-dom";
import MainRoutes from "./routes";
import Global from "./styles/global";
import AuthProvider from "./context/AuthContext";

function App() {
  return (
        <main>
          <AuthProvider>
            <Global />
            <MainRoutes />
          </AuthProvider>
        </main>

  );
}

export default App;
