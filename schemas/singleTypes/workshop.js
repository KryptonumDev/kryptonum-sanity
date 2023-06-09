const astertiks = "*❋*";

export default {
  name: 'workshop',
	title: 'Workshop',
  type: 'document',
  icon: () => '🔨',
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
      name: 'simpleCtaSection',
      type: 'simpleCtaSection',
      title: 'Simple CTA Section',
      group: 'simpleCtaSection',
    },
    {
      name: 'process_Heading',
      type: 'markdown',
      title: 'Process Heading',
      group: 'process'
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
      group: 'process'
    },
    {
      name: 'why_Heading',
      type: 'markdown',
      title: 'Why Heading',
      group: 'why'
    },
    {
      name: 'why_Paragraph',
      type: 'markdown',
      title: 'Why Paragraph',
      group: 'why'
    },
    {
      name: 'why_SecondParagraph',
      type: 'markdown',
      title: 'Why Second Paragraph',
      group: 'why'
    },
    {
      name: 'why_ThirdParagraph',
      type: 'markdown',
      title: 'Why Third Paragraph',
      group: 'why'
    },
    {
      name: 'why_FourthParagraph',
      type: 'markdown',
      title: 'Why Fourth Paragraph',
      group: 'why'
    },
    {
      name: 'why_Cta',
      type: 'cta',
      title: 'Why Cta',
      group: 'why'
    },
    {
      name: 'document_Heading',
      type: 'markdown',
      title: 'Document Heading',
      group: 'document'
    },
    {
      name: 'document_Paragraph',
      type: 'markdown',
      title: 'Document Paragraph',
      group: 'document'
    },
    {
      name: 'document_Paragraph2',
      type: 'markdown',
      title: 'Document Paragraph Second',
      group: 'document'
    },
    {
      name: 'document_Images',
      type: 'array',
      of: [
        {
          type: 'image'
        }
      ],
      title: 'Document Images',
      group: 'document'
    },
    {
      name: 'document_SimpleCtaSection',
      type: 'simpleCtaSection',
      group: 'document'
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
      name: 'simpleCtaSection',
      title: 'Simple CTA Section',
    },
    {
      name: 'process',
      title: 'Process',
    },
    {
      name: 'why',
      title: 'Why',
    },
    {
      name: 'document',
      title: 'Document',
    },
    {
      name: 'scrollToNext',
      title: 'Scroll To Next',
    },
  ]
}