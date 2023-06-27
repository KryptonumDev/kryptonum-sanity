import { removeMarkdown } from '../../../utils/functions';

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
      name: 'img',
      type: 'image',
      title: 'Image',
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
      title: 'Categories'
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
      title: 'Author'
    },
    {
      name: 'content',
      type: 'array',
      of: [
        {
          type: 'block',
          styles: [
            {title: 'Normal', value: 'normal'},
            {title: 'H2', value: 'h2'},
            {title: 'H3', value: 'h3'},
            {title: 'H4', value: 'h4'},
          ],
          marks: {
            decorators: [
              {title: 'Strong', value: 'strong'},
              {title: 'Emphasis', value: 'em'}
            ],
            annotations: [
              {
                name: 'link',
                type: 'object',
                title: 'link',
                fields: [
                  {
                    name: 'url',
                    type: 'url'
                  }
                ]
              },
            ],
          },
        },
        { type: 'image' },
      ],
      title: 'Content'
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