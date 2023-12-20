// Single Types
import homepage from './singleTypes/homepage'
import webDevelopment from './singleTypes/webDevelopment'
import webDevelopment_Pwa from './singleTypes/webDevelopment_Pwa'
import webDevelopment_Ecom from './singleTypes/webDevelopment_Ecom'
import webDevelopment_Site from './singleTypes/webDevelopment_Site'
import notFound from './singleTypes/404'
import privacyPolicy from './singleTypes/privacyPolicy'
import global from './singleTypes/global'
import workshop from './singleTypes/workshop'
import agency from './singleTypes/agency'
import graphicsDesign from './singleTypes/graphicsDesign'
import graphicsDesign_VisualIdentity from './singleTypes/graphicsDesign_VisualIdentity'
import graphicsDesign_Audits from './singleTypes/graphicsDesign_Audits'
import graphicsDesign_Logo from './singleTypes/graphicsDesign_Logo'
import academy from './singleTypes/academy'
import team from './singleTypes/team'
import portfolio from './singleTypes/portfolio'
import blog from './singleTypes/blog'
import sitemap from './singleTypes/sitemap'
import contact from './singleTypes/contact'
import brief from './singleTypes/brief'
import brandingPage from './singleTypes/brandingPage'
import uiDesignPage from './singleTypes/uiDesignPage'
import uxDesignPage from './singleTypes/uxDesignPage'
import marketing360Page from './singleTypes/marketing360Page'

export const singleTypes = [
  homepage,
  contact,
  brief,
  portfolio,
  webDevelopment,
  webDevelopment_Pwa,
  webDevelopment_Ecom,
  webDevelopment_Site,
  graphicsDesign,
  graphicsDesign_VisualIdentity,
  graphicsDesign_Audits,
  marketing360Page,
  graphicsDesign_Logo,
  workshop,
  agency,
  team,
  academy,
  blog,
  uiDesignPage,
  uxDesignPage,
  brandingPage,
  notFound,
  sitemap,
  privacyPolicy,
];

// Collection Types
import teamMember from './collectionTypes/teamMember'
import testimonails from './collectionTypes/testimonials'
import technologies from './collectionTypes/technologies'
import blog_entries from './collectionTypes/blog/entries'
import blog_categories from './collectionTypes/blog/categories'
import curiosity_entries from './collectionTypes/curiosity/entries'
import curiosity_categories from './collectionTypes/curiosity/categories'
import caseStudy_entries from './collectionTypes/caseStudy/entries'
import caseStudy_categories from './collectionTypes/caseStudy/categories'
import locationPage from './collectionTypes/locationPage'

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
import seo from './components/seo'
import globalSeo from './components/globalSeo'
import contactPerson from './components/contactPerson'
import PortableText from '../components/PortableText'
import OrderedListArray from './components/blog/orderedListArray'
import OrderedList from './components/blog/orderedList'
import UnorderedListArray from './components/blog/unorderedListArray'
import UnorderedList from './components/blog/unorderedList'
import curiosity_KeyElements from './components/curiosity/curiosity_KeyElements'
import curiosity_Sources from './components/curiosity/curiosity_Sources'
import standout from './components/standout'
import curiosity_Share from './components/curiosity/curiosity_Share'
import curiosity_Highlight from './components/curiosity/curiosity_Highlight'
import curiosity_Note from './components/curiosity/curiosity_Note'
import curiosity_Tiles from './components/curiosity/curiosity_Tiles'
import curiosity_LargeList from './components/curiosity/curiosity_LargeList'
import curiosity_ColumnText from './components/curiosity/curiosity_ColumnText'
import blog_Tiles, { blog_TilesArray } from './components/blog/blog_Tiles'
import curiosity_ExtendedList, { curiosity_ExtendedList_Array, curiosity_ExtendedList_Array_Item } from './components/curiosity/curiosity_ExtendedList'
import caseStudy_Participated from './components/caseStudy/caseStudy_Participated';
import caseStudy_Text, { caseStudy_Text_Blocks } from './components/caseStudy/caseStudy_Text';
import caseStudy_Image from './components/caseStudy/caseStudy_Image';
import ImageShowcase from './components/ImageShowcase';
import caseStudy_Stylescape from './components/caseStudy/caseStudy_Stylescape';
import caseStudy_Feautures from './components/caseStudy/caseStudy_Feautures';
import caseStudy_Slider from './components/caseStudy/caseStudy_Slider';
import TeamSection from './components/TeamSection'
import LatestTestimonials from './components/LatestTestimonials'
import CaseStudies from './components/CaseStudies'
import TextComponent, { TextComponent_Blocks } from './components/TextComponent'
import ImageComponent from './components/ImageComponent'
import TilesComponent, { TilesComponent_List } from './components/TilesComponent'
import CenteredHeading from './components/CenteredHeading'
import TextColumnComponent from './components/TextColumnComponent'
import Process from './components/Process'
import LargeList from './components/LargeList'
import LogoShowcase from './components/LogoShowcase'
import GridFloatingImg from './components/GridFloatingImg'
import ListWithOverflowIcon, { ListWithOverflowIcon_Array } from './components/ListWithOverflowIcon'
import SimpleGridList2Columns from './components/blog/SimpleGridList2Columns'
import SimpleGridImage2Columns from './components/blog/SimpleGridImage2Columns'
import TabSection, { TabSection_Array } from './components/blog/TabSection'
import DetailedGrid from './components/blog/DetailedGrid'
import HeaderTitleDescriptionList from './components/HeaderTitleDescriptionList'
import HeadingImageBlocks from './components/HeadingImageBlocks'
import IconDescription from './components/IconDescription'
import HeadingWithIconDescriptionList from './components/HeadingWithIconTitleDescriptionList'
import IconTitleBlocks, {Blocks_Array} from './components/IconTitleBlocks'
import Hero from './components/Hero'
import TilesWithHeading from './components/TilesWithHeading'
import Slider from './components/Slider'
import CardGridWithCentralizedHeading from './components/uxDesignPage/CardGridWithCentralizedHeading'
import HeadingBlocksCardGrid from './components/HeadingBlocksCardGrid'
import CtaSectionPill from './components/CtaSectionPill'
import ProcessList, { ProcessList_array } from './components/ProcessList'

