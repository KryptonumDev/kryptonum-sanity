export default {
  name: "titleAndDescription",
  title: "Title And Description",
  type: "object",
  fields: [
    {
      name: 'title',
      type: 'markdown',
      fieldset: 'content',
    },
    {
      name: 'description',
      type: 'text',
      rows: 5,
      fieldset: 'content',
    },
  ],
  fieldsets: [
    {
      name: 'content',
      title: 'Content',
      options: { columns: 2 },
    },
  ],
  preview: {
    select: {
      title: 'title',
    }
  }
}