import { removeMarkdown } from "../../utils/functions";

export default {
  name: "CenteredHeading",
  title: "Centered Heading",
  type: "object",
  fields: [
    {
      name: 'heading',
      type: 'markdown',
      title: 'Heading',
      validation: Rule => Rule.required(),
    },
    {
      name: 'paragraph',
      type: 'markdown',
      title: 'Paragraph (optional)'
    },
    {
      name: 'cta',
      type: 'cta',
      title: 'Call to action (optional)'
    }
  ],
  preview: {
    select: {
      title: 'heading',
      subtitle: 'paragraph',
    },
    prepare({ title, subtitle }) {
      return {
        title: `[Centered Heading] ${removeMarkdown(title)}`,
        subtitle: removeMarkdown(subtitle),
      };
    }
  }
}