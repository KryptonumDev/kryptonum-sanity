export default {
  name: 'footer',
	title: 'Footer',
  type: 'document',
  fields: [
    {
      name: 'officeCity',
      type: 'string',
      title: 'Office City'
    },
    {
      name: 'officeStreet',
      type: 'string',
      title: 'Office Street'
    },
    {
      name: 'contactName',
      type: 'string',
      title: 'Contact Name'
    },
    {
      name: 'contactTel',
      type: 'string',
      title: 'Contact Tel'
    },
    {
      name: 'contactEmail',
      type: 'string',
      title: 'Contact Email'
    },
    {
      name: 'legalLinks',
      type: 'array',
      title: 'Legal Links',
      of: [{ type: 'link' }]
    },
    {
      name: 'socials',
      type: 'array',
      title: 'Social Media',
      of: [{ type: 'link' }]
    }
  ],
}