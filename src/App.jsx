import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Home, Categories, CategoriesDetail, Error } from "./pages";
import { NavBar } from "./components";


function App() {

	
  return (
    <>
      <NavBar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/categories/:categorie" element={<Categories />} />
        <Route
          path="/categories/:categorie/:id"
          element={<CategoriesDetail />}
        />
        <Route path="/*" element={<Error/>} />
      </Routes>
    </>
  );
}

export default App;
