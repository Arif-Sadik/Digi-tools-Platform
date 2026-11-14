import { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Stats from './components/Stats'
import ProductsSection from './components/ProductsSection'

function App() {
  const [cart, setCart] = useState([])
  const [activeTab, setActiveTab] = useState('products')

  function addToCart(product) {
    if (cart.some((item) => item.id === product.id)) {
      toast.info('Product is already in your cart', {
        toastId: 'duplicate-product',
      })
      return
    }
    setCart([...cart, product])
    toast.success(`${product.name} added to cart`)
  }

  function removeFromCart(productId) {
    const removedProduct = cart.find((product) => product.id === productId)
    if (removedProduct) {
      setCart((currentCart) =>
        currentCart.filter((product) => product.id !== productId)
      )
      toast.success('Product removed from cart')
    }
  }

  function clearCart() {
    if (cart.length > 0) {
      setCart([])
      toast.success('Checkout completed successfully')
    }
  }

  return (
    <div className="min-h-screen bg-white">
      <Navbar cartCount={cart.length} />
      <main>
        <Hero />
        <Stats />
        <ProductsSection
          cart={cart}
          activeTab={activeTab}
          onTabChange={setActiveTab}
          onBuyNow={addToCart}
          onRemove={removeFromCart}
          onCheckout={clearCart}
        />
      </main>
      <ToastContainer position="top-right" autoClose={2500} />
    </div>
  )
}

export default App
