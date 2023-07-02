export default {
  name: "unorderedListArray",
  title: "Unordered List Array",
  type: "object",
  fields: [
    {
      type: 'array',
      name: 'array',
      of: [
        {
          type: 'unorderedList'
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