import './App.css';
import { AppNavbar } from "./components/AppNavbar";
import Home from './pages/home';
import Shop from './pages/shop';
import Cart from './pages/cart';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Container } from "react-bootstrap";

function App() {
  return (
    <div className="App bg-light">
    
      <Router>
        <AppNavbar />
        <Container className="mb-4">
        <Routes>
          {/* <Route path='/' element={<AppNavbar />} /> */}
          <Route path='/' element={<Home />} />
          <Route path='/Shop' element={<Shop />} />
          <Route path='/Cart' element={<Cart />} />
        </Routes>
        </Container>
      </Router>
    </div>
  );
}

export default App;
