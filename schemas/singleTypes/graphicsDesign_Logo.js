const astertiks = "*❋*";

export default {
  name: 'graphicsDesign_Logo',
	title: '└ Logo',
  type: 'document',
  icon: () => '🖼️',
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
      name: 'showcase_Heading',
      type: 'markdown',
      title: 'Showcase Heading',
      group: 'showcase',
    },
    {
      name: 'showcase_Paragraph',
      type: 'markdown',
      title: 'Showcase Paragraph',
      group: 'showcase',
    },
    {
      name: 'showcase_List',
      type: 'array',
      of: [ { type: 'titleAndDescription' } ],
      title: 'Showcase List',
      group: 'showcase',
    },
    {
      name: 'showcase_SummaryLeft',
      type: 'string',
      title: 'Showcase Summary Left',
      group: 'showcase',
    },
    {
      name: 'showcase_SummaryRight',
      type: 'string',
      title: 'Showcase Summary Right',
      group: 'showcase',
    },
    {
      name: 'quickForm',
      type: 'quickForm',
      title: 'Quick Form',
      group: 'quickForm',
    },
    {
      name: 'process_Heading',
      type: 'markdown',
      title: 'Process Heading',
      group: 'process',
    },
    {
      name: 'process_Paragraph',
      type: 'markdown',
      title: 'Process Paragraph',
      group: 'process',
    },
    {
      name: 'process_Title',
      type: 'markdown',
      title: 'Process Title',
      group: 'process',
    },
    {
      name: 'process_List',
      type: 'array',
      of: [ { type: 'titleAndDescription' } ],
      title: 'Process List',
      group: 'process',
    },
    {
      name: 'caseStudies_Heading',
      type: 'markdown',
      title: 'Case Studies Heading',
      group: 'caseStudies',
    },
    {
      name: 'ctaSection',
      type: 'ctaSection',
      title: 'CTA Section',
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
      name: 'showcase',
      title: 'Showcase',
    },
    {
      name: 'quickForm',
      title: 'Quick Form',
    },
    {
      name: 'process',
      title: 'Process',
    },
    {
      name: 'caseStudies',
      title: 'Case Studies',
    },
    {
      name: 'ctaSection',
      title: 'CTA Section',
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