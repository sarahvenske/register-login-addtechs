import AuthProvider from "./context/AuthContext";
import Global from "./styles/global";
import MainRoutes from "./routes";

function App() {
  return (
        <div className="window">

          <AuthProvider>
            <Global />
            <MainRoutes />
          </AuthProvider>

        </div>
  );
}

export default App;
