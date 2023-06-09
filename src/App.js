import './App.css';
import { AppNavbar } from "./components/AppNavbar";
import Shop from './pages/shop';
import Cart from './pages/cart';
import  Payout from './pages/payout'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Container } from "react-bootstrap";
import { ShopContextProvider } from './context/shop-context';

function App() {
  return (
    <div className="App">
    <ShopContextProvider>
      <Router>
        <AppNavbar />
        <Container className="mb-4">
        <Routes>
          <Route path='/' element={<Shop />} />
          <Route path='/Shop' element={<Shop />} />
          <Route path='/Cart' element={<Cart/>} />
          <Route path='/checkout' element={<Payout />} />
        </Routes>
        </Container>
      </Router>
      </ShopContextProvider>
    </div>
  );
}

export default App;
