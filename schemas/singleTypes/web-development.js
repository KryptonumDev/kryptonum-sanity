export default {
  name: 'webDevelopment',
	title: 'Web Development',
  type: 'document',
  icon: () => '🌐',
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
      type: 'img',
      title: 'Hero Image',
      group: 'hero',
    },
    {
      name: 'hero_Nav',
      type: 'array',
      of: [
        {
          type: 'titleAndDescription',
        }
      ],
      title: 'Hero Nav',
      group: 'hero',
    },
    {
      name: 'advantages_Heading',
      type: 'markdown',
      title: 'Advantages Heading',
      group: 'advantages',
    },
    {
      name: 'advantages_Array',
      type: 'array',
      of: [
        {
          type: 'titleDescriptionAndImg',
        }
      ],
      title: 'Advantages Array',
      group: 'advantages',
    },
    {
      name: 'advantages_CtaHeading',
      type: 'markdown',
      title: 'Advantages Cta Heading',
      group: 'advantages',
    },
    {
      name: 'advantages_Cta',
      type: 'cta',
      title: 'Advantages Cta',
      group: 'advantages',
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
      name: 'process_Paragraph',
      type: 'string',
      title: 'Process Paragraph',
      group: 'process',
    },
    {
      name: 'process_List',
      type: 'array',
      of: [
        {
          type: 'titleAndDescription'
        }
      ],
      title: 'Process List',
      group: 'process',
    },
    {
      name: 'flexibility_Heading',
      type: 'markdown',
      title: 'Flexibility Heading',
      group: 'flexibility',
      description: "The `~>` string will be replaced with nice arrow.",
    },
    {
      name: 'flexibility_Claim',
      type: 'markdown',
      title: 'Flexibility Claim',
      group: 'flexibility',
    },
    {
      name: 'flexibility_Paragraph',
      type: 'markdown',
      title: 'Flexibility Paragraph',
      group: 'flexibility',
    },
    {
      name: 'flexibility_SecondParagraph',
      type: 'markdown',
      title: 'Flexibility Second Paragraph',
      group: 'flexibility',
    },
    {
      name: 'flexibility_Cta',
      type: 'array',
      of: [
        {
          type: 'cta',
        }
      ],
      validation: Rule => Rule.max(2),
      title: 'Flexibility Cta',
      group: 'flexibility',
    },
    {
      name: 'caseStudies_Heading',
      type: 'markdown',
      title: 'Case Studies Heading',
      group: 'caseStudies',
    },
    {
      name: 'ctaSection_Heading',
      type: 'markdown',
      title: 'Call To Action Section Heading',
      group: 'cta',
    },
    {
      name: 'ctaSection_Cta',
      type: 'cta',
      title: 'Call To Action Section Button',
      group: 'cta',
    },
    {
      name: 'ctaSection_Img',
      type: 'img',
      title: 'Call To Action Section Image',
      group: 'cta',
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