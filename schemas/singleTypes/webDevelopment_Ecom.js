const astertiks = "*❋*";

export default {
  name: 'webDevelopment_Ecom',
	title: '├ E-commerce',
  type: 'document',
  icon: () => '🛒',
  fields: [
    {
      name: 'hero_Heading',
      type: 'markdown',
      title: 'Hero Heading',
      group: 'hero',
      description: `To make an annotion simply use one enter between new lines of text. If you want to use asteriks, put (${astertiks})`
    },
    {
      name: 'hero_Annotation',
      type: 'markdown',
      title: 'Hero Annotation',
      group: 'hero',
      hidden: ({ parent }) => !parent.hero_Heading?.includes(`${astertiks}`)
    },
    {
      name: 'hero_Paragraph',
      type: 'markdown',
      title: 'Hero paragraph',
      group: 'hero',
    },
    {
      name: 'hero_SecondParagraph',
      type: 'markdown',
      title: 'Hero Second Paragraph',
      group: 'hero',
    },
    {
      name: 'hero_Img',
      type: 'image',
      title: 'Hero Image',
      group: 'hero',
    },
    {
      name: 'hero_CtaHeading',
      type: 'markdown',
      title: 'Hero Cta Heading',
      group: 'hero',
    },
    {
      name: 'hero_Cta',
      type: 'cta',
      title: 'Hero Cta',
      group: 'hero',
    },
    {
      name: 'process_Heading',
      type: 'markdown',
      title: 'Process Heading',
      group: 'process',
    },
    {
      name: 'process_Claim',
      type: 'markdown',
      title: 'Process Claim',
      group: 'process',
    },
    {
      name: 'process_List',
      type: 'array',
      of: [
        {
          type: 'webDevelopmentEcom_Process'
        }
      ],
      validation: Rule => Rule.max(6),
      title: 'Process List',
      group: 'process',
    },
    {
      name: 'quickForm',
      type: 'quickForm',
      title: 'Quick Form',
      group: 'quickForm',
    },
    {
      name: 'caseStudies_Heading',
      type: 'markdown',
      title: 'Case Studies Heading',
      group: 'caseStudies',
    },
    {
      name: 'develop_Paragraph1',
      type: 'markdown',
      title: 'Develop First Paragraph',
      group: 'develop',
    },
    {
      name: 'develop_Paragraph2',
      type: 'markdown',
      title: 'Develop Second Paragraph',
      group: 'develop',
    },
    {
      name: 'develop_Paragraph3',
      type: 'markdown',
      title: 'Develop Third Paragraph',
      group: 'develop',
    },
    {
      name: 'develop_Paragraph4',
      type: 'markdown',
      title: 'Develop Fourth Paragraph',
      group: 'develop',
    },
    {
      name: 'ctaSection',
      type: 'ctaSection',
      title: 'Call To Action Section',
      group: 'ctaSection',
    },
    {
      name: 'blogEntries_Heading',
      type: 'markdown',
      title: 'Blog Entries Heading',
      group: 'blogEntries',
    },
    {
      name: 'scrollToNext',
      type: 'scrollToNext',
      title: 'Scroll To Next Section',
      group: 'scrollToNext',
    },
    {
      name: 'seo',
      type: 'seo',
      title: 'SEO',
      group: 'seo',
    },
  ],
  groups: [
    {
      name: 'hero',
      title: 'Hero',
    },
    {
      name: 'process',
      title: 'Process',
    },
    {
      name: 'quickForm',
      title: 'Quick Form',
    },
    {
      name: 'caseStudies',
      title: 'Case Studies',
    },
    {
      name: 'develop',
      title: 'Develop',
    },
    {
      name: 'ctaSection',
      title: 'Call To Action',
    },
    {
      name: 'blogEntries',
      title: 'Blog Entries',
    },
    {
      name: 'scrollToNext',
      title: 'Scroll To Next',
    },
    {
      name: 'seo',
      title: 'SEO',
    },
  ]
}