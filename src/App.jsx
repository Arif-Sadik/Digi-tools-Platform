import { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Stats from './components/Stats'
import ProductsSection from './components/ProductsSection'

function App() {
  const [cart, setCart] = useState([])
  const [activeTab, setActiveTab] = useState('products')

  function addToCart(product) {
    if (!cart.some((item) => item.id === product.id)) {
      setCart([...cart, product])
    }
  }

  function removeFromCart(productId) {
    setCart((currentCart) =>
      currentCart.filter((product) => product.id !== productId)
    )
  }

  function clearCart() {
    setCart([])
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
    </div>
  )
}

export default App
