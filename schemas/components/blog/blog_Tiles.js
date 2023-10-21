import { removeMarkdown } from "../../../utils/functions";

export default {
  name: "blog_Tiles",
  title: "Blog Tiles",
  type: "object",
  fields: [
    {
      name: 'heading',
      type: 'markdown'
    },
    {
      description: 'To make an list, you should use list in the toolbar.',
      name: 'list',
      type: 'markdown'
    },
  ],
  preview: {
    select: {
      title: 'heading',
      subtitle: 'list',
    },
    prepare({ title, subtitle }) {
      return {
        title: removeMarkdown(title),
        subtitle: removeMarkdown(subtitle)
      };
    }
  }
}

export const blog_TilesArray = {
  name: "blog_TilesArray",
  title: "Blog Tiles Array",
  type: "object",
  fields: [
    {
      name: 'array',
      type: 'array',
      of: [
        {
          type: 'blog_Tiles'
        }
      ]
    },
  ],
  preview: {
    select: {
      title: 'array',
    },
    prepare({ title }) {
      return {
        title: title.map(item => item.heading).join(', '),
      };
    }
  }
}