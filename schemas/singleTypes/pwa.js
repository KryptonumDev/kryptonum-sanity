export default {
  name: 'pwa',
	title: 'Progressive Web Apps',
  type: 'document',
  icon: () => '📱',
  fields: [
    {
      name: 'hero_Heading',
      type: 'markdown',
      title: 'Hero Heading',
      group: 'hero',
    },
    {
      name: 'hero_Claim',
      type: 'markdown',
      title: 'Hero Claim',
      group: 'hero',
    },
    {
      name: 'hero_Paragraph',
      type: 'markdown',
      title: 'Hero Paragraph',
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
      name: 'advantages',
      title: 'Advantages',
    },
    {
      name: 'process',
      title: 'Process',
    },
    {
      name: 'flexibility',
      title: 'Flexibility',
    },
    {
      name: 'caseStudies',
      title: 'Case Studies',
    },
    {
      name: 'cta',
      title: 'Call To Action',
    },
    {
      name: 'scrollToNext',
      title: 'Scroll To Next',
    },
  ]
}