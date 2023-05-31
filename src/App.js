import './App.css';
import { AppNavbar } from "./components/AppNavbar";
import Shop from './pages/shop';
import Cart from './pages/cart';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <AppNavbar />
        <Routes>
          {/* <Route path='/' element={<AppNavbar />} /> */}
          <Route path='/Shop' element={<Shop />} />
          <Route path='/Cart' element={<Cart />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
