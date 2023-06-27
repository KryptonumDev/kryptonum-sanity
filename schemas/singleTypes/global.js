export default {
  name: 'global',
	title: 'Global',
  type: 'document',
  icon: () => '🌍',
  fields: [
    {
      name: 'footer_OfficeCity',
      type: 'string',
      title: 'Footer Office City',
      group: 'footer',
    },
    {
      name: 'footer_OfficeStreet',
      type: 'string',
      title: 'Footer Office Street',
      group: 'footer',
    },
    {
      name: 'footer_ContactName',
      type: 'string',
      title: 'Footer Contact Name',
      group: 'footer',
    },
    {
      name: 'footer_ContactTel',
      type: 'string',
      title: 'Footer Contact Tel',
      group: 'footer',
    },
    {
      name: 'footer_ContactEmail',
      type: 'string',
      title: 'Footer Contact Email',
      group: 'footer',
    },
    {
      name: 'footer_LegalLinks',
      type: 'array',
      title: 'Foote Legal Links',
      of: [{ type: 'link' }],
      group: 'footer',
    },
    {
      name: 'footer_Socials',
      type: 'array',
      title: 'Footer Social Media',
      of: [{ type: 'link' }],
      group: 'footer',
    },
    {
      name: 'quickForm_Paragraph',
      type: 'string',
      title: 'Quick Form Paragraph',
      group: 'quickForm',
    },
    {
      name: 'quickForm_Person',
      type: 'reference',
      to: [{ type: 'teamMember' }],
      options: { disableNew: true },
      title: 'Quick Form Person',
      group: 'quickForm',
    },
    {
      name: 'faq',
      type: 'faq',
      title: 'FAQ',
      group: 'faq',
    },
    {
      name: 'globalSeo',
      type: 'globalSeo',
      title: 'Global SEO',
      group: 'globalSeo',
    },
  ],
  groups: [
    {
      name: 'footer',
      title: '🦶 Footer',
    },
    {
      name: 'quickForm',
      title: 'Quick Form',
    },
    {
      name: 'faq',
      title: 'FAQ',
    },
    {
      name: 'globalSeo',
      title: 'Global SEO',
    },
  ],
}