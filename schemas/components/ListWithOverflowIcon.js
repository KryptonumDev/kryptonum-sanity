import { removeMarkdown } from "../../utils/functions"

export default {
  name: "ListWithOverflowIcon",
  title: "List With Overflow Icon",
  type: "object",
  fields: [
    {
      name: 'icon',
      title: 'Icon',
      type: 'image',
      validation: Rule => Rule.required(),
    },
    {
      name: 'title',
      type: 'markdown',
      validation: Rule => Rule.required(),
    },
    {
      name: 'description',
      type: 'markdown',
      validation: Rule => Rule.required(),
    },
    {
      name: 'img',
      title: 'Image (optional)',
      type: 'image',
    },
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'description',
      icon: 'icon',
      img: 'img'
    },
    prepare({ title, subtitle, icon, img }) {
      return {
        title: removeMarkdown(title),
        subtitle: removeMarkdown(subtitle),
        media: img || icon,
      }
    }
  }
}

export const ListWithOverflowIcon_Array = {
  name: "ListWithOverflowIcon_Array",
  title: "List With Overflow Icon Array",
  type: "object",
  fields: [
    {
      name: 'blocks',
      type: 'array',
      of: [
        {
          type: 'ListWithOverflowIcon',
        }
      ],
      title: 'Blocks',
      validation: Rule => Rule.required(),
    },
  ],
  preview: {
    select: {
      title: 'blocks',
    },
    prepare({ title }) {
      return {
        title: `[List With Overflow Icon Array] - ${title.length} blocks`,
      };
    }
  }
}