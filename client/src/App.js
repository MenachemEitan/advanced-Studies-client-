import {Route, Routes} from "react-router-dom"
import Header from "./components/Header";
import { Login } from "./components/Login";
import ClassesPage from "./pages/ClassesPage";
import Home from "./pages/Home";

export const App = () => {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/classes" element={<ClassesPage />} />
        {/* <Route path="/login" element={<Login/>} /> */}
      </Routes>
    </div>
  );
};

