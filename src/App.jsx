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

That fascinated me.

Luxury resorts are not really about luxury.

They are about transformation.
      `,
    },

    {
      title: 'Reinvention After Trauma',
      category: 'Personal Transformation',
      image:
        'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=2000&auto=format&fit=crop',
      excerpt:
        'When identity collapses, reinvention stops being inspirational and becomes a matter of survival.',
      content: `
Trauma changes people.

Not symbolically.

Structurally.

The person who emerges afterward is rarely the same as the person who entered the fire.

There is a loneliness to rebuilding that few people understand.

Friends disappear.

Certainties vanish.

And eventually you discover that reinvention is not motivational at all.

It is adaptation.

It is survival.

And yet strangely, inside collapse exists freedom.

Because once everything falls apart, you become dangerous in a different way.

You stop fearing loss.
      `,
    },

    {
      title: 'Pebble Beach and Petra',
      category: 'Luxury Travel',
      image:
        'https://www.visitcalifornia.com/sites/visitcalifornia.com/files/styles/welcome_image/public/vc_spotlight_pebble-beach-golf-course_st_rf_1280x640.jpg',
      excerpt:
        'Separated by two thousand years, Petra and Pebble Beach were both playgrounds for the privileged classes of their eras.',
      content: `
There was something strangely familiar about Pebble Beach.

Not in its architecture or geography, but in the feeling it created.

The understanding that this was a place designed for people who had already conquered the practical concerns of ordinary life and now sought beauty, exclusivity and emotional experience.

In many ways, it reminded me of Petra.

Both places were built around spectacle.

Both were engineered to create emotional impact.

And both existed as carefully curated environments where wealth could briefly transcend ordinary reality.
      `,
    },

    {
      title: 'Mossman and the Daintree',
      category: 'Rainforest & Reinvention',
      image:
        'https://media.australian.museum/media/dd/images/Daintree_Rainforest.width-1200.6c9f1e1.jpg',
      excerpt:
        'Tropical rainforests attract people searching for something beyond ordinary life.',
      content: `
The ancient Daintree attracts dreamers and escapees from all corners.

Off-grid, alternative-lifestyle communities.

Loners, artisans, environmentalists and escape artists.

People attempting to outrun the rat-race and discover new, more improved versions of themselves.

Rainforest settlements become emotional frontiers.

Places where identity softens and reinvention feels possible.

Where many look to the wet-season rains to wash away past selves or traumas.

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

      <main className="pt-20">{renderPage()}</main>
    </div>
  )
}

function HomePage({ setPage }) {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-6">
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/videos/WebsiteVideo1.mp4" type="video/mp4" />
      </video>

      <div className="absolute inset-0 bg-black/60"></div>

      <div className="relative z-10 max-w-5xl mx-auto text-center">
        <p className="uppercase tracking-[0.4em] text-stone-300 text-sm mb-6">
          A Memoir of Reinvention, Luxury, Collapse & Survival
        </p>

        <h1 className="text-5xl md:text-7xl font-light leading-tight mb-8">
          From Millbrook
          <br />
          to Mossman
        </h1>

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
    </section>
  )
}

function JournalPage({ articles, openArticle }) {
  return (
    <section className="min-h-screen bg-black px-6 py-24">
      <div className="max-w-7xl mx-auto">
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
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  )
}

function ArticlePage({ article }) {
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
          <h1 className="text-5xl md:text-7xl font-light leading-tight max-w-4xl">
            {article.title}
          </h1>
        </div>
      </div>

      <article className="max-w-3xl mx-auto px-6 py-24">
        <div className="whitespace-pre-line text-stone-300 text-xl md:text-2xl leading-[2.1] font-light">
          {article.content}
        </div>
      </article>
    </section>
  )
}

function AboutPage() {
  return (
    <section className="min-h-screen bg-stone-900 px-6 py-24 flex items-center justify-center">
      <h2 className="text-5xl font-light">Jim Fraser</h2>
    </section>
  )
}

function BookPage() {
  return (
    <section className="min-h-screen bg-black px-6 py-24 flex items-center justify-center">
      <img
        src="/book-cover-image.webp"
        alt="Book Cover"
        className="rounded-2xl shadow-2xl w-full max-w-md"
      />
    </section>
  )
}

function GalleryPage() {
  return (
    <section className="min-h-screen bg-stone-950 px-6 py-24 flex items-center justify-center">
      <h2 className="text-5xl font-light">Gallery</h2>
    </section>
  )
}

function ExcerptPage() {
  return (
    <section className="min-h-screen bg-black px-6 py-24 flex items-center justify-center">
      <h2 className="text-5xl font-light">Memoir Excerpt</h2>
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









