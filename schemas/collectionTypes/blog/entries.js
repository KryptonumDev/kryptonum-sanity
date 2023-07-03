import { removeMarkdown } from '../../../utils/functions';

export default {
  name: 'blog_entries',
	title: 'Blog Wpisy',
  type: 'document',
  icon: () => '✍🏼',
  fields: [
    {
      name: 'title',
      type: 'markdown',
      title: 'Title',
      group: 'content'
    },
    {
      name: 'slug',
      type: 'slug',
      title: 'Slug',
      options: {
        source: 'title'
      },
      group: 'content'
    },
    {
      name: 'subtitle',
      type: 'markdown',
      title: 'Subtitle',
      group: 'content'
    },
    {
      name: 'img',
      type: 'image',
      title: 'Image',
      group: 'content'
    },
    {
      name: 'categories',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{ type: 'blog_categories' }],
          options: { disableNew: true },
        }
      ],
      title: 'Categories',
      group: 'content'
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
      title: 'Author',
      group: 'content'
    },
    {
      name: 'content',
      type: 'portableText',
      title: 'Content',
      group: 'content'
    },
    {
      name: 'seo',
      type: 'seo',
      title: 'SEO',
      group: 'seo'
    }
  ],
  groups: [
    {
      name: 'content',
      title: 'Content',
    },
    {
      name: 'seo',
      title: 'SEO',
    },
  ],
  preview: {
    select: {
      title: 'title',
      media: 'img'
    },
    prepare({ title, media }) {
      return {
        title: removeMarkdown(title),
        media,
      };
    }
  }
}