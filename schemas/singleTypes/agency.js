const astertiks = "*❋*";

export default {
  name: 'agency',
	title: 'Agency Care',
  type: 'document',
  icon: () => '🧘🏻',
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
      name: 'services_Heading',
      type: 'markdown',
      title: 'Services Heading',
      group: 'services',
    },
    {
      name: 'services_Paragraph',
      type: 'markdown',
      title: 'Services Paragraph',
      group: 'services',
    },
    {
      name: 'services_Paragraph2',
      type: 'markdown',
      title: 'Services Second Paragraph',
      group: 'services',
    },
    {
      name: 'services_Title',
      type: 'markdown',
      title: 'Services Title',
      group: 'services',
    },
    {
      name: 'services_List',
      type: 'array',
      of: [
        {
          type: 'titleAndDescription',
        }
      ],
      title: 'Services List',
      group: 'services',
    },
    {
      name: 'audit_Heading',
      type: 'markdown',
      title: 'Audit Heading',
      group: 'audit'
    },
    {
      name: 'audit_Paragraph',
      type: 'markdown',
      title: 'Audit Paragraph',
      group: 'audit'
    },
    {
      name: 'audit_Paragraph2',
      type: 'markdown',
      title: 'Audit Second Paragraph',
      group: 'audit'
    },
    {
      name: 'audit_Title',
      type: 'markdown',
      title: 'Audit Title',
      group: 'audit'
    },
    {
      name: 'audit_List',
      type: 'array',
      of: [
        {
          type: 'string'
        }
      ],
      title: 'Audit List',
      group: 'audit'
    },
    {
      name: 'audit_Paragraph3',
      type: 'markdown',
      title: 'Audit Third Paragraph',
      group: 'audit'
    },
    {
      name: 'audit_Paragraph4',
      type: 'markdown',
      title: 'Audit Fourth Paragraph',
      group: 'audit'
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
      name: 'ctaSection',
      type: 'ctaSection',
      title: 'Call To Action Section',
      group: 'ctaSection',
    },
    {
      name: 'protection_Heading',
      type: 'markdown',
      title: 'Protection Heading',
      group: 'protection',
    },
    {
      name: 'protection_Paragraph',
      type: 'markdown',
      title: 'Protection Paragraph',
      group: 'protection',
    },
    {
      name: 'protection_Paragraph2',
      type: 'markdown',
      title: 'Protection Second Paragraph',
      group: 'protection',
    },
    {
      name: 'protection_Paragraph3',
      type: 'markdown',
      title: 'Protection Third Paragraph',
      group: 'protection',
    },
    {
      name: 'protection_List',
      type: 'array',
      of: [
        {
          type: 'string'
        },
      ],
      title: 'Protection List',
      group: 'protection',
    },
    {
      name: 'copy_Heading',
      type: 'markdown',
      title: 'Copy Heading',
      group: 'copy',
    },
    {
      name: 'copy_Paragraph',
      type: 'markdown',
      title: 'Copy Paragraph',
      group: 'copy',
    },
    {
      name: 'copy_Paragraph2',
      type: 'markdown',
      title: 'Copy Second Paragraph',
      group: 'copy',
    },
    {
      name: 'copy_Paragraph3',
      type: 'markdown',
      title: 'Copy Third Paragraph',
      group: 'copy',
    },
    {
      name: 'copy_Img',
      type: 'image',
      title: 'Copy Image',
      group: 'copy',
    },
    {
      name: 'copy_Cta',
      type: 'cta',
      title: 'Copy Cta',
      group: 'copy',
    },
    {
      name: 'copy_Headline',
      type: 'markdown',
      title: 'Copy Headline',
      group: 'copy',
    },
    {
      name: 'copy_List',
      type: 'array',
      of: [
        {
          type: 'titleAndImage',
        }
      ],
      title: 'Copy List',
      group: 'copy',
    },
    {
      name: 'secondSimpleCtaSection',
      type: 'simpleCtaSection',
      title: 'Second Simple CTA Section',
      group: 'secondSimpleCtaSection',
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
      name: 'services',
      title: 'Services',
    },
    {
      name: 'audit',
      title: 'Audit',
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
      name: 'ctaSection',
      title: 'Call To Action',
    },
    {
      name: 'protection',
      title: 'Protection',
    },
    {
      name: 'copy',
      title: 'Copy',
    },
    {
      name: 'secondSimpleCtaSection',
      title: 'Second Simple CTA Section',
    },
    {
      name: 'scrollToNext',
      title: 'Scroll To Next',
    },
  ]
}