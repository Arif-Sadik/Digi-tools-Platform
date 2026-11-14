const steps = [
  {
    number: '01',
    title: 'Create Account',
    description:
      'Sign up for free in seconds. No credit card required to get started.',
  },
  {
    number: '02',
    title: 'Choose Products',
    description:
      'Browse our catalog and select the tools that fit your needs.',
  },
  {
    number: '03',
    title: 'Start Creating',
    description:
      'Download and start using your premium tools immediately.',
  },
]

function Steps() {
  return (
    <section className="bg-slate-50 py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Get Started in 3 Steps
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-slate-600">
            Start using premium digital tools in minutes, not hours.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-3">
          {steps.map((step) => (
            <div key={step.number} className="text-center">
              <p className="text-5xl font-bold text-violet-600">
                {step.number}
              </p>
              <h3 className="mt-4 text-lg font-semibold text-slate-900">
                {step.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Steps
