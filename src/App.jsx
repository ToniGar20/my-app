import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Categories from './pages/Categories/Categories';
import Category from "./pages/Category/Category";


function App() {
  return (
      <Router>
        <Routes>
            <Route path="/" element={<Categories />} />
            <Route path="/category/:id" element={<Category />} />
        </Routes>
      </Router>
  );
}

export default App;
