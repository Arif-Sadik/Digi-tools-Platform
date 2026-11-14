const navLinks = [
  { label: 'Products', href: '#products' },
  { label: 'Features', href: '#features' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'Testimonials', href: '#testimonials' },
]

function Navbar() {
  return (
    <header className="bg-white">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <a href="#" className="text-2xl font-bold tracking-tight">
          <span className="text-violet-600">Digi</span>
          <span className="text-slate-900">Tools</span>
        </a>

        <ul className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                className="text-sm font-medium text-slate-600 transition-colors hover:text-violet-600"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3 sm:gap-4">
          <a
            href="#login"
            className="hidden text-sm font-medium text-slate-600 transition-colors hover:text-violet-600 sm:block"
          >
            Login
          </a>
          <a
            href="#pricing"
            className="hidden rounded-lg bg-violet-600 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-violet-700 sm:block"
          >
            Get Started
          </a>
          <div
            aria-label="Cart with 0 items"
            className="relative flex items-center justify-center rounded-lg p-2 text-slate-700"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.3 5.7a1 1 0 0 0 1 1.3h9.6M7 13h10m-8 7a1 1 0 1 1-2 0 1 1 0 0 1 2 0Zm8 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z"
              />
            </svg>
            <span className="absolute -top-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-violet-600 text-xs font-semibold text-white">
              0
            </span>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Navbar
