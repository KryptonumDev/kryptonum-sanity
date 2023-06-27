export default {
  name: "link",
  title: "Link",
  type: "object",
  fields: [
    {
      name: 'text',
      title: 'Text',
      type: 'string',
    },
    {
      name: 'href',
      title: 'Link',
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