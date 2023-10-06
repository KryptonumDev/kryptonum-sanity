import { removeMarkdown } from "../../utils/functions";

export default {
  name: "TextColumnComponent",
  title: "Text Column Component",
  type: "object",
  fields: [
    {
      name: 'heading',
      type: 'markdown',
      title: 'Heading',
    },
    {
      name: 'blocks',
      type: 'array',
      of: [
        { type: 'markdown' }
      ],
      title: 'Blocks',
    },
  ],
  preview: {
    select: {
      title: 'heading',
      subtitle: 'blocks',
    },
    prepare({ title, subtitle }) {
      return {
        title: `[Text Column Component] ${removeMarkdown(title)}`,
        subtitle: removeMarkdown(subtitle.join(', ')),
      };
    }
  }
}