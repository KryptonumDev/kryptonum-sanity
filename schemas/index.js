// Single Types
import homepage from './singleTypes/homepage'
import notFound from './singleTypes/404'
import footer from './singleTypes/footer'

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
import img from './components/img'
import link from './components/link'
import titleAndDescription from './components/titleAndDescription'

export const schemaTypes = [
  homepage,
  notFound,
  footer,

  blog_entries,
  blog_categories,
  team,
  testimonails,
  technologies,
  curiosities,
  caseStudies,

  cta,
  img,
  link,
  titleAndDescription,
]