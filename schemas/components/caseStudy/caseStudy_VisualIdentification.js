import { removeMarkdown } from "../../../utils/functions";

export default {
  name: "caseStudy_VisualIdentification",
  title: "Identyfikacja wizualna",
  type: "object",
  fields: [
    {
      name: 'images',
      type: 'array',
      of: [{ type: 'image' }],
      title: 'Image',
    },
    {
      name: 'paragraph',
      type: 'markdown',
      title: 'Paragraph',
      initialValue: 'Identyfikacja wizualna',
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