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
        { type: 'caseStudy_Participated' },
        { type: 'caseStudy_Text' },
        { type: 'caseStudy_Image' },
        { type: 'caseStudy_Showcase' },
        { type: 'caseStudy_Logo' },
        { type: 'caseStudy_Stylescape' },
        { type: 'caseStudy_Feautures' },
        {
          type: 'ctaSection',
          title: 'Case Study CtaSection',
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
        { type: 'reference', to: { type: 'testimonials' }},
        { type: 'caseStudy_Slider' },
      ],
      title: 'Content',
      group: 'content'
    },
    {
      name: 'seo',
      type: 'seo',
      title: 'SEO',
      group: 'seo',
      initialValue: {
        title: '{usługa} dla {brand} | Kryptonum',
        description: 'Zobacz case study dla {brand}. {usługa}, którą zrealizowaliśmy wykorzystując {technologie}.'
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
      name: 'seo',
      title: 'SEO'
    },
  ]
}