export default {
  name: 'caseStudy_entries',
	title: 'Case Study Wpisy',
  type: 'document',
  icon: () => '📂',
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Name',
      group: 'hero',
    },
    {
      name: 'slug',
      type: 'slug',
      title: 'Slug',
      options: {
        source: 'name'
      },
      group: 'hero',
    },
    {
      name: 'heading',
      type: 'markdown',
      title: 'Heading',
      group: 'hero',
    },
    {
      name: 'paragraph',
      type: 'markdown',
      title: 'Paragraph',
      group: 'hero',
    },
    {
      name: 'paragraph2',
      type: 'markdown',
      title: 'Second Paragraph',
      group: 'hero',
    },
    {
      name: 'categories_Paragraph',
      type: 'string',
      title: 'Categories Paragraph',
      initialValue: 'Zakres pracy:',
      group: 'hero',
    },
    {
      name: 'categories',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{ type: 'caseStudy_categories' }],
          options: { disableNew: true },
        }
      ],
      title: 'Categories',
      description: 'The first category in an array should be the most important one, because it shows in SEO tags.',
      group: 'hero',
    },
    {
      name: 'img',
      type: 'image',
      title: 'Image',
      group: 'hero',
    },
    {
      name: 'content',
      type: 'array',
      of: [
        { type: 'standout' },
        { type: 'caseStudy_Highlight' },
        { type: 'caseStudy_ProcessArray' },
        { type: 'caseStudy_Testimonial' },
        { type: 'caseStudy_Summary' },
        { type: 'caseStudy_Technology' },
        { type: 'process_KeyElementsWrapper' }
      ],
      title: 'Content',
      group: 'content'
    },
    {
      name: 'ctaSection',
      type: 'ctaSection',
      title: 'Cta Section',
      group: 'ctaSection',
      initialValue: {
        heading: "Chcesz, byśmy **zaopiekowali** się Twoją marką?",
        cta: {
          theme: 'primary',
          text: 'Umów darmową konsultację',
          href: '/pl/kontakt'
        },
        img: {
          _type: 'image',
          asset: {
            _type: 'reference',
            _ref: 'image-4b4c8eee5356689bd082550ebb7ade03f0d95b2d-700x633-webp'
          }
        }
      },
    },
    {
      name: 'seo',
      type: 'seo',
      title: 'SEO',
      group: 'seo',
      initialValue: {
        title: '{usługa} dla {brand} | Kryptonum',
        description: 'Zobacz case study dla {brand}. {usługa}, którą zrealizowaliśmy wykorzystując {techs}.'
      },
    },
  ],
  preview: {
    select: {
      title: 'name',
      media: 'img'
    }
  },
  groups: [
    {
      name: 'hero',
      title: 'Hero'
    },
    {
      name: 'content',
      title: 'Content'
    },
    {
      name: 'ctaSection',
      title: 'CTA Section'
    },
    {
      name: 'seo',
      title: 'SEO'
    },
  ]
}