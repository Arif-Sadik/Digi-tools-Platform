import products from '../data/products.json'
import ProductCard from './ProductCard'

function ProductsSection({ cart, activeTab, onTabChange, onBuyNow, onRemove, onCheckout }) {
  const tabClass =
    'rounded-lg px-6 py-2.5 text-sm font-medium transition-colors'
  const cartTotal = cart.reduce((total, product) => total + product.price, 0)
  return (
    <section id="products" className="bg-white py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Premium Digital Tools
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-slate-600">
            Choose from our curated collection of premium digital products
            designed to boost your productivity and creativity.
          </p>
        </div>

        <div className="mt-8 flex justify-center gap-3">
          <button
            type="button"
            onClick={() => onTabChange('products')}
            aria-pressed={activeTab === 'products'}
            className={
              activeTab === 'products'
                ? `${tabClass} bg-violet-600 text-white`
                : `${tabClass} border border-slate-300 text-slate-500 hover:border-violet-600 hover:text-violet-600`
            }
          >
            Products
          </button>
          <button
            type="button"
            onClick={() => onTabChange('cart')}
            aria-pressed={activeTab === 'cart'}
            className={
              activeTab === 'cart'
                ? `${tabClass} bg-violet-600 text-white`
                : `${tabClass} border border-slate-300 text-slate-500 hover:border-violet-600 hover:text-violet-600`
            }
          >
            Cart ({cart.length})
          </button>
        </div>

        {activeTab === 'products' ? (
          <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} onBuyNow={onBuyNow} />
            ))}
          </div>
        ) : (
          <div className="mx-auto mt-10 max-w-2xl rounded-2xl border border-slate-200 bg-white p-8">
            <h3 className="text-xl font-semibold text-slate-900">Your Cart</h3>
            {cart.length === 0 ? (
              <div className="py-8 text-center">
                <p className="text-lg font-semibold text-slate-900">
                  Your cart is empty
                </p>
                <p className="mt-2 text-sm text-slate-600">
                  Choose a product to get started.
                </p>
              </div>
            ) : (
              <>
                <ul className="mt-6 space-y-4">
                  {cart.map((item) => (
                    <li
                      key={item.id}
                      className="flex flex-wrap items-center justify-between gap-3 rounded-lg border border-slate-200 px-4 py-3"
                    >
                      <div className="flex items-center gap-3">
                        <img
                          src={item.icon}
                          alt={item.name}
                          className="h-10 w-10 rounded-lg"
                        />
                        <span className="text-sm font-medium text-slate-900">
                          {item.name}
                        </span>
                      </div>
                      <div className="flex items-center gap-4">
                        <span className="text-sm font-semibold text-slate-900">
                          ${item.price}
                        </span>
                        <button
                          type="button"
                          onClick={() => onRemove(item.id)}
                          className="text-sm font-medium text-red-500 transition-colors hover:text-red-600"
                        >
                          Remove
                        </button>
                      </div>
                    </li>
                  ))}
                </ul>
                <div className="mt-6 flex items-center justify-between border-t border-slate-200 pt-4">
                  <span className="text-base font-semibold text-slate-900">
                    Total:
                  </span>
                  <span className="text-lg font-bold text-slate-900">
                    ${cartTotal}
                  </span>
                </div>
                <button
                  type="button"
                  onClick={onCheckout}
                  className="mt-6 w-full rounded-lg bg-violet-600 px-4 py-3 text-sm font-medium text-white transition-colors hover:bg-violet-700"
                >
                  Proceed to Checkout
                </button>
              </>
            )}
          </div>
        )}
      </div>
    </section>
  )
}

export default ProductsSection
