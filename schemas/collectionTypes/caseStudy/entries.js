export default {
  name: 'caseStudy_entries',
	title: 'Case Study Entries',
  type: 'document',
  icon: () => '📂',
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Name'
    },
    {
      name: 'slug',
      type: 'slug',
      title: 'Slug',
      options: {
        source: 'name'
      }
    },
    {
      name: 'heading',
      type: 'markdown',
      title: 'Heading',
    },
    {
      name: 'categories',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{ type: 'caseStudy_categories' }],
          options: { disableNew: true },
        }
      ],
      title: 'Categories',
    },
    {
      name: 'img',
      type: 'image',
      title: 'Image',
    },
  ],
  preview: {
    select: {
      title: 'name',
      media: 'img'
    }
  }
}