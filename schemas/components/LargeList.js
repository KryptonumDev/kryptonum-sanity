import { removeMarkdown } from "../../utils/functions"

export default {
  name: "LargeList",
  title: "Large List",
  type: "object",
  fields: [
    {
      name: 'heading',
      type: 'markdown',
      title: 'Heading',
      validation: Rule => Rule.required(),
    },
    {
      name: 'img',
      type: 'image',
      title: 'Image (optional)',
    },
    {
      name: 'list',
      type: 'array',
      of: [
        {
          type: 'titleAndDescription'
        },
      ],
      validation: Rule => Rule.required(),
    },
  ],
  preview: {
    select: {
      title: 'heading',
      img: 'img',
      list: 'list',
    },
    prepare({ title, list, img }) {
      return {
        title: `[Large List] ${removeMarkdown(title)}`,
        subtitle: `${list.length} items`,
        media: img,
      }
    }
  }
}