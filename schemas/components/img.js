export default {
  name: "img",
  title: "Image",
  type: "object",
  fields: [
    {
      name: 'source',
      type: 'image',
      title: 'Source',
       options: {
        hotspot: true
      },
    },
    {
      title: 'Alternative Text',
      type: 'string',
      name: 'alt',
    },
    
  ]
}