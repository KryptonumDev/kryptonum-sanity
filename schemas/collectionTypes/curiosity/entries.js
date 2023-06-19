export default {
  name: 'curiosity_entries',
	title: 'Curiosity Entries',
  type: 'document',
  icon: () => '😲',
  fields: [
    {
      name: 'title',
      type: 'markdown',
      title: 'Name'
    },
    {
      name: 'slug',
      type: 'slug',
      title: 'Slug',
      options: {
        source: 'title'
      }
    },
    {
      name: 'subtitle',
      type: 'markdown',
      title: 'Subtitle',
    },
    {
      name: 'img',
      type: 'image',
      title: 'Image',
    },
    {
      name: 'author',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{ type: 'teamMember' }],
          options: { disableNew: true },
        }
      ],
    },
    {
      name: 'categories',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{ type: 'curiosity_categories' }],
          options: { disableNew: true },
        }
      ],
      title: 'Categories'
    },
  ],
  preview: {
    select: {
      title: 'title',
      media: 'img'
    }
  }
}