import { removeMarkdown } from "../../utils/functions";

export default {
  name: "TilesComponent",
  title: "Tiles Component",
  type: "object",
  fields: [
    {
      name: 'heading',
      type: 'markdown',
      title: 'Heading',
    },
    {
      name: 'list',
      type: 'array',
      of: [
        {
          type: 'TilesComponent_List'
        }
      ],
      title: 'List',
    },
  ],
  preview: {
    select: {
      title: 'heading',
      subtitle: 'list'
    },
    prepare({ title, subtitle }) {
      return {
        title: `[TilesComponent] ${removeMarkdown(title)}`,
        subtitle: `${subtitle.length} items`,
      };
    }
  }
}

export const TilesComponent_List = {
  name: "TilesComponent_List",
  title: "List",
  type: "object",
  fields: [
    {
      name: 'isIcon',
      type: 'boolean',
      initialValue: false,
    },
    {
      name: 'icon',
      type: 'image',
      hidden: ({ parent }) => !parent?.isIcon
    },
    {
      name: 'title',
      type: 'markdown',
      hidden: ({ parent }) => parent?.isIcon
    },
    {
      name: 'description',
      type: 'markdown',
      validation: Rule => Rule.required()
    },
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'description',
      isIcon: 'isIcon',
      media: 'icon'
    },
    prepare({ isIcon, title, subtitle, media }) {
      return {
        title: removeMarkdown(title) || removeMarkdown(subtitle),
        subtitle: title ? removeMarkdown(subtitle) : '',
        media: isIcon ? media : '',
      };
    }
  }
}