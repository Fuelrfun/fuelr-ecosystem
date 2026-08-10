"use client";

import { useState } from "react";

export default function LaunchPage() {

  const [name, setName] = useState("");
  const [symbol, setSymbol] = useState("");

  return (
    <main className="min-h-screen px-6 py-20">

      <div className="mx-auto max-w-xl">

        <p className="text-orange-500 text-sm uppercase tracking-widest">
          TOKEN LAUNCH
        </p>

        <h1 className="mt-4 text-5xl font-black">
          Launch your token.
        </h1>

        <div className="mt-10 space-y-5">

          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Token name"
            className="w-full rounded-xl border border-white/10 bg-white/5 p-4 outline-none focus:border-orange-500"
          />

          <input
            value={symbol}
            onChange={(e) => setSymbol(e.target.value)}
            placeholder="Token symbol"
            className="w-full rounded-xl border border-white/10 bg-white/5 p-4 outline-none focus:border-orange-500"
          />

          <button
            className="w-full rounded-xl bg-orange-500 p-4 font-bold text-black hover:bg-orange-400"
          >
            Create Token
          </button>

        </div>

      </div>

    </main>
  );
}
