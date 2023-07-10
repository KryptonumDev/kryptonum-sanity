import { removeMarkdown } from "../../../utils/functions";

export default {
  name: "caseStudy_Highlight",
  title: "Wyróżniony blok tesktu",
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
      name: 'claim',
      type: 'markdown',
      title: 'Claim',
    },
  ],
  preview: {
    select: {
      title: 'heading',
      subtitle: 'paragraph',
    },
    prepare({ title, subtitle }) {
      return {
        title: removeMarkdown(title),
        subtitle: removeMarkdown(subtitle),
      };
    }
  }
}