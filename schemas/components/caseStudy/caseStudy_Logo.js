import { removeMarkdown } from "../../../utils/functions";

export default {
  name: "caseStudy_Logo",
  title: "Case Study Logo",
  type: "object",
  fields: [
    {
      name: 'heading',
      type: 'markdown',
      title: 'Heading',
    },
    {
      name: 'paragraph',
      type: 'markdown',
      title: 'Paragraph',
    },
    {
      name: 'proposals',
      type: 'array',
      of: [
        {
          type: 'titleAndImage'
        }
      ],
      title: 'Proposals',
      validation: Rule => Rule.max(4),
    },
  ],
  preview: {
    select: {
      title: 'heading',
      subtitle: 'paragraph'
    },
    prepare({ title, subtitle }) {
      return {
        title: `[Logo] ${removeMarkdown(title)}`,
        subtitle: removeMarkdown(subtitle),
      };
    }
  }
}