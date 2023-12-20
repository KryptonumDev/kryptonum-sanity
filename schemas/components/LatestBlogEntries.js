import { removeMarkdown } from "../../utils/functions";

export default {
  name: "LatestBlogEntries",
  title: "Blog Entries",
  type: "object",
  fields: [
    {
      name: 'heading',
      type: 'markdown',
      title: 'Heading',
      validation: Rule => Rule.required()
    },
  ],
  preview: {
    select: {
      title: 'heading',
    },
    prepare({ title }) {
      return {
        title: `[Blog Entries] ${removeMarkdown(title)}`,
      };
    }
  }
}