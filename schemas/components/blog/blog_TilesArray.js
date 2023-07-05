export default {
  name: "blog_TilesArray",
  title: "Blog Tiles Array",
  type: "object",
  fields: [
    {
      name: 'array',
      type: 'array',
      of: [
        {
          type: 'blog_Tiles'
        }
      ]
    },
  ],
  preview: {
    select: {
      title: 'array',
    },
    prepare({ title }) {
      return {
        title: title.map(item => item.heading).join(', '),
      };
    }
  }
}