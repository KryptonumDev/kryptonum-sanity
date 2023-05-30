const astertiks = "*❋*";

export default {
  name: 'webDevelopment_Pwa',
	title: 'Progressive Web Apps',
  type: 'document',
  icon: () => '📱',
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
      name: 'scrollToNext',
      type: 'scrollToNext',
      title: 'Scroll To Next Section',
      group: 'scrollToNext',
    },
    {
      name: 'talk_Heading',
      type: 'markdown',
      title: 'Talk Section Heading',
      group: 'talkSection',
    },
    {
      name: 'talk_Cta',
      type: 'cta',
      title: 'Talk Section Cta',
      group: 'talkSection',
    },
    {
      name: 'ctaSection',
      type: 'ctaSection',
      title: 'Call To Action Section',
      group: 'ctaSection',
    },
  ],
  groups: [
    {
      name: 'hero',
      title: 'Hero',
    },
    {
      name: 'talkSection',
      title: 'Talk Section',
    },
    {
      name: 'ctaSection',
      title: 'Call To Action',
    },
    {
      name: 'scrollToNext',
      title: 'Scroll To Next',
    },
  ]
}