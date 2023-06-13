export default {
  name: "titleAndImage",
  title: "Title & Image",
  type: "object",
  fields: [
    {
      name: 'title',
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