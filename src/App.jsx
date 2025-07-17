import { Route, Routes } from "react-router-dom";
import "./App.css";

import { NavBar, PrivateRoute } from "./components";
import { AuthProvaider } from "./context";
import { lazy } from "react";

const Home = lazy(() => import('./pages/Home.jsx'));
const Categories = lazy(() => import('./pages/Сategories.jsx'));
const CategoriesDetail  = lazy(() => import('./pages/СategoriesDetail.jsx'));
const Login  = lazy(() => import('./pages/Login.jsx'));
const Error  = lazy(() => import('./pages/Error.jsx'));

function App() {
  return (
    <>
      <AuthProvaider>
        <Routes>
          <Route element={<NavBar />}>
            <Route path="/" element={<Home />} />
            <Route
              path="/categories/:categorie"
              element={
                <PrivateRoute>
                  <Categories />
                </PrivateRoute>
              }
            />
            <Route
              path="/categories/:categorie/:id"
              element={
                <PrivateRoute>
                  <CategoriesDetail />
                </PrivateRoute>
              }
            />
          </Route>
          <Route path="/login" element={<Login />} />
          <Route path="/*" element={<Error />} />
        </Routes>
      </AuthProvaider>
    </>
  );
}

export default App;
