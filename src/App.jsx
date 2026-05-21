import { useState } from 'react'

export default function App() {
  const [page, setPage] = useState('home')
  const [selectedArticle, setSelectedArticle] = useState(null)

  const journalArticles = [
    {
      title: 'Life at Millbrook Resort',
      category: 'Luxury & Opportunity',
     image:
      '/millbrook2.jpg',
      excerpt:
        'Luxury resorts are carefully designed emotional experiences — manicured, man-made environments where ambition, beauty and reinvention intersect.',
      content: `
Millbrook was never simply a golf resort.

It was an atmosphere.

An emotional architecture designed to momentarily suspend ordinary life.

People often arrived carrying invisible burdens — marriages under strain, careers built on relentless pressure, identities quietly unraveling beneath outward success.

But once inside the gates, everything changes.

The majesty of the mountains softens people.

The beauty alters them.

And for brief moments, they become slightly different versions of themselves.

That always fascinated me.

Luxury resorts are not really about luxury.

They're about transformation.
      `,
    },

    {
      title: 'Reinvention After Trauma',
      category: 'Personal Transformation',
      image:
        'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=2000&auto=format&fit=crop',
      excerpt:
        'When identity collapses, reinvention stops being inspirational and becomes a matter of survival. The challenge becomess finding a navigable pathway through the rocky landscape we find ourselves surrounded by',
      content: `
Trauma changes people.

Not symbolically - but structurally.

And the person who emerges afterwards is rarely the same as the person who entered the fire.

There is a loneliness to rebuilding that few people understand.

Friends often disappear.

Certainties vanish.

And eventually you discover that reinvention is not motivational at all.

It is often driven by adaptation and can be a genuine conduit to growth.

And like evolution itself - whose #1 rule is: adapt or die - it comes from a sheer will to survive.

And yet almost magically, after collapse, comes reinvention and eventual freedom.

Because once everything falls apart, you become dangerous in a different way.

You stop fearing loss and grow from it.
      `,
    },

    {
      title: 'Pebble Beach and Petra',
      category: 'Luxury Travel',
    image:
      '/pebblebeach.jpg',
      excerpt:
        'The ancient, lost-city of Petra, and today's modern Pebble Beach Golf Links - both playgrounds for the privileged classes from different eras.',
      content: `
When I first vivited Pebble Beach back in the late '80's, I immediately knew it was a special place.

Not in its architecture or breathtaking geography, but in the feeling it created.

The understanding that this is a place designed for people who've already conquered the practical concerns of ordinary life and now seek beauty, exclusivity and emotional experience.

In many ways, it reminded me of the ancient city of Petra in Southern Jordan.

Although thousands of years and thousands of miles apart, both places were built around spectacle.

Both engineered to create emotional impact.

And both existed as carefully curated environments where wealth could briefly transcend ordinary reality.

Playgrouns for those who have it all, but want more.
      `,
    },

    {
     title: 'Mossman and the Daintree',
category: 'Rainforest & Reinvention',
    image:
      '/daintree1.jpg',
      excerpt:
        'The tropics often attract people searching for something beyond an ordinary life.',
      content: `
The 150 million year old prehitoric Daintree Rainforest congregates dreamers and escapees from all corners.

Off-grid, alternative-lifestyle communities - loners, artisans, environmentalists and escape artists.

People attempting to outrun society and discover new, more improved versions of themselves drawn to where the ocean meets the forest.

Rainforest settlements become emotional frontiers.

Places where identity softens and reinvention feels possible.

Where many look to the wet-season rains to wash away past versions of themselves or cleanse personal traumas.

Perhaps that is why so many people arrive intending to stay only one season — and never leave.
      `,
    },
  ]

  const openArticle = (article) => {
    setSelectedArticle(article)
    setPage('article')
    window.scrollTo(0, 0)
  }

  const renderPage = () => {
    switch (page) {
      case 'about':
        return <AboutPage />

      case 'memoir':
        return <BookPage />

      case 'journal':
        return (
          <JournalPage
            articles={journalArticles}
            openArticle={openArticle}
          />
        )

      case 'article':
        return (
          <ArticlePage
            article={selectedArticle}
            setPage={setPage}
          />
        )

      case 'gallery':
        return <GalleryPage />

      case 'excerpt':
        return <ExcerptPage />

      case 'contact':
        return <ContactPage />

      default:
        return (
          <HomePage
            setPage={setPage}
            articles={journalArticles}
            openArticle={openArticle}
          />
        )
    }
  }

  return (
    <div className="min-h-screen bg-black text-white font-sans">
      <header className="fixed top-0 left-0 right-0 z-50 bg-black/70 backdrop-blur-md border-b border-stone-800">
        <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">

          <button
            onClick={() => {
              setPage('home')
              window.scrollTo(0, 0)
            }}
            className="text-2xl font-semibold tracking-wide"
          >
            From Millbrook to Mossman
          </button>

          <nav className="flex gap-6 text-sm uppercase tracking-[0.2em]">

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
                className="hover:text-stone-300 transition-colors"
              >
                {label}
              </button>
            ))}

          </nav>
        </div>
      </header>

      <main className="pt-20">
        {renderPage()}
      </main>
    </div>
  )
}

