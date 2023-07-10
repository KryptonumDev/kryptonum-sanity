import { removeMarkdown } from "../../../utils/functions";

export default {
  name: "curiosity_ColumnText",
  title: "Sekcja z tekstem w kolumnie",
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
  ],
  preview: {
    select: {
      title: 'heading',
      subtitle: 'paragraph'
    },
    prepare({ title, subtitle }) {
      return {
        title: removeMarkdown(title),
        subtitle: removeMarkdown(subtitle),
      };
    }
  }
}