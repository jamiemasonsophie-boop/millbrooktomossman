import { useState } from 'react'

export default function App() {
  const [page, setPage] = useState('home')

  const renderPage = () => {
    switch (page) {
      case 'about':
        return <AboutPage />
      case 'book':
        return <BookPage />
      case 'gallery':
        return <GalleryPage />
      case 'excerpt':
        return <ExcerptPage />
      case 'contact':
        return <ContactPage />
      default:
        return <HomePage />
    }
  }

  return (
    <div className="min-h-screen bg-stone-950 text-white font-sans">
      <header className="fixed top-0 left-0 right-0 z-50 bg-black/70 backdrop-blur-md border-b border-stone-800">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <button
            onClick={() => setPage('home')}
            className="text-2xl font-bold tracking-wide"
          >
            From Millbrook to Mossman
          </button>

          <nav className="flex gap-6 text-sm uppercase tracking-wider">
            <button
              onClick={() => setPage('home')}
              className="hover:text-stone-300 transition-colors"
            >
              Home
            </button>

            <button
              onClick={() => setPage('about')}
              className="hover:text-stone-300 transition-colors"
            >
              About
            </button>

            <button
              onClick={() => setPage('book')}
              className="hover:text-stone-300 transition-colors"
            >
              Book
            </button>

            <button
              onClick={() => setPage('gallery')}
              className="hover:text-stone-300 transition-colors"
            >
              Gallery
            </button>

            <button
              onClick={() => setPage('excerpt')}
              className="hover:text-stone-300 transition-colors"
            >
              Excerpt
            </button>

            <button
              onClick={() => setPage('contact')}
              className="hover:text-stone-300 transition-colors"
            >
              Contact
            </button>
          </nav>
        </div>
      </header>

      <main className="pt-20">
        {renderPage()}
      </main>
    </div>
  )
}

function HomePage() {
  return (
    <section
      className="relative min-h-screen flex items-center justify-center bg-cover bg-center px-6"
      style={{
        backgroundImage:
          "linear-gradient(rgba(255,255,255,0.45), rgba(255,255,255,0.55)), url('/homepage-hero-background.webp')",
      }}
    >
      <div className="max-w-5xl mx-auto text-center">
        <p className="uppercase tracking-[0.4em] text-stone-700 text-sm mb-6 font-semibold">
          Utterly Riveting and Completely Raw, this is a Memoir of Revelation,
          Reinvention, Resilience and Recovery.
        </p>

        <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6 text-stone-900">
          From Millbrook to Mossman
        </h1>

        <p className="text-xl md:text-2xl text-stone-800 max-w-3xl mx-auto leading-relaxed mb-10 font-medium">
          An engrossing memoir spanning global entrepreneurship, travel, love,
          loss, reinvention, and the relentless pursuit of purpose.
        </p>

        <a
          href="https://www.amazon.com.au/dp/B0GX356C9C"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-black text-white px-8 py-4 rounded-2xl text-lg font-semibold hover:scale-105 transition-transform"
        >
          Buy on Amazon
        </a>
      </div>
    </section>
  )
}

