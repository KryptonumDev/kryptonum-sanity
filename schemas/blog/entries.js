export default {
  name: 'blog_entries',
	title: 'Blog Entries',
  type: 'document',
  fields: [
    {
      name: 'title',
      type: 'string',
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
      name: 'thumbnail',
      type: 'img',
      title: 'Thumbnail',
    },
    {
      name: 'categories',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'blog_categories' }] }],
      title: 'Categories'
    },
    {
      name: 'author',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'team' }] }],
      title: 'Author'
    },
  ],
  preview: {
    select: {
      title: 'title',
      media: 'thumbnail.source'
    }
  }
}