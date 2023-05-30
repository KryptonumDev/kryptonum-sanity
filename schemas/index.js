// Single Types
import homepage from './singleTypes/homepage'
import webDevelopment from './singleTypes/web-development'
import pwa from './singleTypes/pwa'
import notFound from './singleTypes/404'
import footer from './singleTypes/footer'

export const singleTypes = [homepage, webDevelopment, pwa, notFound, footer];

// Collection Types
import team from './collectionTypes/team'
import testimonails from './collectionTypes/testimonials'
import technologies from './collectionTypes/technologies'
import curiosities from './collectionTypes/curiosities'
import caseStudies from './collectionTypes/caseStudies'
import blog_entries from './collectionTypes/blog/entries'
import blog_categories from './collectionTypes/blog/categories'

// Components
import cta from './components/cta'
import link from './components/link'
import titleAndDescription from './components/titleAndDescription'
import titleDescriptionAndImg from './components/titleDescriptionAndImg'
import scrollToNext from './components/scrollToNext'

export const schemaTypes = [
  homepage,
  webDevelopment,
  notFound,
  footer,
  pwa,

  blog_entries,
  blog_categories,
  team,
  testimonails,
  technologies,
  curiosities,
  caseStudies,

  cta,
  link,
  titleAndDescription,
  titleDescriptionAndImg,
  scrollToNext
]