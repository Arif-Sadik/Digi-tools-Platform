const tagStyles = {
  'best-seller': 'bg-amber-100 text-amber-600',
  popular: 'bg-violet-100 text-violet-600',
  new: 'bg-emerald-100 text-emerald-600',
}

function ProductCard({ product, onBuyNow }) {
  return (
    <article className="flex flex-col rounded-2xl border border-slate-200 bg-white p-6">
      <div className="flex items-start justify-between">
        <img
          src={product.icon}
          alt={product.name}
          className="h-12 w-12 rounded-lg"
        />
        <span
          className={`rounded-full px-3 py-1 text-xs font-medium ${tagStyles[product.tagType]}`}
        >
          {product.tag}
        </span>
      </div>

      <h3 className="mt-4 text-lg font-semibold text-slate-900">
        {product.name}
      </h3>
      <p className="mt-2 text-sm leading-relaxed text-slate-600">
        {product.description}
      </p>

      <p className="mt-4">
        <span className="text-2xl font-bold text-slate-900">
          ${product.price}
        </span>
        <span className="text-sm text-slate-500">
          {product.period === 'monthly' ? '/mo' : '/one-time'}
        </span>
      </p>

      <ul className="mt-4 flex-1 space-y-2">
        {product.features.map((feature) => (
          <li key={feature} className="flex items-center gap-2 text-sm text-slate-600">
            <svg
              className="h-4 w-4 flex-shrink-0 text-emerald-500"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
            {feature}
          </li>
        ))}
      </ul>

      <button
        type="button"
        onClick={() => onBuyNow(product)}
        className="mt-6 w-full rounded-lg bg-violet-600 px-4 py-3 text-sm font-medium text-white transition-colors hover:bg-violet-700"
      >
        Buy Now
      </button>
    </article>
  )
}

export default ProductCard
