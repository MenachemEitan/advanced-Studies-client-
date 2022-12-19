import { Route, Routes } from "react-router-dom";

import { Admin } from "./components/Admin";
import Header from "./components/Header";
import { Login } from "./components/Login";
import { SecureRoute } from "./components/SecureRoute";
import { UserProvider } from "./context/UserContext";
import ClassesPage from "./pages/ClassesPage";
import ClassPage from "./pages/ClassPage";
import Home from "./pages/Home";

export const App = () => {
  return (
    <div className="App">
      <Header />
      <UserProvider>
        <Routes>
          <Route path="*" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/classes" element={<ClassesPage />} />
          <Route path="/class" element={<ClassPage />} />
          <Route path="/admin" element={ <SecureRoute> <Admin /></SecureRoute>}/>
          <Route path="/profile" /></Routes>
      </UserProvider>
    </div>
  );
};
