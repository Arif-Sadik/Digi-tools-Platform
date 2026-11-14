const plans = [
  {
    name: 'Starter',
    subtitle: 'Perfect for getting started',
    price: '$0',
    period: '/month',
    features: [
      'Access to 10 free tools',
      'Basic templates',
      'Community support',
      '1 project per month',
    ],
    buttonLabel: 'Get Started Free',
    highlighted: false,
  },
  {
    name: 'Pro',
    subtitle: 'Best for professionals',
    price: '$29',
    period: '/month',
    features: [
      'Access to all premium tools',
      'Unlimited templates',
      'Priority support',
      'Unlimited projects',
      'Cloud sync',
      'Advanced analytics',
    ],
    buttonLabel: 'Start Pro Trial',
    highlighted: true,
  },
  {
    name: 'Enterprise',
    subtitle: 'For teams and businesses',
    price: '$99',
    period: '/month',
    features: [
      'Everything in Pro',
      'Team collaboration',
      'Custom integrations',
      'Dedicated support',
      'SLA guarantee',
      'Custom branding',
    ],
    buttonLabel: 'Contact Sales',
    highlighted: false,
  },
]

function Pricing() {
  return (
    <section id="pricing" className="bg-white py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Simple, Transparent Pricing
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-slate-600">
            Choose the plan that fits your needs. Upgrade or downgrade
            anytime.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 items-stretch gap-6 lg:grid-cols-3">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`flex flex-col rounded-2xl border p-8 ${
                plan.highlighted
                  ? 'border-violet-600 bg-violet-50 shadow-sm'
                  : 'border-slate-200 bg-white'
              }`}
            >
              {plan.highlighted && (
                <span className="mx-auto -mt-14 rounded-full bg-violet-600 px-4 py-1 text-xs font-semibold text-white">
                  Most Popular
                </span>
              )}
              <h3
                className={`text-lg font-semibold ${
                  plan.highlighted ? 'text-violet-700' : 'text-slate-900'
                }`}
              >
                {plan.name}
              </h3>
              <p className="mt-1 text-sm text-slate-600">{plan.subtitle}</p>
              <p className="mt-6">
                <span className="text-4xl font-bold text-slate-900">
                  {plan.price}
                </span>
                <span className="text-sm text-slate-500">{plan.period}</span>
              </p>
              <ul className="mt-6 flex-1 space-y-3">
                {plan.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-center gap-2 text-sm text-slate-600"
                  >
                    <svg
                      className="h-4 w-4 flex-shrink-0 text-emerald-500"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
              <button
                type="button"
                disabled
                className={`mt-8 w-full rounded-lg px-4 py-3 text-sm font-medium disabled:cursor-not-allowed ${
                  plan.highlighted
                    ? 'bg-violet-600 text-white'
                    : 'border border-violet-600 text-violet-600'
                }`}
              >
                {plan.buttonLabel}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Pricing
