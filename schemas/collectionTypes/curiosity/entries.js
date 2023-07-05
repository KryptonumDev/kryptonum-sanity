import { removeMarkdown } from "../../../utils/functions";

export default {
  name: 'curiosity_entries',
	title: 'Ciekawostki wpisy',
  type: 'document',
  icon: () => '😲',
  fields: [
    {
      name: 'title',
      type: 'markdown',
      title: 'Title',
      group: 'hero'
    },
    {
      name: 'slug',
      type: 'slug',
      title: 'Slug',
      options: {
        source: 'title'
      },
      group: 'hero'
    },
    {
      name: 'subtitle',
      type: 'markdown',
      title: 'Subtitle',
      group: 'hero'
    },
    {
      name: 'img',
      type: 'image',
      title: 'Image',
      group: 'hero'
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
      group: 'hero'
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
      title: 'Categories',
      group: 'hero'
    },
    {
      name: 'content',
      type: 'array',
      of: [
        { type: 'curiosity_KeyElements' },
        { type: 'standout' },
        { type: 'curiosity_Highlight' },
        { type: 'curiosity_Note' },
        { type: 'curiosity_Tiles' },
        { type: 'curiosity_LargeList' },
      ],
      title: 'Content',
      group: 'content'
    },
    {
      name: 'share',
      type: 'curiosity_Share',
      title: 'Share',
      group: 'share',
    },
    {
      name: 'sources',
      type: 'curiosity_Sources',
      title: 'Sources',
      group: 'sources',
    },
    {
      name: 'latestCuriosities_Heading',
      type: 'markdown',
      title: 'Latest Curiosities Heading',
      group: 'latestCuriosities',
      initialValue: 'Masz energię na kolejne szkolenie? **Łap**!'
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
      name: 'hero',
      title: 'Hero',
    },
    {
      name: 'content',
      title: 'Content',
    },
    {
      name: 'share',
      title: 'Share',
    },
    {
      name: 'sources',
      title: 'Sources',
    },
    {
      name: 'latestCuriosities',
      title: 'Latest Curiosities',
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