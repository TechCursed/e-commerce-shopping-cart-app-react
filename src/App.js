import './App.css';
import { AppNavbar } from "./components/AppNavbar";
import Shop from './pages/shop';
import Cart from './pages/cart';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Container } from "react-bootstrap";
import { ShopContextProvider } from './context/shop-context';

function App() {
  return (
    <div className="App bg-light">
    <ShopContextProvider>
      <Router>
        <AppNavbar />
        <Container className="mb-4">
        <Routes>
          {/* <Route path='/' element={<AppNavbar />} /> */}
          <Route path='/' element={<Shop />} />
          <Route path='/Shop' element={<Shop />} />
          <Route path='/Cart' element={<Cart/>} />
        </Routes>
        </Container>
      </Router>
      </ShopContextProvider>
    </div>
  );
}

export default App;
