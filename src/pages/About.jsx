import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router';
import editorialImage from '../assets/images/fashion1.jpg';

const principles = [
  {
    number: '01',
    title: 'A considered mix',
    description: 'Clothing, footwear, accessories, and beauty come together in one easy-to-explore collection.',
  },
  {
    number: '02',
    title: 'Made for everyday',
    description: 'We focus on the pieces and personal-care essentials that fit naturally into daily routines.',
  },
  {
    number: '03',
    title: 'Room to be yourself',
    description: 'Our collection is a starting point for your style, with the freedom to choose what feels right to you.',
  },
];

export default function About() {
  return (
    <article className="bg-white text-stone-900">
      <section className="bg-stone-50">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 py-12 sm:py-16 lg:py-20">
          <div className="grid lg:grid-cols-2 items-center gap-10 lg:gap-16">
            <div className="max-w-xl py-2 lg:py-8">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-800">
                A considered collection for everyday living
              </p>
              <h1 className="mt-5 text-4xl sm:text-5xl lg:text-[3.5rem] font-serif font-bold leading-[1.12] tracking-tight">
                Find your own kind of everyday.
              </h1>
              <p className="mt-6 text-base sm:text-lg leading-8 text-stone-600 font-light max-w-lg">
                Aura brings clothing, footwear, accessories, and beauty together in one welcoming place—so discovering pieces for your day can feel more personal and less complicated.
              </p>
              <Link
                to="/products"
                className="inline-flex items-center gap-2 mt-8 text-sm font-semibold text-emerald-800 hover:text-emerald-950 transition-colors"
              >
                Explore the collection
                <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </Link>
            </div>

            <figure className="relative">
              <img
                src={editorialImage}
                alt="A considered arrangement of accessories and fashion details"
                className="w-full aspect-[4/3] lg:aspect-[5/4] object-cover object-center"
              />
              <figcaption className="mt-3 text-xs tracking-wide text-stone-500">
                Everyday pieces, brought together with intention.
              </figcaption>
            </figure>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 py-20 sm:py-24 lg:py-32">
        <div className="grid md:grid-cols-12 gap-8 lg:gap-16">
          <div className="md:col-span-4">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-emerald-800">
              Our story
            </p>
            <h2 className="mt-4 text-3xl sm:text-4xl font-serif font-semibold leading-tight">
              A simpler way to discover what feels like you.
            </h2>
          </div>
          <div className="md:col-span-7 md:col-start-6 max-w-2xl text-stone-600 font-light leading-8 space-y-5">
            <p>
              Aura grew from a familiar feeling: finding the things you want for everyday life can mean looking in too many places. We imagined a more welcoming kind of store—one where style and self-care sit side by side, and where browsing can lead you to something that feels distinctly your own.
            </p>
            <p>
              That idea shapes the collection today. From clothing and footwear to accessories and beauty, each category offers a different way to bring a little more ease and personality to the routines you already have.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-stone-50 border-y border-stone-100">
        <div className="max-w-5xl mx-auto px-5 sm:px-8 lg:px-12 py-16 sm:py-20 lg:py-24 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-emerald-800">
            Our mission
          </p>
          <h2 className="mt-4 text-3xl sm:text-4xl lg:text-[2.75rem] font-serif font-semibold leading-tight">
            Make everyday discovery feel more considered.
          </h2>
          <p className="mt-5 mx-auto max-w-2xl text-base sm:text-lg leading-8 text-stone-600 font-light">
            We bring useful, expressive categories into one easy-to-explore destination, helping you find pieces that fit your preferences, your routine, and your sense of style.
          </p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 py-20 sm:py-24 lg:py-32">
        <div className="max-w-2xl mb-12 lg:mb-16">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-emerald-800">
            The Aura difference
          </p>
          <h2 className="mt-4 text-3xl sm:text-4xl font-serif font-semibold leading-tight">
            One collection, many parts of your everyday.
          </h2>
          <p className="mt-4 text-base leading-7 text-stone-600 font-light">
            We make it easy to move between the categories you love, with room to explore and choose at your own pace.
          </p>
        </div>

        <div className="grid md:grid-cols-3 border-t border-stone-200">
          {principles.map((principle) => (
            <article
              key={principle.number}
              className="pt-6 pb-2 md:pt-7 md:pr-8 lg:pr-10 border-b border-stone-200 md:border-b-0 md:[&:not(:last-child)]:border-r md:[&:not(:last-child)]:pr-8 md:[&:not(:first-child)]:pl-8 lg:[&:not(:last-child)]:pr-10 lg:[&:not(:first-child)]:pl-10"
            >
              <p className="text-xs font-medium tracking-widest text-stone-400">{principle.number}</p>
              <h3 className="mt-5 text-xl font-serif font-semibold text-stone-900">{principle.title}</h3>
              <p className="mt-3 text-sm leading-7 text-stone-600 font-light">{principle.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-stone-900 text-white">
        <div className="max-w-5xl mx-auto px-5 sm:px-8 lg:px-12 py-16 sm:py-20 lg:py-24 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-emerald-300">
            Make yourself at home
          </p>
          <h2 className="mt-4 text-3xl sm:text-4xl font-serif font-semibold leading-tight">
            The best choices are the ones that feel like yours.
          </h2>
          <p className="mt-4 mx-auto max-w-xl text-base leading-7 text-stone-300 font-light">
            Take a look around, follow what catches your eye, and find something to make your everyday your own.
          </p>
          <Link
            to="/products"
            className="inline-flex items-center gap-2 mt-8 px-5 py-3 border border-white/40 text-sm font-medium text-white hover:bg-white hover:text-stone-900 transition-colors"
          >
            Shop the collection
            <ArrowRight className="w-4 h-4" aria-hidden="true" />
          </Link>
        </div>
      </section>
    </article>
  );
}
