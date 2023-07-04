export default {
  name: "orderedListArray",
  title: "Ordered List Array",
  type: "object",
  fields: [
    {
      name: 'paragraph',
      type: 'markdown',
      title: 'Paragraph'
    },
    {
      type: 'array',
      name: 'array',
      of: [
        {
          type: 'orderedList'
        }
      ]
    }
  ],
  preview: {
    select: {
      title: 'array',
    },
    prepare({ title }) {
      return {
        title: title.map(item => item.title).join(', '),
      };
    }
  }
}