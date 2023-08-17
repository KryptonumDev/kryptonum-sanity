import { removeMarkdown } from "../../../utils/functions";

export default {
  name: "caseStudy_Feautures",
  title: "Case Study Feautures",
  type: "object",
  fields: [
    {
      name: 'heading',
      type: 'markdown',
      title: 'Heading',
    },
    {
      name: 'feautures',
      type: 'array',
      of: [
        {
          type: 'titleAndImage'
        }
      ],
      title: 'Feautures',
      validation: Rule => Rule.max(7),
    },
  ],
  preview: {
    select: {
      title: 'heading',
      subtitle: 'feautures'
    },
    prepare({ title, subtitle }) {
      return {
        title: `[Feautures] ${removeMarkdown(title)}`,
        subtitle: `${subtitle.length} feautures`,
      };
    }
  }
}