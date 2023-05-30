export default {
  name: "ctaSection",
  title: "CTA Section",
  type: "object",
  fields: [
    {
      name: 'heading',
      type: 'markdown',
      title: 'Heading',
    },
    {
      name: 'cta',
      type: 'cta',
      title: 'Button',
    },
    {
      name: 'img',
      type: 'image',
      title: 'Image',
    },
  ],
}