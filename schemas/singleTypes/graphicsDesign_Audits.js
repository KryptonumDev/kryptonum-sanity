const astertiks = "*❋*";

export default {
  name: 'audits',
	title: '├ Audyty',
  type: 'document',
  icon: () => '✅',
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
      name: 'digitalAudit_Heading',
      type: 'markdown',
      title: 'Digital Audit Heading',
      group: 'digitalAudit',
    },
    {
      name: 'digitalAudit_Headline',
      type: 'markdown',
      title: 'Digital Audit Headline',
      group: 'digitalAudit',
    },
    {
      name: 'digitalAudit_Paragraph',
      type: 'markdown',
      title: 'Digital Audit Paragraph',
      group: 'digitalAudit',
    },
    {
      name: 'digitalAudit_Paragraph2',
      type: 'markdown',
      title: 'Digital Audit Second Paragraph',
      group: 'digitalAudit',
    },
    {
      name: 'digitalAudit_ListHeading',
      type: 'markdown',
      title: 'Digital Audit List Heading',
      group: 'digitalAudit',
    },
    {
      name: 'digitalAudit_List',
      type: 'array',
      of: [ { type: 'string' } ],
      title: 'Digital Audit List',
      group: 'digitalAudit',
    },
    {
      name: 'uxAudit_Heading',
      type: 'markdown',
      title: 'UX Audit Heading',
      group: 'uxAudit',
    },
    {
      name: 'uxAudit_Headline',
      type: 'markdown',
      title: 'UX Audit Headline',
      group: 'uxAudit',
    },
    {
      name: 'uxAudit_Title',
      type: 'markdown',
      title: 'UX Audit Title',
      group: 'uxAudit',
    },
    {
      name: 'uxAudit_Paragraph',
      type: 'markdown',
      title: 'UX Audit Paragraph',
      group: 'uxAudit',
    },
    {
      name: 'uxAudit_Paragraph2',
      type: 'markdown',
      title: 'UX Audit Second Paragraph',
      group: 'uxAudit',
    },
    {
      name: 'uxAudit_Question',
      type: 'markdown',
      title: 'UX Audit Question',
      group: 'uxAudit',
    },
    {
      name: 'uxAudit_Answer',
      type: 'markdown',
      title: 'UX Audit Answer',
      group: 'uxAudit',
    },
    {
      name: 'uxAudit_When',
      type: 'markdown',
      title: 'UX Audit When',
      group: 'uxAudit',
    },
    {
      name: 'uxAudit_WhenList',
      type: 'array',
      of: [ { type: 'string' } ],
      title: 'UX Audit WhenList',
      group: 'uxAudit',
    },
    {
      name: 'uxAudit_ListHeading',
      type: 'markdown',
      title: 'UX Audit List Heading',
      group: 'uxAudit',
    },
    {
      name: 'uxAudit_List',
      type: 'array',
      of: [ { type: 'string' } ],
      title: 'UX Audit List',
      group: 'uxAudit',
    },
    {
      name: 'quickForm',
      type: 'quickForm',
      title: 'Quick Form',
      group: 'quickForm',
    },
    {
      name: 'comboAudit_Heading',
      type: 'markdown',
      title: 'Combo Audit Heading',
      group: 'comboAudit',
    },
    {
      name: 'comboAudit_Paragraph',
      type: 'markdown',
      title: 'Combo Audit Paragraph',
      group: 'comboAudit',
    },
    {
      name: 'comboAudit_Paragraph2',
      type: 'markdown',
      title: 'Combo Audit Second Paragraph',
      group: 'comboAudit',
    },
    {
      name: 'comboAudit_ListHeading',
      type: 'markdown',
      title: 'Combo Audit List Heading',
      group: 'comboAudit',
    },
    {
      name: 'comboAudit_List',
      type: 'array',
      of: [ { type: 'string' } ],
      title: 'Combo Audit List',
      group: 'comboAudit',
    },
    {
      name: 'benefits_Heading',
      type: 'markdown',
      title: 'Benefits Heading',
      group: 'benefits',
    },
    {
      name: 'benefits_Paragraph',
      type: 'markdown',
      title: 'benefits Paragraph',
      group: 'benefits',
    },
    {
      name: 'benefits_Standout',
      type: 'markdown',
      title: 'benefits Standout',
      group: 'benefits',
    },
    {
      name: 'benefits_Img',
      type: 'image',
      title: 'benefits Image',
      group: 'benefits',
    },
    {
      name: 'caseStudies',
      type: 'CaseStudies',
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
      name: 'digitalAudit',
      title: 'Digital Audit',
    },
    {
      name: 'uxAudit',
      title: 'UX Audit',
    },
    {
      name: 'quickForm',
      title: 'Quick Form',
    },
    {
      name: 'comboAudit',
      title: 'Combo Audit',
    },
    {
      name: 'benefits',
      title: 'Benefits',
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