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