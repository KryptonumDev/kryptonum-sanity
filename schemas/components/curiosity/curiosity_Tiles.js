import { removeMarkdown } from "../../../utils/functions";

export default {
  name: "curiosity_Tiles",
  title: "Sekcja z blokami tekstu",
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
      description: 'Make enter in fields to create two paragraphs.',
      of: [
        {
          type: 'markdown',
        }
      ],
      title: 'List',
    },
    {
      name: 'annotation',
      type: 'markdown',
      title: 'Annotation',
    },
  ],
  preview: {
    select: {
      title: 'heading',
      subtitle: 'list'
    },
    prepare({ title, subtitle }) {
      return {
        title: removeMarkdown(title),
        subtitle: subtitle[0] ? removeMarkdown(subtitle[0]) : '',
      };
    }
  }
}