export default {
  name: "linkWithImg",
  title: "Link with Image",
  type: "object",
  fields: [
    {
      name: 'text',
      type: 'string',
      title: 'Text',
    },
    {
      name: 'href',
      type: 'string',
      validation: Rule =>
      Rule.custom(value => {
        if(!value.startsWith('https://')) {
          return ' Please provide an absolute URL (with "https").';
        }
        return true;
      }),
      title: 'Link',
    },
    {
      name: 'img',
      type: 'image',
      title: 'Image',
    }
  ]
}