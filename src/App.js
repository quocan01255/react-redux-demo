import logo from './logo.svg';
import './App.css';
import { useCallback, useEffect, useState, createContext } from "react"
import Header from './components/Header.js'
import ProductItem from './components/ProductItem.js';
import Cart from './components/Cart.js'
import { useSelector, useDispatch } from 'react-redux';
// import { increment, decrement } from './services/count/action.js'
import { fetchProducts } from './services/call-api/fetchProducts';

export const CategoriesContext = createContext()

function App() {
  const [category, setCategory] = useState('')
  const [categories, setCategories] = useState([])
  const [cart, setCart] = useState([])
  const [accessCart, setAccessCart] = useState(false)

  const productsList = useSelector((state) => state.products)
  const loading = useSelector((state) => state.loading)
  const dispatch = useDispatch()

  // Call API to get products
  useEffect(() => {
    dispatch(fetchProducts())
  }, [])

  // Get categories every time products change
  useEffect(() => {
    const productCategory = productsList.map(product => product.category)
    const categoryList = [...new Set(productCategory)]
    setCategories(categoryList)
  }, [productsList])

  // Handle functions
  const handleChoose = useCallback((newCategory) => {
    setCategory(newCategory)
  }, [])

  const handleAddProduct = useCallback((product) => {
    setCart((prevCart) => [...prevCart, product])
  }, [])

  const handleRemoveProduct = useCallback((id) => {
    const newCart = [...cart]
    const result = newCart.filter((item) => item.id !== id)
    setCart(result)
  }, [cart])

  const handleAccessCart = useCallback((isAccess) => {
    setAccessCart(isAccess)
  }, [])

  // Render
  if (loading) {
    return <div>Loading...</div>
  } else {
    if (!accessCart) {
      return (
        <CategoriesContext.Provider value={categories}>
          <div className="container text-center">
            <div className="row">
              <Header navTo={handleChoose} accessToCart={handleAccessCart} />
              {
                (category
                  &&
                  productsList.map(product => (
                    product.category === category &&
                    <ProductItem
                      key={product.id}
                      product={product}
                      addToCart={handleAddProduct}
                    />
                  ))
                )
                ||
                productsList.map(product => (
                  <ProductItem
                    key={product.id}
                    product={product}
                    addToCart={handleAddProduct}
                  />
                ))
              }
            </div>
          </div>
        </CategoriesContext.Provider>
      )
    }
    return (
      <CategoriesContext.Provider value={categories}>
        <div className="container text-center">
          <div className="row">
            <Header navTo={handleChoose} accessToCart={handleAccessCart} />
            <Cart cartList={cart} removeFromCart={handleRemoveProduct} />
          </div>
          {/* <p>Count: {count}</p>
          <button onClick={() => dispatch(increment())}>Increment</button>
          <button onClick={() => dispatch(decrement())}>Decrement</button> */}
        </div>
      </CategoriesContext.Provider>
    )
  }


}

export default App;
