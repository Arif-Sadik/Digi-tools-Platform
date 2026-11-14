function CallToAction() {
  return (
    <section className="bg-violet-600 py-16">
      <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
          Ready to Transform Your Workflow?
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-violet-100">
          Join thousands of professionals who are already using Digitools to
          work smarter. Start your free trial today.
        </p>

        <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href="#products"
            className="w-full rounded-lg bg-white px-6 py-3 text-sm font-medium text-violet-700 transition-colors hover:bg-violet-50 sm:w-auto"
          >
            Explore Products
          </a>
          <a
            href="#pricing"
            className="w-full rounded-lg border border-white px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-violet-700 sm:w-auto"
          >
            View Pricing
          </a>
        </div>

        <p className="mt-6 text-sm text-violet-200">
          7-day free trial · No credit card required · Cancel anytime
        </p>
      </div>
    </section>
  )
}

export default CallToAction
