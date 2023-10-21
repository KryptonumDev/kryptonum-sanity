export default {
  name: "SimpleGridList2Columns",
  title: "Simple Grid List - 2 columns",
  type: "object",
  fields: [
    {
      name: 'list',
      type: 'array',
      of: [
        {
          type: 'markdown'
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
        title: `[Simple Grid List - 2 columns] ${list.map(item => item).join(', ')}`,
      };
    }
  }
}