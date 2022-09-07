import UserProvider from "./context/UserContext";
import Global from "./styles/global";
import MainRoutes from "./routes";
import TechProvider from "./context/TechContext";

function App() {
  return (
        <div className="window">

              <UserProvider>
                <TechProvider>
                  <Global />
                  <MainRoutes />
                </TechProvider>
              </UserProvider>

        </div>
  );
}

export default App;