export const schemaTypes = [
  ...singleTypes,
  global,
  
  teamMember,
  blog_entries,
  blog_categories,
  curiosity_entries,
  curiosity_categories,
  caseStudy_entries,
  caseStudy_categories,
  testimonails,
  technologies,
  locationPage,

  Hero,
  ProcessList,
  HeadingBlocksCardGrid,
  TilesWithHeading,
  Slider,
  CardGridWithCentralizedHeading,
  HeadingWithIconDescriptionList,
  Blocks_Array,
  IconTitleBlocks,
  HeaderTitleDescriptionList,
  IconDescription,
  HeadingImageBlocks,
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
  seo,
  globalSeo,
  contactPerson,
  PortableText,
  OrderedListArray,
  OrderedList,
  UnorderedListArray,
  UnorderedList,
  curiosity_KeyElements,
  curiosity_Sources,
  standout,
  curiosity_Share,
  curiosity_Highlight,
  curiosity_Note,
  curiosity_Tiles,
  curiosity_LargeList,
  blog_Tiles,
  blog_TilesArray,
  curiosity_ColumnText,
  curiosity_ExtendedList,
  curiosity_ExtendedList_Array,
  curiosity_ExtendedList_Array_Item,
  TeamSection,
  LatestTestimonials,
  CaseStudies,
  TextComponent,
  TextComponent_Blocks,
  ImageComponent,
  TilesComponent,
  TilesComponent_List,
  ProcessList_array,
  CenteredHeading,
  TextColumnComponent,
  Process,
  LargeList,
  LogoShowcase,
  GridFloatingImg,
  ListWithOverflowIcon,
  ListWithOverflowIcon_Array,
  SimpleGridList2Columns,
  SimpleGridImage2Columns,
  TabSection,
  TabSection_Array,
  DetailedGrid,
  CtaSectionPill,

  caseStudy_Participated,
  caseStudy_Text,
  caseStudy_Text_Blocks,
  caseStudy_Image,
  ImageShowcase,
  caseStudy_Stylescape,
  caseStudy_Feautures,
  caseStudy_Slider,
]