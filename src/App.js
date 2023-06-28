import ProductDetails from './pages/ProductDetails';
import ProductListing from './components/ProductListing';
import {Routes, Route, Navigate} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      
      {/* Components from react-router-dom are used to help us in the navigation throughout the app */}

      <Routes>
        <Route path='/' element={<ProductListing/>} />
        <Route path='/product/:productId' element={<ProductDetails/>} />

        {/* When there is an invalid url user will be redirected to Home Page */}
        <Route path="*" element={ <Navigate to="/" /> } />
      </Routes>

    </div>
  );
}

export default App;
