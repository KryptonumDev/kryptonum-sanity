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
      type: 'markdown',
      fieldset: 'content',
    },
    {
      name: 'href',
      title: 'Link (optional)',
      type: 'string',
      validation: Rule =>
        Rule.custom(value => {
          if (value && !value.startsWith('/') && !value.startsWith('https://')) {
            return 'Invalid URL format. Please provide a relative URL (starting with "/") or an absolute URL (with "https").';
          }
          return true;
        }),
      description: 'A URL, either relative or absolute (https://)',
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