function HomePage({ setPage, articles, openArticle }) {
  return (
    <>
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-6">

        {/* Background Video */}
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/videos/WebsiteVideo1.mp4" type="video/mp4" />
        </video>

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/60"></div>

        {/* Content */}
        <div className="relative z-10 max-w-5xl mx-auto text-center">

          <p className="uppercase tracking-[0.4em] text-stone-300 text-sm mb-6">
            A Memoir of Love, Loss, Collapse, Reinvention & Survival.
            Raw, Real & Revealing.
          </p>

          <h1 className="text-5xl md:text-7xl font-light leading-tight mb-8">
            From Millbrook
            <br />
            to Mossman
          </h1>

          <p className="text-xl md:text-2xl text-stone-300 max-w-3xl mx-auto leading-relaxed mb-12">
            An emotionally raw journey spanning luxury resorts,
            global travel, entrepreneurship, and the relentless pursuit of identity.
          </p>

          <div className="flex flex-col md:flex-row gap-6 justify-center">

            <a
              href="https://www.amazon.com.au/dp/B0GX356C9C"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-white text-black px-8 py-4 rounded-2xl text-lg font-semibold hover:scale-105 transition-transform"
            >
              Buy the Memoir
            </a>

            <button
              onClick={() => {
                setPage('journal')
                window.scrollTo(0, 0)
              }}
              className="border border-white px-8 py-4 rounded-2xl text-lg hover:bg-white hover:text-black transition-all"
            >
              Explore Journal
            </button>

          </div>
        </div>
      </section>

      <section className="bg-stone-950 px-6 py-28">
        <div className="max-w-7xl mx-auto">

          <div className="mb-20 text-center">
            <p className="uppercase tracking-[0.3em] text-stone-500 text-sm mb-4">
              Featured Journal Essays
            </p>

            <h2 className="text-5xl font-light mb-6">
              Luxury, Identity & Reinvention
            </h2>

            <p className="text-stone-400 text-xl max-w-3xl mx-auto">
              Personal reflections exploring elite resort culture,
              emotional collapse, travel, wealth, transformation and survival.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-10">

            {articles.slice(0, 2).map((article, idx) => (
              <button
                key={idx}
                onClick={() => openArticle(article)}
                className="group text-left bg-black border border-stone-800 rounded-3xl overflow-hidden hover:border-stone-600 transition-all"
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

                  <h3 className="text-4xl font-light mb-6">
                    {article.title}
                  </h3>

                  <p className="text-stone-400 text-lg leading-relaxed">
                    {article.excerpt}
                  </p>

                </div>
              </button>
            ))}

          </div>
        </div>
      </section>
    </>
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

          <p className="text-stone-400 text-xl max-w-3xl mx-auto leading-relaxed">
            Explorations of luxury, identity, reinvention,
            travel, ambition, emotional collapse and survival.
          </p>

        </div>

        <div className="grid md:grid-cols-2 gap-10">

          {articles.map((article, idx) => (
            <button
              key={idx}
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

                <p className="text-stone-400 text-lg leading-relaxed mb-6">
                  {article.excerpt}
                </p>

                <div className="text-sm uppercase tracking-[0.2em] text-stone-500">
                  Read Essay →
                </div>

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

        <div className="whitespace-pre-line text-stone-300 text-xl md:text-2xl leading-[2.1] font-light">
          {article.content}
        </div>

        <div className="mt-20 pt-10 border-t border-stone-800">

          <button
            onClick={() => {
              setPage('journal')
              window.scrollTo(0, 0)
            }}
            className="text-stone-400 hover:text-white transition-colors"
          >
            ← Back to Journal
          </button>

        </div>

      </article>
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
          className="rounded-3xl shadow-2xl w-full h-[650px] object-cover"
        />

        <div>

          <p className="uppercase tracking-[0.3em] text-stone-500 text-sm mb-4">
            About the Author
          </p>

          <h2 className="text-5xl font-light mb-10">
            Jim Fraser
          </h2>

          <div className="space-y-6 text-lg text-stone-300 leading-relaxed">

            <p>
              From the alpine landscapes of New Zealand to international journeys
              spanning Europe, North America and Australia, this memoir traces
              a life shaped by ambition, reinvention and resilience.
            </p>

            <p>
              What began at a luxury golf resort in 1993 evolved into a deeply
              personal global journey through entrepreneurship, love, collapse,
              recovery and transformation.
            </p>

            <p>
              From Millbrook to Mossman explores both triumph and devastation —
              including the darker emotional realities that ultimately forged a
              new understanding of identity and purpose.
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
            alt="Book Cover"
            className="rounded-2xl shadow-2xl w-full"
          />

        </div>

        <div>

          <p className="uppercase tracking-[0.3em] text-stone-500 text-sm mb-4">
            The Memoir
          </p>

          <h2 className="text-5xl font-light mb-8">
            An Extraordinary Journey
          </h2>

          <div className="space-y-6 text-lg text-stone-300 leading-relaxed mb-10">

            <p>
              Honest, cinematic and emotionally raw,
              From Millbrook to Mossman explores the emotional
              cost of ambition and the courage required to rebuild.
            </p>

            <p>
              A global memoir spanning luxury resort culture,
              entrepreneurship, relationships, travel and survival.
            </p>

          </div>

          <a
            href="https://www.amazon.com.au/dp/B0GX356C9C"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-white text-black px-8 py-4 rounded-2xl text-lg font-bold hover:scale-105 transition-transform"
          >
            Order Your Copy
          </a>

        </div>
      </div>
    </section>
  )
}

function GalleryPage() {
  const images = [
    '/PaperbackBookWEBP.webp',
    '/OpenBook.jpg',
    '/Gallery1b.webp',
  ]

  return (
    <section className="min-h-screen bg-stone-950 px-6 py-24">

      <div className="max-w-7xl mx-auto">

        <div className="text-center mb-16">

          <p className="uppercase tracking-[0.3em] text-stone-500 text-sm mb-4">
            Gallery
          </p>

          <h2 className="text-5xl font-light mb-6">
            Places & Moments
          </h2>

        </div>

        <div className="grid md:grid-cols-2 gap-8">

          {images.map((image, idx) => (
            <img
              key={idx}
              src={image}
              alt="Gallery"
              className="rounded-3xl shadow-2xl h-[420px] w-full object-cover hover:scale-[1.02] transition-transform"
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

          <h2 className="text-5xl font-light mb-6">
            Read a Sample
          </h2>

        </div>

        <div className="bg-stone-900 border border-stone-800 rounded-3xl p-10 md:p-16 shadow-2xl">

          <div className="space-y-8 text-xl leading-relaxed text-stone-300 max-w-3xl mx-auto">

            <p>
              During the late 80's, on a stopover in Maui,
              I'd met a woman named Noelle.
            </p>

            <p>
              She was California distilled — sun-bronzed skin,
              white teeth, effortless ease and warmth.
            </p>

            <p>
              We drove the coast road to Hana in a cheap convertible,
              music loud, jungle pressing in around us.
            </p>

            <p>
              It felt less like travel and more like entering an alternate version of life.
            </p>

          </div>

          <div className="mt-16 text-center">

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

        <h2 className="text-5xl font-light mb-10 text-center text-white">
          Get In Touch
        </h2>

        <p className="text-center text-stone-200 mb-10 text-lg">
          For media enquiries, reader feedback, interviews
          or speaking opportunities.
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









