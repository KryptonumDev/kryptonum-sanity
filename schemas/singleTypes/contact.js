export default {
  name: 'contact',
	title: 'Kontakt',
  type: 'document',
  icon: () => '📫',
  fields: [
    {
      name: 'hero_Heading',
      type: 'markdown',
      title: 'Hero Heading',
      group: 'hero',
    },
    {
      name: 'hero_Subheading',
      type: 'markdown',
      title: 'Hero Subheading',
      group: 'hero',
    },
    {
      name: 'hero_Contact',
      type: 'array',
      of: [
        { type: 'contactPerson' }
      ],
      title: 'Hero Contact',
      group: 'hero',
    },
    {
      name: 'contact_Email',
      type: 'markdown',
      title: 'Contact Email',
      group: 'contact',
    },
    {
      name: 'contact_Tel',
      type: 'markdown',
      title: 'Contact Phone',
      group: 'contact',
    },
    {
      name: 'contact_Address',
      type: 'markdown',
      title: 'Contact Address',
      group: 'contact',
    },
    {
      name: 'contact_Img',
      type: 'image',
      title: 'Contact Image',
      group: 'contact',
    },
    {
      name: 'pricing_Paragraph',
      type: 'markdown',
      title: 'Pricing Paragraph',
      group: 'pricing',
    },
    {
      name: 'pricing_Paragraph2',
      type: 'markdown',
      title: 'Pricing Second Paragraph',
      group: 'pricing',
    },
    {
      name: 'pricing_Cta',
      type: 'cta',
      title: 'Pricing CTA',
      group: 'pricing',
    },
    {
      name: 'helpDesk_Heading',
      type: 'markdown',
      title: 'Help Desk Heading',
      group: 'helpDesk',
    },
    {
      name: 'helpDesk_Subheading',
      type: 'markdown',
      title: 'Help Desk Subheading',
      group: 'helpDesk',
    },
    {
      name: 'helpDesk_Paragraph',
      type: 'markdown',
      title: 'Help Desk Paragraph',
      group: 'helpDesk',
    },
    {
      name: 'helpDesk_FormTitle',
      type: 'markdown',
      title: 'Help Desk Form Title',
      group: 'helpDesk',
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
      name: 'contact',
      title: 'Contact',
    },
    {
      name: 'pricing',
      title: 'Pricing',
    },
    {
      name: 'helpDesk',
      title: 'Help Desk',
    },
    {
      name: 'seo',
      title: 'SEO',
    },
  ]
}