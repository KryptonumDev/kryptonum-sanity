import { removeMarkdown } from "../../../utils/functions";

export default {
  name: "caseStudy_Participated",
  title: "Case Study Participated",
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
      name: 'people',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{ type: 'teamMember' }],
          options: { disableNew: true },
        }
      ],
      validation: Rule => Rule.max(6),
    },
  ],
  preview: {
    select: {
      title: 'heading',
      subtitle: 'paragraph',
    },
    prepare({ title, subtitle }) {
      return {
        title: `[Participated] ${removeMarkdown(title)}`,
        subtitle: removeMarkdown(subtitle)
      };
    }
  }
}