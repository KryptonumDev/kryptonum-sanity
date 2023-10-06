export default {
  name: "ImageShowcase",
  title: "Image Showcase",
  type: "object",
  fields: [
    {
      name: 'images',
      type: 'array',
      of: [
        { type: 'image' }
      ],
      title: 'Images',
      validation: Rule => Rule.required().min(2).max(2)
    },
    {
      name: 'cta',
      type: 'cta',
      title: 'CTA (optional)',
    },
  ],
  preview: {
    select: {
      media: 'images',
      cta: 'cta',
    },
    prepare({ media, cta }) {
      return {
        title: `[Image Showcase] ${media.length} photos`,
        subtitle: cta.text ? `'${cta.text}' linked to '${cta.href}'` : '',
        media: media[0]
      };
    }
  }
}