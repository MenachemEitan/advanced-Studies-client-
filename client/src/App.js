import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import ClassesPage from "./pages/ClassesPage";
import Home from "./pages/Home";

export const App = () => {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="*" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/classes" element={<ClassesPage />} />
      </Routes>
    </div>
  );
};
