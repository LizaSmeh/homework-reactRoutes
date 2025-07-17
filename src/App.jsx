import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Home, Categories, CategoriesDetail, Error, Login } from "./pages";
import { NavBar, PrivateRoute } from "./components";
import { AuthProvaider } from "./context";


function App() {
   return (
    <>
    <AuthProvaider>
      
      <Routes>
        <Route element={<NavBar />}>
        <Route path="/" element={<Home />} />
        <Route path="/categories/:categorie" element={<PrivateRoute><Categories /></PrivateRoute>} />
        <Route
          path="/categories/:categorie/:id"
          element={<PrivateRoute><CategoriesDetail /></PrivateRoute>}
        />
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="/*" element={<Error/>} />
      </Routes></AuthProvaider>
    </>
  );
}

export default App;
