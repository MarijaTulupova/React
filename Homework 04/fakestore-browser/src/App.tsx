import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { Products } from "./pages/Products";
import { Navigation } from "./components/Navigation/Navigation";
import AddProduct from "./pages/AddProduct";
import { CategoriesProvider } from "./context/CategoriesContext";
import { ProductsProvider } from "./context/ProductsContext";

function App() {
  return (
    <>
      <BrowserRouter>
        <CategoriesProvider>
          <ProductsProvider>
            <Navigation />

            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/category/:categoryName" element={<Home />} />
              <Route path="/products" element={<Products />} />
              <Route path="/add-product" element={<AddProduct />} />
            </Routes>
          </ProductsProvider>
        </CategoriesProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
