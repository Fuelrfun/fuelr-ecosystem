import HookSelector from "@/components/HookSelector";

export default function HooksPage() {
  return (
    <main className="min-h-screen px-6 py-20">

      <div className="mx-auto max-w-5xl">

        <p className="text-sm uppercase tracking-widest text-orange-500">
          FUELR
        </p>

        <h1 className="mt-4 text-5xl font-black">
          Choose your hook.
        </h1>

        <p className="mt-5 max-w-2xl text-gray-400">
          Decide what happens to your creator fees after
          your token starts trading.
        </p>

        <div className="mt-12">
          <HookSelector />
        </div>

      </div>

    </main>
  );
}
