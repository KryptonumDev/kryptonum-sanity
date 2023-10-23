export default {
  name: "DetailedGrid",
  title: "DetailedGrid",
  type: "object",
  fields: [
    {
      name: 'blocks',
      type: 'array',
      of: [
        {
          type: 'titleDescriptionAndImg',
        }
      ],
      title: 'Blocks',
      validation: Rule => Rule.required(),
    },
  ],
  preview: {
    select: {
      title: 'blocks',
    },
    prepare({ title }) {
      return {
        title: `[DetailedGrid] - ${title.length} blocks`,
      };
    }
  }
}