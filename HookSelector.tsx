"use client";

import hooks from "@/data/hooks.json";

export default function HookSelector() {

  return (
    <div className="grid gap-4 md:grid-cols-2">

      {hooks.map((hook) => (

        <button
          key={hook.id}
          className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 text-left transition hover:border-orange-500"
        >

          <div className="text-3xl">
            {hook.icon}
          </div>

          <h3 className="mt-4 text-xl font-bold">
            {hook.name}
          </h3>

          <p className="mt-2 text-sm text-gray-400">
            {hook.description}
          </p>

        </button>

      ))}

    </div>
  );
}
