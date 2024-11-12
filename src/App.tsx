import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
  Outlet,
} from "react-router-dom";
import Cookies from "js-cookie";
import { Home, Leads, Login, Profile, Registration } from "./pages";

function App() {
  const ProtectedRoute = () => {
    const checkAuthCookie = Cookies.get("Autorization");
    if (!checkAuthCookie) {
      alert("Autenticação necessária");
      return <Navigate to="/" replace />;
    }

    return <Outlet />;
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/cadastro" element={<Registration />} />
        <Route element={<ProtectedRoute />}>
          <Route path="/home" element={<Home />} />
          <Route path="/leads" element={<Leads />} />
          <Route path="/perfil" element={<Profile />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
