import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Categories from './pages/Categories';


function App() {
  return (
      <Router>
        <Routes>
          <Route path="/" element={<Categories />} />
        </Routes>
      </Router>
  );
}

export default App;
