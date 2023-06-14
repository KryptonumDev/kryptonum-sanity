// Single Types
import homepage from './singleTypes/homepage'
import webDevelopment from './singleTypes/webDevelopment'
import webDevelopment_Pwa from './singleTypes/webDevelopment_Pwa'
import webDevelopment_Ecom from './singleTypes/webDevelopment_Ecom'
import webDevelopment_Site from './singleTypes/webDevelopment_Site'
import notFound from './singleTypes/404'
import footer from './singleTypes/footer'
import global from './singleTypes/global'
import workshop from './singleTypes/workshop'
import agency from './singleTypes/agency'
import graphicsDesign from './singleTypes/graphics-design'
import visualIdentity from './singleTypes/visual-identity'
import audits from './singleTypes/audits'

export const singleTypes = [
  homepage,
  webDevelopment,
  webDevelopment_Pwa,
  webDevelopment_Ecom,
  webDevelopment_Site,
  workshop,
  agency,
  graphicsDesign,
  visualIdentity,
  audits,
  notFound,
  footer
];

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
import titleAndImage from './components/titleAndImage'
import scrollToNext from './components/scrollToNext'
import CtaSection from './components/CtaSection'
import FiveItemsList from './components/FiveItemsList'
import webDevelopmentEcom_Process from './components/webDevelopmentEcom_Process';
import quickForm from './components/quickForm'
import pricing from './components/pricing'
import benefits from './components/benefits'
import webDevelopmentSite_Process from './components/webDevelopmentSite_Process'
import { faqSchemas } from './components/faq/faq'
import simpleCtaSection from './components/simpleCtaSection'

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
  titleAndImage,
  scrollToNext,
  CtaSection,
  FiveItemsList,
  webDevelopmentEcom_Process,
  quickForm,
  pricing,
  benefits,
  webDevelopmentSite_Process,
  ...faqSchemas,
  simpleCtaSection,
]