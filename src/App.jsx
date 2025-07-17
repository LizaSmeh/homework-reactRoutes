import { Route, Routes } from "react-router-dom";
import "./App.css";
import ErrorBoundary from "./ErrorBoundary.jsx";
import { NavBar, PrivateRoute } from "./components";
import { AuthProvaider } from "./context";
import { lazy } from "react";

const Home = lazy(() => import('./pages/Home.jsx').then(module=>({default: module.Home})));
const Categories = lazy(() => import('./pages/Сategories.jsx').then(module=>({default: module.Categories})));
const CategoriesDetail  = lazy(() => import('./pages/СategoriesDetail.jsx').then(module=>({default: module.CategoriesDetail})));
const Login  = lazy(() => import('./pages/Login.jsx').then(module=>({default: module.Login})));
const Error  = lazy(() => import('./pages/Error.jsx').then(module=>({default: module.Error})));

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
