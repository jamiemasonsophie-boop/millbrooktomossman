```jsx
import { useState } from 'react'

export default function MillbrookToMossmanWebsite() {
  const [page, setPage] = useState('home')

  const renderPage = () => {
    switch (page) {
      case 'about':
        return <AboutPage />
      case 'book':
        return <BookPage />
      case 'gallery':
        return <GalleryPage />
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
            <button onClick={() => setPage('home')} className="hover:text-stone-300 transition-colors">Home</button>
            <button onClick={() => setPage('about')} className="hover:text-stone-300 transition-colors">About</button>
            <button onClick={() => setPage('book')} className="hover:text-stone-300 transition-colors">Book</button>
            <button onClick={() => setPage('gallery')} className="hover:text-stone-300 transition-colors">Gallery</button>
            <button onClick={() => setPage('contact')} className="hover:text-stone-300 transition-colors">Contact</button>
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
          A Raw and Revealing Memoir of Reinvention, Adventure & Resilience
        </p>

        <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6 text-stone-900">
          From Millbrook to Mossman
        </h1>

        <p className="text-xl md:text-2xl text-stone-800 max-w-3xl mx-auto leading-relaxed mb-10 font-medium">
          A cinematic memoir spanning global entrepreneurship, travel, love, loss, reinvention, and the relentless pursuit of purpose.
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
          <p className="uppercase tracking-[0.3em] text-stone-400 text-sm mb-4">
            About the Author
          </p>

          <h2 className="text-5xl font-bold mb-8">
            A Life Lived Across Continents
          </h2>

          <div className="space-y-6 text-lg text-stone-300 leading-relaxed">
            <p>
              From the alpine regions of New Zealand to international landscapes spanning Europe, Canada, Australia and beyond, this memoir chronicles a life shaped by ambition, risk, transformation and resilience.
            </p>

            <p>
              What began in the world of exclusive luxury golf resorts evolved into an extraordinary global journey through entrepreneurship, reinvention and deeply personal challenges.
            </p>

            <p>
              From Millbrook to Mossman captures both the victories and the darker moments that ultimately forged a new understanding of purpose, identity and survival.
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
              Honest, raw and revealing, From Millbrook to Mossman explores the emotional cost of ambition and the courage required to rebuild when life falls apart.
            </p>

            <p>
              Spanning elite performance, international travel, relationships, reinvention and survival, the memoir offers a deeply personal account of one man’s pursuit of meaning.
            </p>
          </div>

          <a
            href="https://www.amazon.com.au/dp/B0GX356C9C"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-white text-black px-8 py-4 rounded-2xl text-lg font-bold hover:scale-105 transition-transform"
          >
            Order the Book
          </a>
        </div>
      </div>
    </section>
  )
}

function GalleryPage() {
  const images = [
    '/gallery-image-1.webp',
    '/gallery-image-2.webp',
    '/book-cover-image.webp',
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
            A visual journey inspired by the people, landscapes, experiences and emotions behind the memoir.
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

function ContactPage() {
  return (
    <section className="min-h-screen bg-black px-6 py-24 flex items-center justify-center">
      <div className="max-w-3xl w-full bg-stone-900 border border-stone-800 rounded-3xl p-10">
        <p className="uppercase tracking-[0.3em] text-stone-500 text-sm mb-4 text-center">
          Contact
        </p>

        <h2 className="text-5xl font-bold mb-10 text-center">
          Get In Touch
        </h2>

        <p className="text-center text-stone-300 mb-10 text-lg">
          For media enquiries, reader feedback, or speaking opportunities, please get in touch.
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
```



