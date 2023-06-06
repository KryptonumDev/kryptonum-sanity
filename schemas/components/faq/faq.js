import faq from './faq';
import faqPrice from './faqPrice';

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
      type: 'faq_Price',
      title: 'Price',
      options: {
        collapsible: true,
        collapsed: false,
      },
    },
  ],
}

export const faqSchemas  = [faq, faqPrice];