// Single Types
import homepage from './singleTypes/homepage'
import webDevelopment from './singleTypes/webDevelopment'
import webDevelopment_Pwa from './singleTypes/webDevelopment_Pwa'
import webDevelopment_Ecom from './singleTypes/webDevelopment_Ecom'
import notFound from './singleTypes/404'
import footer from './singleTypes/footer'
import global from './singleTypes/global'

export const singleTypes = [homepage, webDevelopment, webDevelopment_Pwa, webDevelopment_Ecom, notFound, footer];

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
import webDevelopmentEcom_Process from './components/webDevelopmentEcom_Process';

export const schemaTypes = [
  ...singleTypes,
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
  FiveItemsList,
  webDevelopmentEcom_Process
]