const stats = [
  { value: '50K+', label: 'Active Users' },
  { value: '200+', label: 'Premium Tools' },
  { value: '4.9', label: 'Rating' },
]

function Stats() {
  return (
    <section className="bg-violet-600 py-12">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-4 sm:grid-cols-3 sm:gap-0 sm:divide-x sm:divide-white/20 sm:px-6 lg:px-8">
        {stats.map((stat) => (
          <div key={stat.label} className="text-center sm:px-8">
            <p className="text-4xl font-bold text-white sm:text-5xl">{stat.value}</p>
            <p className="mt-2 text-sm font-medium text-violet-100">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Stats
