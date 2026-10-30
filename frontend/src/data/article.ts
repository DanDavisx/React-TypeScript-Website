export type Article = {
  id: number
  slug: string
  title: string
  excerpt: string
  image: string
  imageAlt: string
  publishedAt: string
}

import miniImage from '../images/stock/minis.jpg'
import saabImage from '../images/stock/saab93.webp'
import fordImage from '../images/stock/fiestaZS.avif'

export const articles: Article[] = [
  {
    id: 1,
    slug: 'mini-road-test',
    title: 'A closer look at the Mini',
    excerpt: 'Our impressions of its handling, comfort and everyday usability.',
    image: miniImage,
    imageAlt: 'Front view of a Mini',
    publishedAt: '2026-10-29',
  },
  {
    id: 2,
    slug: 'saab93OG-road-test',
    title: 'A closer look at the Saab',
    excerpt: 'Our impressions of its handling, comfort and everyday usability.',
    image: saabImage,
    imageAlt: 'Front view of a Saab',
    publishedAt: '2026-09-19',
  },
  {
    id: 3,
    slug: 'ford-fiestaZS-road-test',
    title: 'A closer look at the Fiesta',
    excerpt: 'Our impressions of its handling, comfort and everyday usability.',
    image: fordImage,
    imageAlt: 'Front view of a Ford',
    publishedAt: '2026-10-29',
  },
  {
    id: 4,
    slug: 'ford-fiestaZSX-road-test',
    title: 'A closer look at the FiestaX',
    excerpt: 'Our impressions of its handling, comfort and everyday usability.',
    image: fordImage,
    imageAlt: 'Front view of a FordX',
    publishedAt: '2026-10-30',
  }
]
