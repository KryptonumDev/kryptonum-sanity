// Single Types
import homepage from './singleTypes/homepage'
import webDevelopment from './singleTypes/webDevelopment'
import webDevelopment_Pwa from './singleTypes/webDevelopment_Pwa'
import webDevelopment_Ecom from './singleTypes/webDevelopment_Ecom'
import webDevelopment_Site from './singleTypes/webDevelopment_Site'
import notFound from './singleTypes/404'
import privacyPolicy from './singleTypes/privacyPolicy'
import footer from './singleTypes/footer'
import global from './singleTypes/global'
import workshop from './singleTypes/workshop'
import agency from './singleTypes/agency'
import graphicsDesign from './singleTypes/graphicsDesign'
import graphicsDesign_VisualIdentity from './singleTypes/graphicsDesign_VisualIdentity'
import graphicsDesign_Audits from './singleTypes/graphicsDesign_Audits'
import graphicsDesign_Logo from './singleTypes/graphicsDesign_Logo'
import academy from './singleTypes/academy'
import team from './singleTypes/team'

export const singleTypes = [
  homepage,
  webDevelopment,
  webDevelopment_Pwa,
  webDevelopment_Ecom,
  webDevelopment_Site,
  graphicsDesign,
  graphicsDesign_VisualIdentity,
  graphicsDesign_Audits,
  graphicsDesign_Logo,
  workshop,
  agency,
  team,
  academy,
  notFound,
  footer,
  privacyPolicy,
];

// Collection Types
import teamMember from './collectionTypes/teamMember'
import testimonails from './collectionTypes/testimonials'
import technologies from './collectionTypes/technologies'
import caseStudies from './collectionTypes/caseStudies'
import blog_entries from './collectionTypes/blog/entries'
import blog_categories from './collectionTypes/blog/categories'
import curiosity_entries from './collectionTypes/curiosity/entries'
import curiosity_categories from './collectionTypes/curiosity/categories'

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
import linkWithImg from './components/linkWithImg'

export const schemaTypes = [
  ...singleTypes,
  global,

  blog_entries,
  blog_categories,
  curiosity_entries,
  curiosity_categories,
  teamMember,
  testimonails,
  technologies,
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
  linkWithImg,
]