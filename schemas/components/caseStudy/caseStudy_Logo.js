import { removeMarkdown } from "../../../utils/functions";

export default {
  name: "caseStudy_Logo",
  title: "Logo",
  type: "object",
  fields: [
    {
      name: 'images',
      type: 'array',
      of: [{ type: 'image' }],
      title: 'Logo',
    },
    {
      name: 'paragraph',
      type: 'markdown',
      title: 'Paragraph',
      initialValue: 'Logo',
    },
    
  ],
  preview: {
    select: {
      title: 'paragraph',
    },
    prepare({ title }) {
      return {
        title: removeMarkdown(title),
      };
    }
  }
}