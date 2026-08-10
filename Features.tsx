const features = [
  {
    icon: "🔥",
    title: "Buybacks",
    description:
      "Route creator earnings toward token buybacks."
  },
  {
    icon: "💎",
    title: "Holder Rewards",
    description:
      "Reward your community with programmable distributions."
  },
  {
    icon: "💧",
    title: "Liquidity",
    description:
      "Use creator fees to strengthen token liquidity."
  },
  {
    icon: "🏦",
    title: "Treasury",
    description:
      "Build a treasury from ongoing trading activity."
  }
];

export default function Features() {
  return (
    <section className="px-6 py-24">

      <div className="mx-auto max-w-6xl">

        <div className="mb-14">

          <p className="text-sm uppercase tracking-widest text-orange-500">
            Creator Infrastructure
          </p>

          <h2 className="mt-3 text-4xl md:text-5xl font-bold">
            Make every fee count.
          </h2>

        </div>

        <div className="grid gap-5 md:grid-cols-4">

          {features.map((feature) => (

            <div
              key={feature.title}
              className="rounded-2xl border border-white/10 bg-white/[0.03] p-7"
            >

              <div className="text-4xl">
                {feature.icon}
              </div>

              <h3 className="mt-6 text-xl font-bold">
                {feature.title}
              </h3>

              <p className="mt-3 text-sm leading-6 text-gray-400">
                {feature.description}
              </p>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}
