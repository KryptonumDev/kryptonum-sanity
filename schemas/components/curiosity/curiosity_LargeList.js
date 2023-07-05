import { removeMarkdown } from "../../../utils/functions";

export default {
  name: "curiosity_LargeList",
  title: "Duża lista numerowana lewo/prawo",
  type: "object",
  fields: [
    {
      name: 'heading',
      type: 'markdown',
      title: 'Heading',
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