export default function Footer() {
  return (
    <footer className="border-t border-white/10 px-6 py-12">

      <div className="mx-auto flex max-w-6xl flex-col justify-between gap-6 md:flex-row">

        <div>

          <div className="text-xl font-black">
            ⛽ FUELR
          </div>

          <p className="mt-2 text-sm text-gray-500">
            Every trade fuels your token.
          </p>

        </div>

        <div className="flex gap-6 text-sm text-gray-400">

          <a
            href="https://fuelr.fun/"
            target="_blank"
          >
            Website
          </a>

          <a
            href="https://x.com/Fuelrfun"
            target="_blank"
          >
            X
          </a>

        </div>

      </div>

    </footer>
  );
}
