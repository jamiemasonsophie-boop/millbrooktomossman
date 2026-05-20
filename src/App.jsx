import { useState } from 'react'

export default function App() {
  const [page, setPage] = useState('home')
  const [selectedArticle, setSelectedArticle] = useState(null)

  const journalArticles = [
    {
      title: 'Life at Millbrook Resort',
      category: 'Luxury & Opportunity',
      image:
        'https://images.ctfassets.net/0nz43hve27oh/1M8m8Gq0fD3Jg7hM9M3g0B/f1f6dfaf3cb0b3b4f7b69bb95e4c70a0/Millbrook-Resort-Overview.jpg',
      excerpt:
        'Luxury resorts are carefully designed emotional experiences — places where ambition, beauty and reinvention intersect.',
      content: `
Millbrook was never simply a golf resort.

It was an atmosphere.

An emotional architecture designed to momentarily suspend ordinary life.

People arrived carrying invisible burdens — marriages under strain, careers built on relentless pressure, identities quietly unraveling beneath outward success.

But once inside the gates, something shifted.

The mountains softened people.

The beauty altered them.

And for brief moments, they became slightly different versions of themselves.

Luxury resorts are not really about luxury.

They are about transformation.
      `,
    },
    {
      title: 'Pebble Beach and Petra',
      category: 'Luxury Travel',
      image:
        'https://www.visitcalifornia.com/sites/visitcalifornia.com/files/styles/welcome_image/public/vc_spotlight_pebble-beach-golf-course_st_rf_1280x640.jpg',
      excerpt:
        'Separated by centuries, Petra and Pebble Beach were both playgrounds for elites seeking spectacle and beauty.',
      content: `
There was something strangely familiar about Pebble Beach.

Not in its architecture or geography, but in the feeling it created.

The understanding that this was a place designed for people who had already conquered the practical concerns of ordinary life.

Places like Petra and Pebble Beach become emotional theatres.

Curated environments where beauty itself becomes a form of status.
      `,
    },
    {
      title: 'Mossman and the Daintree',
      category: 'Rainforest & Reinvention',
      image:
        'https://media.australian.museum/media/dd/images/Daintree_Rainforest.width-1200.6c9f1e1.jpg',
      excerpt:
        'The Daintree rainforest attracts escape artists, wanderers and people rebuilding themselves.',
      content: `
The Daintree attracts dreamers from all corners.

Off-grid communities.

Artists.

Wanderers.

Environmentalists.

People attempting to outrun old lives and construct new identities.

Rainforest settlements become emotional frontiers.

Places where reinvention feels possible.
      `,
    },
  ]

  const openArticle = (article) => {
    setSelectedArticle(article)
    setPage('article')
    window.scrollTo(0, 0)
  }

  const pages = {
    home: <HomePage setPage={setPage} />,
    about: <AboutPage />,
    memoir: <MemoirPage />,
    journal: (
      <JournalPage articles={journalArticles} openArticle={openArticle} />
    ),
    article: (
      <ArticlePage article={selectedArticle} setPage={setPage} />
    ),
    gallery: <GalleryPage />,
    excerpt: <ExcerptPage />,
    contact: <ContactPage />,
  }

  return (
    <div className="bg-black text-white min-h-screen font-sans">
      <header className="fixed top-0 left-0 right-0 z-50 bg-black/70 backdrop-blur-md border-b border-stone-800">
        <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
          <button
            onClick={() => setPage('home')}
            className="text-2xl tracking-wide font-light"
          >
            From Millbrook to Mossman
          </button>

          <nav className="hidden md:flex gap-6 uppercase text-sm tracking-[0.2em]">
            {[
              ['Home', 'home'],
              ['About', 'about'],
              ['Memoir', 'memoir'],
              ['Journal', 'journal'],
              ['Gallery', 'gallery'],
              ['Excerpt', 'excerpt'],
              ['Contact', 'contact'],
            ].map(([label, value]) => (
              <button
                key={value}
                onClick={() => {
                  setPage(value)
                  window.scrollTo(0, 0)
                }}
                className="hover:text-stone-400 transition-colors"
              >
                {label}
              </button>
            ))}
          </nav>
        </div>
      </header>

      <main className="pt-20">{pages[page]}</main>
    </div>
  )
}

