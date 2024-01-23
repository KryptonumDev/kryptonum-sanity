import { removeMarkdown } from "../../utils/functions";

export default {
  name: "CaseStudies",
  title: "Selectable Case Studies",
  type: "object",
  fields: [
    {
      name: 'heading',
      type: 'markdown',
      title: 'Heading',
    },
    {
      name: 'caseStudies',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{ type: 'caseStudy_entries' }],
          options: { disableNew: true },
        }
      ],
      validation: Rule => Rule.required().max(7), 
    }
  ],
  preview: {
    select: {
      title: 'heading',
    },
    prepare({ title }) {
      return {
        title: `[Selectable Case Studies] ${removeMarkdown(title)}`,
      };
    }
  }
}