// Install Axios if you haven't already: npm install axios

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ProductDetails from './Components/ProductDetails';
import ProductsGrid from './Components/ProductsGrid';
import Home from './Components/Home';


const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/products/:productId" element={<ProductDetails />} />
      <Route path="/products" element={<ProductsGrid />} />
      <Route path="/" element={<Home />} />
    </Routes>

  </BrowserRouter>
);

export default App;