function HomePage({ setPage }) {
  return (
    <>
      <section className="relative h-screen overflow-hidden flex items-center justify-center">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/videos/WebsiteVideo1.mp4" type="video/mp4" />
        </video>

        <div className="absolute inset-0 bg-black/60" />

        <div className="relative z-10 text-center px-6 max-w-5xl">
          <p className="uppercase tracking-[0.4em] text-sm text-stone-300 mb-6">
            A Memoir of Reinvention, Collapse & Survival
          </p>

          <h1 className="text-5xl md:text-8xl font-light mb-8 leading-tight">
            From Millbrook
            <br />
            to Mossman
          </h1>

          <p className="text-xl md:text-2xl text-stone-300 leading-relaxed max-w-3xl mx-auto mb-12">
            A cinematic memoir spanning luxury resorts, international travel,
            emotional collapse, reinvention and survival.
          </p>

          <div className="flex flex-col md:flex-row gap-6 justify-center">
            <a
              href="https://www.amazon.com.au/dp/B0GX356C9C"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-black px-8 py-4 rounded-2xl text-lg font-semibold hover:scale-105 transition-transform"
            >
              Buy the Memoir
            </a>

            <button
              onClick={() => setPage('journal')}
              className="border border-white px-8 py-4 rounded-2xl text-lg hover:bg-white hover:text-black transition-all"
            >
              Explore Journal
            </button>
          </div>
        </div>
      </section>

      <section className="bg-stone-950 py-28 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10">
          {[
            {
              title: 'Luxury Culture',
              text: 'An inside look at elite resort culture and emotional reinvention.',
            },
            {
              title: 'Global Journeys',
              text: 'Stories spanning New Zealand, Australia, Hawaii, California and beyond.',
            },
            {
              title: 'Collapse & Survival',
              text: 'An emotionally raw memoir of rebuilding identity after trauma.',
            },
          ].map((item) => (
            <div
              key={item.title}
              className="bg-black border border-stone-800 rounded-3xl p-10"
            >
              <h3 className="text-3xl font-light mb-6">{item.title}</h3>
              <p className="text-stone-400 leading-relaxed text-lg">
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </section>
    </>
  )
}

function AboutPage() {
  return (
    <section className="min-h-screen bg-stone-900 px-6 py-24">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        <img
          src="/about-page-portrait.webp"
          alt="Author"
          className="rounded-3xl h-[700px] w-full object-cover shadow-2xl"
        />

        <div>
          <p className="uppercase tracking-[0.3em] text-stone-500 text-sm mb-4">
            About the Author
          </p>

          <h1 className="text-6xl font-light mb-10">Jim Fraser</h1>

          <div className="space-y-8 text-lg text-stone-300 leading-relaxed">
            <p>
              From alpine New Zealand to tropical Australia, this memoir traces
              a life shaped by ambition, travel, collapse and reinvention.
            </p>

            <p>
              What began at a luxury golf resort evolved into a deeply personal
              journey through entrepreneurship, love, emotional collapse and
              survival.
            </p>

            <p>
              From Millbrook to Mossman explores the emotional cost of ambition
              and the courage required to rebuild identity from the ground up.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

function MemoirPage() {
  return (
    <section className="min-h-screen bg-black px-6 py-24">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        <div className="bg-stone-900 rounded-3xl p-10 border border-stone-800">
          <img
            src="/book-cover-image.webp"
            alt="Book Cover"
            className="rounded-2xl w-full shadow-2xl"
          />
        </div>

        <div>
          <p className="uppercase tracking-[0.3em] text-stone-500 text-sm mb-4">
            The Memoir
          </p>

          <h1 className="text-6xl font-light mb-10">
            An Extraordinary Journey
          </h1>

          <div className="space-y-8 text-lg text-stone-300 leading-relaxed mb-12">
            <p>
              Honest, cinematic and emotionally raw, From Millbrook to Mossman
              explores the emotional realities hidden beneath ambition and success.
            </p>

            <p>
              A memoir spanning luxury resort culture, international travel,
              collapse, recovery and reinvention.
            </p>
          </div>

          <a
            href="https://www.amazon.com.au/dp/B0GX356C9C"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-black px-8 py-4 rounded-2xl text-lg font-semibold hover:scale-105 transition-transform inline-block"
          >
            Order Your Copy
          </a>
        </div>
      </div>
    </section>
  )
}

function JournalPage({ articles, openArticle }) {
  return (
    <section className="min-h-screen bg-black px-6 py-24">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <p className="uppercase tracking-[0.3em] text-stone-500 text-sm mb-4">
            Journal
          </p>

          <h1 className="text-6xl font-light mb-6">
            Stories, Reflections & Essays
          </h1>
        </div>

        <div className="grid md:grid-cols-2 gap-10">
          {articles.map((article) => (
            <button
              key={article.title}
              onClick={() => openArticle(article)}
              className="group text-left bg-stone-950 border border-stone-800 rounded-3xl overflow-hidden hover:border-stone-600 transition-all"
            >
              <div className="overflow-hidden h-[420px]">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>

              <div className="p-10">
                <p className="uppercase tracking-[0.25em] text-xs text-stone-500 mb-4">
                  {article.category}
                </p>

                <h2 className="text-4xl font-light mb-6">
                  {article.title}
                </h2>

                <p className="text-stone-400 text-lg leading-relaxed">
                  {article.excerpt}
                </p>
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  )
}

function ArticlePage({ article, setPage }) {
  if (!article) return null

  return (
    <section className="min-h-screen bg-black text-white">
      <div className="relative h-[60vh] overflow-hidden">
        <img
          src={article.image}
          alt={article.title}
          className="absolute inset-0 w-full h-full object-cover opacity-40"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-black/20" />

        <div className="relative z-10 max-w-5xl mx-auto px-6 h-full flex flex-col justify-end pb-20">
          <p className="uppercase tracking-[0.3em] text-stone-400 text-sm mb-4">
            {article.category}
          </p>

          <h1 className="text-5xl md:text-7xl font-light leading-tight max-w-4xl">
            {article.title}
          </h1>
        </div>
      </div>

      <article className="max-w-3xl mx-auto px-6 py-24">
        <div className="whitespace-pre-line text-stone-300 text-xl leading-[2.1] font-light">
          {article.content}
        </div>

        <div className="mt-20 border-t border-stone-800 pt-10">
          <button
            onClick={() => setPage('journal')}
            className="text-stone-400 hover:text-white transition-colors"
          >
            ← Back to Journal
          </button>
        </div>
      </article>
    </section>
  )
}

function GalleryPage() {
  const images = [
    '/PaperbackBookWEBP.webp',
    '/OpenBook.jpg',
    '/Gallery1b.webp',
    '/gallery-image-2.webp',
  ]

  return (
    <section className="min-h-screen bg-stone-950 px-6 py-24">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <p className="uppercase tracking-[0.3em] text-stone-500 text-sm mb-4">
            Gallery
          </p>

          <h1 className="text-6xl font-light">Places & Moments</h1>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {images.map((image) => (
            <img
              key={image}
              src={image}
              alt="Gallery"
              className="rounded-3xl h-[450px] w-full object-cover shadow-2xl hover:scale-[1.02] transition-transform"
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
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-20">
          <p className="uppercase tracking-[0.3em] text-stone-500 text-sm mb-4">
            Memoir Excerpt
          </p>

          <h1 className="text-6xl font-light mb-6">Read a Sample</h1>
        </div>

        <div className="bg-stone-900 border border-stone-800 rounded-3xl p-12 md:p-16 shadow-2xl">
          <div className="space-y-8 text-xl leading-relaxed text-stone-300">
            <p>
              During the late 80s, on a stopover in Maui, I met a woman named Noelle.
            </p>

            <p>
              She was California distilled — sun-bronzed skin, white teeth,
              effortless ease and warmth.
            </p>

            <p>
              We drove the road to Hana in a cheap convertible,
              music loud, jungle pressing in around us.
            </p>

            <p>
              It felt less like travel and more like entering an alternate version of life.
            </p>
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

        <h1 className="text-5xl font-light mb-10 text-center text-white">
          Get In Touch
        </h1>

        <p className="text-center text-stone-200 mb-10 text-lg">
          For media enquiries, interviews and reader feedback.
        </p>

        <div className="text-center">
          <a
            href="mailto:your@email.com"
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









