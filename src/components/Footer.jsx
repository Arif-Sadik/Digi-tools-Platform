const footerColumns = [
  {
    heading: 'Product',
    links: [
      { label: 'Features' },
      { label: 'Pricing', href: '#pricing' },
      { label: 'Templates' },
      { label: 'Integrations' },
    ],
  },
  {
    heading: 'Company',
    links: [
      { label: 'About' },
      { label: 'Blog' },
      { label: 'Careers' },
      { label: 'Press' },
    ],
  },
  {
    heading: 'Resources',
    links: [
      { label: 'Documentation' },
      { label: 'Help Center' },
      { label: 'Community' },
      { label: 'Contact' },
    ],
  },
  {
    heading: 'Social Links',
    links: [
      { label: 'Twitter' },
      { label: 'Facebook' },
      { label: 'Instagram' },
      { label: 'LinkedIn' },
    ],
  },
]

function FooterLink({ link }) {
  if (link.href) {
    return (
      <a
        href={link.href}
        className="text-sm text-slate-400 transition-colors hover:text-white"
      >
        {link.label}
      </a>
    )
  }
  return <span className="text-sm text-slate-400">{link.label}</span>
}

function Footer() {
  return (
    <footer className="bg-slate-900">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-5">
          <div className="md:col-span-1">
            <p className="text-2xl font-bold tracking-tight">
              <span className="text-violet-400">Digi</span>
              <span className="text-white">Tools</span>
            </p>
            <p className="mt-4 text-sm leading-relaxed text-slate-400">
              Premium digital tools for creators, professionals, and
              businesses. Work smarter with our suite of powerful tools.
            </p>
          </div>

          {footerColumns.map((column) => (
            <div key={column.heading}>
              <h4 className="text-sm font-semibold text-white">
                {column.heading}
              </h4>
              <ul className="mt-4 space-y-2">
                {column.links.map((link) => (
                  <li key={link.label}>
                    <FooterLink link={link} />
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-slate-800 pt-8 sm:flex-row">
          <p className="text-sm text-slate-400">
            © 2026 DigiTools. All rights reserved.
          </p>
          <div className="flex gap-6">
            <span className="text-sm text-slate-400">Privacy Policy</span>
            <span className="text-sm text-slate-400">Terms of Service</span>
            <span className="text-sm text-slate-400">Cookies</span>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
