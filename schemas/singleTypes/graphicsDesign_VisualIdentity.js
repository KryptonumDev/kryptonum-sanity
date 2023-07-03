const astertiks = "*❋*";

export default {
  name: 'visual-identity',
	title: '├ Identyfikacja wizualna i branding',
  type: 'document',
  icon: () => '👁️',
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
      name: 'brandbook_Heading',
      type: 'markdown',
      title: 'Brandbook Heading',
      group: 'brandbook',
    },
    {
      name: 'brandbook_Paragraph',
      type: 'markdown',
      title: 'Brandbook Paragraph',
      group: 'brandbook',
    },
    {
      name: 'brandbook_Standout',
      type: 'markdown',
      title: 'Brandbook Standout',
      group: 'brandbook',
    },
    {
      name: 'brandbook_Img',
      type: 'image',
      title: 'Brandbook Image',
      group: 'brandbook',
    },
    {
      name: 'primaryBrandbook_Heading',
      type: 'markdown',
      title: 'Primary Brandbook Heading',
      group: 'brandbookTypes',
    },
    {
      name: 'primaryBrandbook_Paragraph',
      type: 'markdown',
      title: 'Primary Brandbook Paragraph',
      group: 'brandbookTypes',
    },
    {
      name: 'primaryBrandbook_List',
      type: 'array',
      of: [ { type: 'string' } ],
      title: 'Primary Brandbook List',
      group: 'brandbookTypes',
    },
    {
      name: 'extendedBrandbook_Heading',
      type: 'markdown',
      title: 'Extended Brandbook Heading',
      group: 'brandbookTypes',
    },
    {
      name: 'extendedBrandbook_Paragraph',
      type: 'markdown',
      title: 'Extended Brandbook Paragraph',
      group: 'brandbookTypes',
    },
    {
      name: 'extendedBrandbook_Annotation',
      type: 'markdown',
      title: 'Extended Brandbook Annotation',
      group: 'brandbookTypes',
    },
    {
      name: 'extendedBrandbook_List',
      type: 'array',
      of: [ { type: 'string' } ],
      title: 'Extended Brandbook List',
      group: 'brandbookTypes',
    },
    {
      name: 'quickForm',
      type: 'quickForm',
      title: 'Quick Form',
      group: 'quickForm',
    },
    {
      name: 'who_Heading',
      type: 'markdown',
      title: 'Who Heading',
      group: 'who',
    },
    {
      name: 'who_List',
      type: 'array',
      of: [
        { type: 'string' }
      ],
      title: 'Who List',
      group: 'who',
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
      name: 'simpleCtaSection',
      title: 'Simple CTA Section',
    },
    {
      name: 'brandbook',
      title: 'Brandbook',
    },
    {
      name: 'brandbookTypes',
      title: 'Brandbook Types',
    },
    {
      name: 'quickForm',
      title: 'Quick Form',
    },
    {
      name: 'who',
      title: 'Who',
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
    {
      name: 'seo',
      title: 'SEO',
    },
  ]
}