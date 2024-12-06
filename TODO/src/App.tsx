import { Route, Routes } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import DrawerPage from "./pages/DrawerPage";
import ProfilePage from "./pages/ProfilePage";
import TrashPage from "./pages/TrashPage";
import MainPage from "./pages/MainPage";
import NavigationBar from "./components/NavigationBar";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/drawer" element={<DrawerPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/trash" element={<TrashPage />} />
      </Routes>
      <NavigationBar />
    </div>
  );
}

export default App;
