function Hero() {
  return (
    <section className="bg-white">
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 py-12 sm:px-6 md:grid-cols-2 md:gap-8 md:py-20 lg:px-8">
        <div className="text-center md:text-left">
          <span className="inline-block rounded-full bg-violet-100 px-4 py-1.5 text-sm font-medium text-violet-600">
            New: AI-Powered Tools Available
          </span>

          <h1 className="mt-6 text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">Supercharge Your <span className="text-violet-600">Digital Workflow</span></h1>

          <p className="mt-6 text-lg leading-relaxed text-slate-600">
            Access premium AI tools, design assets, templates, and
            productivity software—all in one place. Start creating faster
            today.
          </p>

          <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row md:justify-start sm:justify-center">
            <a
              href="#products"
              className="w-full rounded-lg bg-violet-600 px-6 py-3 text-center text-base font-medium text-white transition-colors hover:bg-violet-700 sm:w-auto"
            >
              Explore Products
            </a>
            <button
              type="button"
              className="flex w-full items-center justify-center gap-2 rounded-lg border border-slate-300 px-6 py-3 text-base font-medium text-slate-700 transition-colors hover:border-violet-600 hover:text-violet-600 sm:w-auto"
            >
              <img
                src="/assets/Play.png"
                alt=""
                aria-hidden="true"
                className="h-5 w-5"
              />
              Watch Demo
            </button>
          </div>
        </div>

        <div className="flex justify-center md:justify-end">
          <img
            src="/assets/banner.png"
            alt="Person interacting with a digital interface of connected tool icons"
            className="w-full max-w-md rounded-2xl object-cover"
          />
        </div>
      </div>
    </section>
  )
}

export default Hero
