export default {
  name: "titleDescriptionAndImg",
  title: "Title, Description & Image",
  type: "object",
  fields: [
    {
      name: 'title',
      type: 'markdown',
    },
    {
      name: 'description',
      type: 'markdown',
    },
    {
      name: 'img',
      title: 'Image',
      type: 'image',
    },
  ],
  preview: {
    select: {
      title: 'title',
    }
  }
}