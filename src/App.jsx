export default function App() {
  return (
    <div className="min-h-screen bg-stone-950 text-white font-sans">
      <section
        className="relative min-h-screen flex items-center justify-center bg-cover bg-center"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.8)), url('https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=1600&auto=format&fit=crop')",
        }}
      >
        <div className="max-w-5xl mx-auto px-6 text-center">
          <p className="uppercase tracking-[0.4em] text-stone-300 text-sm mb-6">
            A Memoir of Reinvention, Risk & Resilience
          </p>

          <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6">
            From Millbrook to Mossman
          </h1>

          <p className="text-xl md:text-2xl text-stone-200 max-w-3xl mx-auto leading-relaxed mb-10">
            From the stunning Southern Alps of Millbrook Resort, New Zealand, 
            to the tropical rainforests of Far Northern Queensland, Australia.
            Through life changing adventures in Germany, Canada, and the United States,
            including 3 marriages and a medical diagnosis he couldn't outrun.
            This is Jim Fraser's journey.
            A story of love, loss and reinvention that is raw, revealing and riveting. 
          </p>

          <a
            href="https://www.amazon.com.au/dp/B0GX356C9C"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-black px-8 py-4 rounded-2xl text-lg font-semibold"
          >
            Buy on Amazon
          </a>
        </div>
      </section>
    </div>
  )
}
