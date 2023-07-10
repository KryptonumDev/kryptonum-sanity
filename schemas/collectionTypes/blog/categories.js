export default {
  name: 'blog_categories',
	title: 'Blog Kategorie',
  type: 'document',
  icon: () => '📑',
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Name',
      group: 'category'
    },
    {
      name: 'slug',
      type: 'slug',
      title: 'Slug',
      options: {
        source: 'name'
      },
      group: 'category'
    },
    {
      name: 'hero_Heading',
      type: 'markdown',
      title: 'Hero Heading',
      group: 'hero'
    },
    {
      name: 'hero_Paragraph',
      type: 'markdown',
      title: 'Hero Paragraph',
      group: 'hero',
    },
    {
      name: 'hero_Img',
      type: 'image',
      title: 'Hero Image',
      group: 'hero',
    },
    {
      name: 'seo',
      type: 'seo',
      title: 'SEO',
      group: 'seo',
    },
  ],
  groups: [
    {
      name: 'category',
      title: 'Category',
    },
    {
      name: 'hero',
      title: 'Hero',
    },
    {
      name: 'seo',
      title: 'SEO',
    },
  ]
}