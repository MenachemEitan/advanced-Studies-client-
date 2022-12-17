import {Route, Routes} from "react-router-dom"
import { Admin } from "./components/Admin";
import Header from "./components/Header";
import { SecureRoute } from "./components/SecureRoute";
import ClassesPage from "./pages/ClassesPage";
import Home from "./pages/Home";

export const App = () => {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/classes" element={<ClassesPage />} />
        <Route path="/admin" element={<SecureRoute><Admin/></SecureRoute>} />
        <Route path="/profile"  />
      </Routes>
    </div>
  );
};

