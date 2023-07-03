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
    {
      name: 'meaty_Heading',
      type: 'markdown',
      title: 'Meaty Heading',
      group: 'meaty',
      initialValue: 'Samo **gęste**'
    },
    {
      name: 'meaty_List',
      type: 'array',
      of: [
        {
          type: 'markdown'
        }
      ],
      title: 'Meaty List',
      group: 'meaty'
    },
    {
      name: 'standout_Heading',
      type: 'markdown',
      title: 'Standout Heading',
      group: 'standout',
    },
    {
      name: 'standout_Paragraph',
      type: 'markdown',
      title: 'Standout Paragraph',
      group: 'standout'
    },
    {
      name: 'showcase_Heading',
      type: 'markdown',
      title: 'Showcase Heading',
      group: 'showcase',
      initialValue: '**Przykład** wykorzystania'
    },
    {
      name: 'showcase_Img',
      type: 'image',
      title: 'Showcase Image',
      group: 'showcase',
    },
    {
      name: 'showcase_Paragraph',
      type: 'markdown',
      title: 'Showcase Paragraph',
      group: 'showcase',
    },
    {
      name: 'showcase_Paragraph2',
      type: 'markdown',
      title: 'Showcase Second Paragraph',
      group: 'showcase',
    },
    {
      name: 'share_Heading',
      type: 'markdown',
      title: 'Share Heading',
      group: 'share',
      initialValue: '**Udostępnij** artykuł'
    },
    {
      name: 'share_Img',
      type: 'image',
      title: 'Share Image',
      group: 'share',
      initialValue: {
        asset: {
          _ref: 'image-0c5df92be748428b48f09c0ad04ca8e7bc9400e6-556x447.webp',
        }
      }
    },
    {
      name: 'sources_Heading',
      type: 'markdown',
      title: 'Sources Heading',
      group: 'sources',
      initialValue: '**Źródła ~**'
    },
    {
      name: 'sources_List',
      type: 'array',
      of: [
        {
          type: 'link'
        },
      ],
      title: 'Sources List',
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
      name: 'meaty',
      title: 'Meaty',
    },
    {
      name: 'standout',
      title: 'Standout',
    },
    {
      name: 'showcase',
      title: 'Showcase',
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