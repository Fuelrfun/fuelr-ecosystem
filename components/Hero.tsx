import Link from "next/link";

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-6">

      <div className="max-w-5xl text-center">

        <div className="mb-6 text-sm uppercase tracking-[0.4em] text-orange-400">
          FUELR PROTOCOL
        </div>

        <h1 className="text-6xl md:text-8xl font-black tracking-tight">
          Every trade
          <br />

          <span className="text-orange-500">
            fuels your token.
          </span>
        </h1>

        <p className="mx-auto mt-8 max-w-2xl text-lg md:text-xl text-gray-400">
          Programmable creator fees for token launches.
          Route your earnings toward buybacks, rewards,
          liquidity, treasury, or custom logic.
        </p>

        <div className="mt-10 flex justify-center gap-4">

          <Link
            href="/launch"
            className="rounded-xl bg-orange-500 px-7 py-4 font-bold text-black hover:bg-orange-400"
          >
            Launch Token
          </Link>

          <Link
            href="/hooks"
            className="rounded-xl border border-gray-700 px-7 py-4 font-bold hover:bg-white/5"
          >
            Explore Hooks
          </Link>

        </div>

      </div>

    </section>
  );
}
