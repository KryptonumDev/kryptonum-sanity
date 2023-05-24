export default {
  name: 'footer',
	title: 'Footer',
  type: 'document',
  icon: () => '🦶',
  fields: [
    {
      name: 'officeCity',
      type: 'string',
      title: 'Office City',
      group: 'office',
    },
    {
      name: 'officeStreet',
      type: 'string',
      title: 'Office Street',
      group: 'office',
    },
    {
      name: 'contactName',
      type: 'string',
      title: 'Contact Name',
      group: 'contact',
    },
    {
      name: 'contactTel',
      type: 'string',
      title: 'Contact Tel',
      group: 'contact',
    },
    {
      name: 'contactEmail',
      type: 'string',
      title: 'Contact Email',
      group: 'contact',
    },
    {
      name: 'legalLinks',
      type: 'array',
      title: 'Legal Links',
      of: [{ type: 'link' }],
      group: 'links',
    },
    {
      name: 'socials',
      type: 'array',
      title: 'Social Media',
      of: [{ type: 'link' }],
      group: 'socials',
    }
  ],
  groups: [
    {
      name: 'office',
      title: 'Office',
    },
    {
      name: 'contact',
      title: 'Contact',
    },
    {
      name: 'links',
      title: 'Links',
    },
    {
      name: 'socials',
      title: 'Socials',
    },
  ],
}