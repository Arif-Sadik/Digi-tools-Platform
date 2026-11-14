import products from '../data/products.json'
import ProductCard from './ProductCard'

function ProductsSection() {
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
            aria-pressed="true"
            className="rounded-lg bg-violet-600 px-6 py-2.5 text-sm font-medium text-white"
          >
            Products
          </button>
          <button
            type="button"
            disabled
            className="rounded-lg border border-slate-300 px-6 py-2.5 text-sm font-medium text-slate-500"
          >
            Cart (0)
          </button>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default ProductsSection
