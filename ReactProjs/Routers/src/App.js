import {Route} from 'react-router-dom'
import Welcome from './Components/Pages/Welcome';
import Products from './Components/Pages/Products';
import MainHeader from './Components/MainHeader';
import ProductDetail from './Components/Pages/ProductDetail';

function App() {
  return (
    <div>
      <MainHeader />
      <main>
      <Route path='/welcome'>
        <Welcome/>
      </Route>
      <Route path='/products'>
        <Products/>
      </Route>
      <Route path='/product-detail/:productId'>
        <ProductDetail/>
      </Route>
      </main>
    </div>
  );
}

export default App;
