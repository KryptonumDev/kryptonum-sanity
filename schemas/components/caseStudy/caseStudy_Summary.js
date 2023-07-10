import { removeMarkdown } from "../../../utils/functions";

export default {
  name: "caseStudy_Summary",
  title: "Podsumowanie",
  type: "object",
  fields: [
    {
      name: 'paragraph',
      type: 'markdown',
      title: 'Paragraph',
    },
    {
      name: 'paragraph2',
      type: 'markdown',
      title: 'Second Paragraph',
    },
  ],
  preview: {
    select: {
      title: 'paragraph',
      subtitle: 'paragraph2',
    },
    prepare({ title, subtitle }) {
      return {
        title: removeMarkdown(title),
        subtitle: removeMarkdown(subtitle),
      };
    }
  }
}