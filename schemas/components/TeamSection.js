import { removeMarkdown } from "../../utils/functions";

export default {
  name: "TeamSection",
  title: "Team Section",
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
      name: 'cta',
      type: 'cta',
      title: 'CTA',
    },
  ],
  preview: {
    select: {
      title: 'heading',
      subtitle: 'paragraph',
    },
    prepare({ title, subtitle }) {
      return {
        title: `[Team Section] ${removeMarkdown(title)}`,
        subtitle: removeMarkdown(subtitle),
      };
    }
  }
}