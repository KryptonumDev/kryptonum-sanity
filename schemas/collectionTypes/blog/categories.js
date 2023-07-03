export default {
  name: 'blog_categories',
	title: 'Blog Kategorie',
  type: 'document',
  icon: () => '📑',
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
  ],
}