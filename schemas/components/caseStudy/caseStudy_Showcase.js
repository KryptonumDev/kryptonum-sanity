export default {
  name: "caseStudy_Showcase",
  title: "Case Study Showcase",
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
  ],
  preview: {
    select: {
      media: 'images',
    },
    prepare({ media }) {
      return {
        title: `[Showcase] ${media.length} photos`,
        media: media[0]
      };
    }
  }
}