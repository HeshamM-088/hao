import { Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./pages/home/Home";
import Products from "./pages/products/Products";
import Login from "./pages/login/Login";
import NotFound from "./pages/404/NotFound";

const App = () => {
  return (
    <div>
      <Header />

      <div className="text-center h-[55vh]">
        <Routes>
          <Route path="/" element={<Home />} 
          <Route path="/products" element={<Products />} 
          <Route path="/login" element={<Login />} 
          <Route path="*" element={<NotFound />} 
        </Routes>
      </div>

      <Footer />
    </div>
  );
};

export default App;
