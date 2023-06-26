const astertiks = "*❋*";

export default {
  name: 'graphics-design',
	title: '┌ Graphics & Design',
  type: 'document',
  icon: () => '🖌️',
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
      name: 'audit_Paragraph',
      type: 'markdown',
      title: 'Audit Paragraph',
      group: 'audit',
    },
    {
      name: 'audit_Paragraph2',
      type: 'markdown',
      title: 'Audit Second Paragraph',
      group: 'audit',
    },
    {
      name: 'audit_Paragraph3',
      type: 'markdown',
      title: 'Audit Third Paragraph',
      group: 'audit',
    },
    {
      name: 'audit_Cta',
      type: 'cta',
      title: 'Audit Cta',
      group: 'audit',
    },
    {
      name: 'audit_Img',
      type: 'image',
      title: 'Audit Image',
      group: 'audit',
    },
    {
      name: 'simpleCtaSection',
      type: 'simpleCtaSection',
      title: 'Simple CTA Section',
      group: 'simpleCtaSection',
    },
    {
      name: 'digital_Heading',
      type: 'markdown',
      title: 'Digital Heading',
      group: 'digital',
    },
    {
      name: 'digital_Paragraph',
      type: 'markdown',
      title: 'Digital Paragraph',
      group: 'digital',
    },
    {
      name: 'digital_Paragraph2',
      type: 'markdown',
      title: 'Digital Second Paragraph',
      group: 'digital',
    },
    {
      name: 'digital_List',
      type: 'array',
      of: [
        { type: 'string' }
      ],
      title: 'Digital List',
      group: 'digital',
    },
    {
      name: 'simpleCtaSection2',
      type: 'simpleCtaSection',
      title: 'Second Simple CTA Section',
      group: 'simpleCtaSection2',
    },
    {
      name: 'phisical_Heading',
      type: 'markdown',
      title: 'Phisical Heading',
      group: 'phisical',
    },
    {
      name: 'phisical_Paragraph',
      type: 'markdown',
      title: 'Phisical Paragraph',
      group: 'phisical',
    },
    {
      name: 'phisical_Paragraph2',
      type: 'markdown',
      title: 'Phisical Second Paragraph',
      group: 'phisical',
    },
    {
      name: 'phisical_List',
      type: 'array',
      of: [
        { type: 'string' }
      ],
      title: 'Phisical List',
      group: 'phisical',
    },
    {
      name: 'simpleCtaSection3',
      type: 'simpleCtaSection',
      title: 'Second Simple CTA Section',
      group: 'simpleCtaSection3',
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
      name: 'audit',
      title: 'Audit',
    },
    {
      name: 'simpleCtaSection',
      title: 'Simple CTA Section',
    },
    {
      name: 'digital',
      title: 'Digital Product',
    },
    {
      name: 'simpleCtaSection2',
      title: 'Second Simple CTA Section',
    },
    {
      name: 'phisical',
      title: 'Phisical Product',
    },
    {
      name: 'simpleCtaSection3',
      title: 'Third Simple CTA Section',
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