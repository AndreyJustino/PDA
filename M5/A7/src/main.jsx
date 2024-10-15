import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider} from "react-router-dom";
import Cart from './Pages/Cart.jsx';
import Product from './Pages/Product.jsx';
import { ProviderProduct } from './context/Product.context.jsx';
import { CartProvider } from './context/Cart.context.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children:[
      {
        path: '/',
        element: <Product/>,
      },
      {
        path: '/cart',
        element: <Cart />,
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ProviderProduct> {/* tudo que tiver aqui dentro tera acesso ao hook */}
        <CartProvider>
          <RouterProvider router={router}/>
        </CartProvider>
      </ProviderProduct>
  </StrictMode>,
)
