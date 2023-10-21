export default {
  name: "SimpleGridImage2Columns",
  title: "Simple Grid Image - 2 columns",
  type: "object",
  fields: [
    {
      name: 'list',
      type: 'array',
      of: [
        {
          type: 'image'
        }
      ]
    },
  ],
  preview: {
    select: {
      list: 'list',
    },
    prepare({ list }) {
      return {
        title: `[Simple Grid Image - 2 columns] ${list.length} images`,
        media: list[0],
      };
    }
  }
}