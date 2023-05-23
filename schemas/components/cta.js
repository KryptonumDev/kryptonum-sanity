export default {
  name: "cta",
  title: "Call To Action",
  type: "object",
  fields: [
    {
      name: 'theme',
      type: 'string',
      title: 'Link Text',
      options: {
        list: [
          { title: 'primary', value: 'primary' },
          { title: 'secondary', value: 'secondary' }
        ],
        layout: 'radio'
      },
      initialValue: 'primary'
    },
    {
      title: 'Text',
      name: 'text',
      type: 'string',
    },
    {
      title: 'Link',
      name: 'href',
      type: 'string',
      validation: Rule =>
        Rule.custom(value => {
          if (!value.startsWith('/') && !value.startsWith('https://')) {
            return 'Invalid URL format. Please provide a relative URL (starting with "/") or an absolute URL (with "https").';
          }
          return true;
        }),
    }
  ]
}