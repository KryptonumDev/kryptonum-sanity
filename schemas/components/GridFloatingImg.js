import { removeMarkdown } from "../../utils/functions";

export default {
  name: "GridFloatingImg",
  title: "Grid Floating Img",
  type: "object",
  fields: [
    {
      name: 'heading',
      type: 'markdown',
      title: 'Heading',
      validation: Rule => Rule.required(),
    },
    {
      name: 'list',
      type: 'array',
      of: [
        {
          type: 'titleDescriptionAndImg',
        }
      ],
      title: 'List',
    },
  ],
  preview: {
    select: {
      title: 'heading',
      list: 'list',
    },
    prepare({ title, list }) {
      return {
        title: `[Grid Floating Img] ${removeMarkdown(title)}`,
        subtitle: `${list.length} items`,
      };
    }
  }
}