function AboutPage() {
  return (
    <section className="min-h-screen bg-stone-900 px-6 py-24">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-14 items-center">
        <img
          src="/about-page-portrait.webp"
          alt="Author"
          className="rounded-3xl shadow-2xl w-full h-[600px] object-cover"
        />

        <div>
          <h2 className="text-5xl font-bold mb-8">
            About the Author
          </h2>

          <div className="space-y-6 text-lg text-stone-300 leading-relaxed">
            <p>
              From the alpine regions of New Zealand to international landscapes
              spanning Europe, The United States, Canada, and Australia, this
              memoir chronicles a life shaped by ambition, risk,
              transformation and resilience.
            </p>

            <p>
              What started at a luxury golf resort back in 1993, evolved into
              an extraordinary global journey through love, loss, reinvention
              and deeply personal challenges.
            </p>

            <p>
              From Millbrook to Mossman captures both the victories and the
              failures, including the darker moments that ultimately forged a
              new understanding of purpose, identity and survival.
            </p>

            <p>
              Jim Fraser is a New Zealand–born writer whose life journey has
              taken him from Auckland to Queenstown, Sydney and ultimately the
              tropical frontier of Far North Queensland.
            </p>

            <p>
              From Millbrook to Mossman is Jim’s first book.
            </p>

            <p>
              Jim now divides his time between writing, creative projects and
              producing online content supporting those living with Multiple
              Sclerosis.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

function BookPage() {
  return (
    <section className="min-h-screen bg-black px-6 py-24">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        <div className="bg-stone-900 rounded-3xl p-10 border border-stone-800">
          <img
            src="/book-cover-image.webp"
            alt="From Millbrook to Mossman Book Cover"
            className="rounded-2xl shadow-2xl w-full"
          />
        </div>

        <div>
          <p className="uppercase tracking-[0.3em] text-stone-500 text-sm mb-4">
            The Memoir
          </p>

          <h2 className="text-5xl font-bold mb-8">
            An Unforgettable Journey
          </h2>

          <div className="space-y-6 text-lg text-stone-300 leading-relaxed mb-10">
            <p>
              Honest, raw and revealing, From Millbrook to Mossman explores the
              emotional cost of ambition and the courage required to rebuild
              when life falls apart.
            </p>

            <p>
              A truly international tale covering entrepreneurship,
              relationships, reinvention and survival, this memoir offers a
              deeply personal account of one man’s pursuit of meaning.
            </p>
          </div>

          <a
            href="https://www.amazon.com.au/dp/B0GX356C9C"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-white text-black px-8 py-4 rounded-2xl text-lg font-bold hover:scale-105 transition-transform"
          >
            Order Your Copy Today!
          </a>
        </div>
      </div>
    </section>
  )
}

function GalleryPage() {
  const images = [
    '/gallery-image-1.webp',
    '/Gallery1b.webp',
  ]

  return (
    <section className="min-h-screen bg-stone-950 px-6 py-24">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="uppercase tracking-[0.3em] text-stone-500 text-sm mb-4">
            Gallery
          </p>

          <h2 className="text-5xl font-bold mb-6">
            Places & Moments
          </h2>

          <p className="text-xl text-stone-400 max-w-3xl mx-auto">
            A totally engrossing journey inspired by the people, landscapes,
            experiences and emotions behind the memoir.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {images.map((image, idx) => (
            <img
              key={idx}
              src={image}
              alt="Gallery"
              className="rounded-3xl shadow-2xl h-[400px] w-full object-cover hover:scale-[1.02] transition-transform"
            />
          ))}
        </div>
      </div>
    </section>
  )
}

function ExcerptPage() {
  return (
    <section className="min-h-screen bg-black px-6 py-24">
      <div className="max-w-4xl mx-auto">

        <div className="text-center mb-16">
          <p className="uppercase tracking-[0.3em] text-stone-500 text-sm mb-4">
            Memoir Excerpt
          </p>

          <h2 className="text-5xl font-bold mb-6 text-white">
            Read a Sample
          </h2>

          <p className="text-xl text-stone-400 max-w-2xl mx-auto">
            A glimpse into the deeply personal journey behind
            From Millbrook to Mossman.
          </p>
        </div>

        <div className="bg-stone-900 border border-stone-800 rounded-3xl p-10 md:p-14 shadow-2xl">

          <h3 className="text-3xl font-semibold mb-10 text-white">
            Chapter One
          </h3>

          <div className="space-y-8 text-lg leading-9 text-stone-300">

            <p>
              Years earlier, during a stopover in Maui, I’d met a woman named Noelle.
              She was crewing aboard an ocean-going yacht, a Swan 54’ owned by an L.A. television producer named Chuck. 
              She was California distilled - sun-bronzed skin, white teeth, an ease that felt far more inherited than learned.
              Exactly the way The Beach Boys wished all girls could be back on their 1965 hit record.
              We met beneath the Banyan tree outside the Pioneer Hotel in Lahaina.
              “Hang loose,” she said, flashing me a shaka, smiling like it was more than a greeting.
            </p>

            <p>
              We fell into rhythm quickly.
              Time loosened as days together stretched. 
              She introduced me to blazing on Maui Wowie, to tripping on Magic ‘shrooms, and to a slower, more fluid way of moving through the world. 
              We drove the sinuous coast road out to Hana in a cheap convertible - music loud, jungle pressing in, Noelle standing on her seat as I drove, dancing to Bon Jovi, waving at the passing schoolkids like the whole island belonged to her.
              She had a way of looking at me that made everything feel heightened. Immediate.
              I didn’t have language for it then, but something was shifting - subtly, but permanently.
              Leaving her was far harder than I expected.
              She was sailing back to San Fran. 
              I was heading to London.
              “You should come to Santa Cruz on your way back,” she said on our last night together, sitting barefoot at the marina. 
              “Let me show you the real California.”
              So, I did.
            </p>

            <p>
              Three months later, after Europe, I changed my flight home and flew straight into San Francisco with little money and no real plan beyond seeing her again.
              She picked me up from the airport and we drove down to her small beachside apartment in Santa Cruz.
              What followed felt less like a trip, and more like slipping into an alternate version of life - beach volleyball, lazy days hanging out on the pier, driving up and down the P.C.H. exploring, nights at the surf-bar where she worked.
              The place ran on rhythm - laughter, clinking glasses, half-finished pitchers of chilled margaritas sweating in low light. 
              I’d sit at the bar while she worked, watching the room move around me.
              People took an interest.
              “Hey - come meet Noelle’s friend from NooZeeland!”
              It wasn’t anything I’d done. It was how I sounded.
              My accent - unremarkable at home - became a curiosity. A small performance.
              “Go on,” they’d say. “Say something.”
              So, I would.
              They’d laugh, repeat words back to me, try them on like they were testing a new accent of their own.
              I played along. 
              It was easier than resisting it. 
              But there was something quietly disorienting about being reduced, even harmlessly, to the way you sounded.
              Still, those nights had a pull. 
              A looseness. 
              A sense that identity wasn’t fixed - that it could shift depending on where you stood, and who you stood among.
            </p>

            <p>
              We spent the next few weeks together.
              Drove south to Carmel, then on to Monterey, finishing at Pebble Beach.
              I remember standing there, cliffs falling into the Pacific, the golf course carved into the coastline with absolute confidence.
              “This is obscene,” I said.
              “In a good way?” she asked.
              “In the best way.”
              It wasn’t just the setting.
              It was the intention behind it.
              These places weren’t accidental. 
              They were constructed - carefully designed environments that allowed people to step, briefly, into a different version of themselves – just as I was doing.
              There was something strangely familiar about Pebble Beach.
              Not in its architecture or geography, but in the feeling it created — the quiet understanding that this was a place designed for people who had already conquered the practical concerns of ordinary life and now sought only beauty, exclusivity, and experience.
              In many ways, it reminded me of the ancient city of Petra in Southern Jordan.
              Separated by two thousand years, perhaps, and built in utterly different landscapes, undeniably, but both existed as meeting places and playgrounds for the wealthy and influential of their eras. 
              Petra rose from the desert as a hidden kingdom of astonishing grandeur, its rose-red facades carved directly into sheer canyon walls to impress traders, nobles, and dignitaries arriving from distant civilizations. 
              Pebble Beach achieved the same effect through different means — dramatic coastline, immaculate fairways, cypress trees bent by Pacific winds, and an atmosphere so carefully curated it felt almost theatrical.
              Neither place was built merely for function. 
              They were built to evoke emotion.
            </p>

            <p>
              Petra understood the power of anticipation. 
              Travelers would move through the narrow darkness of the Siq before suddenly emerging into sunlight and confronting the Treasury — a moment engineered to overwhelm the senses. 
              Pebble Beach offered its own modern version of arrival. 
              Guests wound their way along 17-Mile Drive, ocean appearing and disappearing between cliffs and trees, before finally arriving at manicured greens perched above crashing surf. 
              Different centuries, different materials, but the same mastery of spectacle.
              Both places also thrived because of wealth in motion. 
              Petra prospered from caravans carrying incense, silk, spices, and precious goods across ancient trade routes. 
              Pebble Beach flourished through modern migrations of money and status — executives, celebrities, athletes, and financiers gathering along one of the most desirable stretches of coastline in North America. 
              In each case, exclusivity itself became part of the attraction.
              And perhaps that is the timeless truth connecting them.
              Human beings have always created sanctuaries for the privileged — places removed from ordinary existence where beauty is elevated, discomfort minimized, and life made to feel slightly more extraordinary than reality elsewhere. 
              Petra carved that dream into desert stone. 
              Pebble Beach sculpted it into coastline and fairways. 
              But beneath the centuries separating them, the impulse remained exactly the same.
              And standing at Millbrook years later, I recognised that same feeling again.
              It was a feeling I’d missed - a feeling I now yearned to immerse myself in.
            </p>

          </div>

          <div className="mt-14 text-center">
            <a
              href="https://www.amazon.com.au/dp/B0GX356C9C"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-white text-black px-8 py-4 rounded-2xl text-lg font-bold hover:scale-105 transition-transform"
            >
              Continue Reading on Amazon
            </a>
          </div>

        </div>
      </div>
    </section>
  )
}

function ContactPage() {
  return (
    <section
      className="min-h-screen bg-cover bg-center px-6 py-24 flex items-center justify-center"
      style={{
        backgroundImage:
          "linear-gradient(rgba(0,0,0,0.65), rgba(0,0,0,0.75)), url('/gallery-image-2.webp')",
      }}
    >
      <div className="max-w-3xl w-full bg-stone-900/80 backdrop-blur-sm border border-stone-700 rounded-3xl p-10">
        <p className="uppercase tracking-[0.3em] text-stone-300 text-sm mb-4 text-center">
          Contact
        </p>

        <h2 className="text-5xl font-bold mb-10 text-center text-white">
          Get In Touch
        </h2>

        <p className="text-center text-stone-200 mb-10 text-lg">
          For media enquiries, reader feedback, or speaking opportunities,
          please get in touch.
        </p>

        <div className="text-center">
          <a
            href="mailto:jamiemasonsophie@gmail.com"
            className="inline-block bg-white text-black px-8 py-4 rounded-2xl font-bold text-lg hover:scale-[1.02] transition-transform"
          >
            Send Message
          </a>
        </div>
      </div>
    </section>
  )
}





