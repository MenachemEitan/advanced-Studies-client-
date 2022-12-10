import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import { Login } from "./components/Login";
import { UserProvider } from "./context/UserContext";
import ClassesPage from "./pages/ClassesPage";
import ClassPage from "./pages/ClassPage";
import Home from "./pages/Home";

export const App = () => {
  return (
    <div className="App">
      <UserProvider>
        <Header />
        <Routes>
          <Route path="*" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/classes" element={<ClassesPage />} />
          <Route path="/class" element={<ClassPage />} />
          {/* <Route path="/login" element={<Login/>} /> */}
        </Routes>
      </UserProvider>
    </div>
  );
};
