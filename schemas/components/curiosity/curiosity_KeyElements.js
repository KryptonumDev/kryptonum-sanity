import { removeMarkdown } from "../../../utils/functions";

export default {
  name: "curiosity_KeyElements",
  title: "Lista kluczowych elementów",
  type: "object",
  fields: [
    {
      name: 'heading',
      title: 'Heading',
      type: 'markdown',
    },
    {
      name: 'list',
      type: 'array',
      of: [
        {
          type: 'markdown',
          title: 'Text',
        }
      ],
      title: 'List',
    },
    {
      name: 'paragraph',
      type: 'markdown',
      title: 'Paragraph',
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
        subtitle: removeMarkdown(subtitle[0]),
      };
    }
  }
}