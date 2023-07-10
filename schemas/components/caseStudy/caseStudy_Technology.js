import { removeMarkdown } from "../../../utils/functions";

export default {
  name: "caseStudy_Technology",
  title: "Technologie",
  type: "object",
  fields: [
    {
      name: 'paragraph',
      type: 'string',
      title: 'Paragraph',
      initialValue: 'Zastosowane technologie'
    },
    {
      name: 'technologies',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{ type: 'technologies' }],
          options: { disableNew: true },
        }
      ],
      title: 'Technologies',
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