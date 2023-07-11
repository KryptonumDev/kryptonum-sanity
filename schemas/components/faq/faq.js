import faq from './faq';
import faq4Grid from './faq4Grid';
import faqPayment from './faqPayment';
import faqTime from './faqTime';
import faqInfo from './faqInfo';
import faqWhy from './faqWhy';
import faqCopy from './faqCopy';
import faqWordpress from './faqWordpress';
import faq_Form from './faq_Form';

export default {
  name: "faq",
  title: "FAQ",
  type: "object",
  fields: [
    {
      name: 'heading',
      type: 'markdown',
      title: 'Heading'
    },
    {
      name: 'hint',
      type: 'string',
      title: 'Hint'
    },
    {
      name: 'price',
      type: 'faq_4Grid',
      title: 'Price',
      options: {
        collapsible: true,
        collapsed: true,
      },
    },
    {
      name: 'payment',
      type: 'faq_Payment',
      title: 'Payment',
      options: {
        collapsible: true,
        collapsed: true,
      },
    },
    {
      name: 'time',
      type: 'faq_Time',
      title: 'Time',
      options: {
        collapsible: true,
        collapsed: true,
      },
    },
    {
      name: 'info',
      type: 'faq_Info',
      title: 'Info',
      options: {
        collapsible: true,
        collapsed: true,
      },
    },
    {
      name: 'why',
      type: 'faq_Why',
      title: 'Why',
      options: {
        collapsible: true,
        collapsed: true,
      },
    },
    {
      name: 'cooperation',
      type: 'faq_4Grid',
      title: 'Cooperation',
      options: {
        collapsible: true,
        collapsed: true,
      },
    },
    {
      name: 'logo',
      type: 'faq_4Grid',
      title: 'Logo',
      options: {
        collapsible: true,
        collapsed: true,
      },
    },
    {
      name: 'seo',
      type: 'faq_4Grid',
      title: 'Seo',
      options: {
        collapsible: true,
        collapsed: true,
      },
    },
    {
      name: 'copy',
      type: 'faq_Copy',
      title: 'Copy',
      options: {
        collapsible: true,
        collapsed: true,
      },
    },
    {
      name: 'wordpress',
      type: 'faq_Wordpress',
      title: 'Wordpress',
      options: {
        collapsible: true,
        collapsed: true,
      },
    },
    {
      name: 'form',
      type: 'faq_Form',
      title: 'Form',
    },
  ],
}

export const faqSchemas = [faq, faq4Grid, faqPayment, faqTime, faqInfo, faqWhy, faqCopy, faqWordpress, faq_Form];