// Single Types
import homepage from './singleTypes/homepage'
import webDevelopment from './singleTypes/web-development'
import webDevelopment_Pwa from './singleTypes/webDevelopment_Pwa'
import notFound from './singleTypes/404'
import footer from './singleTypes/footer'
import global from './singleTypes/global'

export const singleTypes = [homepage, webDevelopment, webDevelopment_Pwa, notFound, footer];

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
import CtaSection from './components/CtaSection'
import FiveItemsList from './components/FiveItemsList'

export const schemaTypes = [
  homepage,
  webDevelopment,
  notFound,
  footer,
  webDevelopment_Pwa,
  global,

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
  scrollToNext,
  CtaSection,
  FiveItemsList
]