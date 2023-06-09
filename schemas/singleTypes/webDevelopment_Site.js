const astertiks = "*❋*";

export default {
  name: 'webDevelopment_Site',
	title: 'Web Development - Websites',
  type: 'document',
  icon: () => '🌐',
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
      name: 'hero_simpleCtaSection',
      type: 'simpleCtaSection',
      title: 'Hero Simple CTA Section',
      group: 'hero',
    },
    {
      name: 'pricing_Heading',
      type: 'markdown',
      title: 'Hero Pricing Heading',
      group: 'pricing',
    },
    {
      name: 'pricing_Plans',
      type: 'array',
      of: [
        {
          type: 'pricing',
        }
      ],
      title: 'Hero Pricing Plans',
      group: 'pricing',
    },
    {
      name: 'ctaSection',
      type: 'ctaSection',
      title: 'Call To Action Section',
      group: 'ctaSection',
    },
    {
      name: 'process_Heading',
      type: 'markdown',
      title: 'Process Heading',
      group: 'process',
    },
    {
      name: 'process_List',
      type: 'array',
      of: [
        {
          type: 'webDevelopmentSite_Process'
        }
      ],
      title: 'Process List',
      group: 'process',
    },
    {
      name: 'roadmap_Heading',
      type: 'markdown',
      title: 'Roadmap Heading',
      group: 'roadmap',
    },
    {
      name: 'roadmap_List',
      type: 'array',
      of: [
        {
          type: 'titleAndDescription'
        }
      ],
      title: 'Roadmap List',
      group: 'roadmap',
    },
    {
      name: 'quickForm',
      type: 'quickForm',
      title: 'Quick Form',
      group: 'quickForm',
    },
    {
      name: 'technology_Heading',
      type: 'markdown',
      title: 'Technology Heading',
      group: 'technology'
    },
    {
      name: 'technology_Paragraph',
      type: 'markdown',
      title: 'Technology Paragraph',
      group: 'technology'
    },
    {
      name: 'technology_Content',
      type: 'markdown',
      title: 'Technology Content',
      group: 'technology'
    },
    {
      name: 'technology_Img',
      type: 'array',
      of: [{ type: 'image' }],
      title: 'Technology Images',
      group: 'technology'
    },
    {
      name: 'caseStudies_Heading',
      type: 'markdown',
      title: 'Case Studies Heading',
      group: 'caseStudies',
    },
    {
      name: 'simpleCtaSection',
      type: 'simpleCtaSection',
      title: 'Simple CTA Section',
      group: 'simpleCtaSection'
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
  ],
  groups: [
    {
      name: 'hero',
      title: 'Hero',
    },
    {
      name: 'pricing',
      title: 'Pricing',
    },
    {
      name: 'ctaSection',
      title: 'Call To Action',
    },
    {
      name: 'process',
      title: 'Process',
    },
    {
      name: 'roadmap',
      title: 'Roadmap',
    },
    {
      name: 'quickForm',
      title: 'Quick Form',
    },
    {
      name: 'technology',
      title: 'Technology',
    },
    {
      name: 'caseStudies',
      title: 'Case Studies',
    },
    {
      name: 'simpleCtaSection',
      title: 'Simple CTA Section',
    },
    {
      name: 'blogEntries',
      title: 'Blog Entries',
    },
    {
      name: 'scrollToNext',
      title: 'Scroll To Next',
    },
  ]
}