const steps = [
  {
    number: "01",
    title: "Choose a Hook",
    text: "Select how your creator fees should be used."
  },
  {
    number: "02",
    title: "Launch",
    text: "Configure and launch your token."
  },
  {
    number: "03",
    title: "Trade",
    text: "Trading activity generates creator fees."
  },
  {
    number: "04",
    title: "Fuel",
    text: "Your selected hook routes the earnings."
  }
];

export default function HowItWorks() {
  return (
    <section className="border-y border-white/10 px-6 py-24">

      <div className="mx-auto max-w-6xl">

        <h2 className="text-4xl font-bold">
          How Fuelr works
        </h2>

        <div className="mt-12 grid gap-5 md:grid-cols-4">

          {steps.map((step) => (

            <div key={step.number}>

              <div className="text-sm font-bold text-orange-500">
                {step.number}
              </div>

              <h3 className="mt-4 text-xl font-bold">
                {step.title}
              </h3>

              <p className="mt-3 text-gray-400">
                {step.text}
              </p>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}
