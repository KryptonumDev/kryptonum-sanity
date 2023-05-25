export default {
  name: 'blog_entries',
	title: 'Blog Entries',
  type: 'document',
  icon: () => '✍🏼',
  fields: [
    {
      name: 'title',
      type: 'markdown',
      title: 'Title'
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
      title: 'Subtitle'
    },
    {
      name: 'cover',
      type: 'img',
      title: 'Cover',
    },
    {
      name: 'categories',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{ type: 'blog_categories' }],
        }
      ],
      title: 'Categories'
    },
    {
      name: 'author',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{ type: 'team' }],
          options: { disableNew: true },
        }
      ],
      title: 'Author'
    },
    {
      name: 'content',
      type: 'array',
      of: [
        {
          type: 'block',
        }
      ],
      title: 'Content'
    }
  ],
  preview: {
    select: {
      title: 'title',
      media: 'cover.source'
    }
  }
}