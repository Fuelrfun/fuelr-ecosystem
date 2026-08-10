export default function FeeFlow() {
  return (
    <section className="px-6 py-24">

      <div className="mx-auto max-w-5xl text-center">

        <p className="text-orange-500 uppercase tracking-widest text-sm">
          Programmable Fees
        </p>

        <h2 className="mt-4 text-4xl font-bold">
          Turn trading activity into token fuel.
        </h2>

        <div className="mt-14 grid gap-4 md:grid-cols-5 items-center">

          <Box text="Trading" />

          <Arrow />

          <Box text="Creator Fees" />

          <Arrow />

          <Box text="Fuelr Hook" />

        </div>

        <div className="mt-8 grid gap-4 md:grid-cols-4">

          <Box text="🔥 Buyback" />

          <Box text="💎 Rewards" />

          <Box text="💧 Liquidity" />

          <Box text="🏦 Treasury" />

        </div>

      </div>

    </section>
  );
}

function Box({ text }: { text: string }) {
  return (
    <div className="rounded-xl border border-white/10 bg-white/[0.03] p-5 font-bold">
      {text}
    </div>
  );
}

function Arrow() {
  return (
    <div className="hidden md:block text-2xl text-orange-500">
      →
    </div>
  );
}
